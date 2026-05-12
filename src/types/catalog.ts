export interface CatalogSubSubCategory {
  id: number;
  name: string;
  slug: string;
  icon_path: string | null;
  sort_order: number;
  is_active: boolean;
  duas: {
    id: number;
    title: string;
    translation: string;
  };
}

export interface CatalogSubCategory {
  id: number;
  name: string;
  slug: string;
  icon_path: string;
  sort_order: number;
  is_active: boolean;
  sub_subcategories: CatalogSubSubCategory[];
}

export interface CatalogCategory {
  id: number;
  name: string;
  slug: string;
  icon_path: string;
  sort_order: number;
  is_active: boolean;
  subcategories: CatalogSubCategory[];
}

export interface CatalogCategoriesApiResponse {
  status: number;
  success: boolean;
  message: string;
  count: number;
  data: CatalogCategory[];
}
