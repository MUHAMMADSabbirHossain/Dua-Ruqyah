export interface Category {
  id: number;
  name: string;
  name_ar: string | null;
  slug: string;
  icon_svg: string | null;
  icon_path: string | null;
  description: string | null;
  description_ar: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CategoryApiResponse {
  status: number;
  success: boolean;
  message: string;
  data: Category;
}
