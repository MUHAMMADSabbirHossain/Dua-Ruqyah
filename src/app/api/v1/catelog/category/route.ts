import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/database";
import { CatalogSubSubCategory } from "@/types/catalog";

interface CatalogCategory {
  id: number;
  name: string;
  name_ar: string;
  slug: string;
  icon_path: string | null;
  sort_order: number;
  is_active: boolean;
  subcategories: CatalogSubSubCategory;
}

interface RawCategoryRow {
  id: number;
  name: string;
  name_ar: string;
  slug: string;
  icon_path: string | null;
  sort_order: number;
  is_active: number; // SQLite returns 0/1 for booleans
  subcategories: string | null; // JSON string from SQLite
}

export async function GET(req: NextRequest) {
  try {
    const result = db
      .prepare(
        `
          SELECT
            categories.id,
            categories.name,
            categories.name_ar,
            categories.slug,
            categories.icon_path,
            categories.sort_order,
            categories.is_active,
            (
              SELECT JSON_GROUP_ARRAY(
                JSON_OBJECT(
                  'id', subcategories.id,
                  'name', subcategories.name,
                  'slug', subcategories.slug,
                  'icon_path', subcategories.icon_path,
                  'sort_order', subcategories.sort_order,
                  'is_active', subcategories.is_active,
                  'sub_subcategories', (
                    SELECT JSON_GROUP_ARRAY(
                      JSON_OBJECT(
                        'id', sub_subcategories.id,
                        'name', sub_subcategories.name,
                        'slug', sub_subcategories.slug,
                        'icon_path', sub_subcategories.icon_path,
                        'sort_order', sub_subcategories.sort_order,
                        'is_active', sub_subcategories.is_active,
                        'dua', (
                          SELECT JSON_OBJECT(
                            'id', duas.id,
                            'title', duas.title,
                            'translation', duas.translation
                          )
                          FROM duas
                          WHERE INSTR(
                            sub_subcategories.name,
                            TRIM(SUBSTR(duas.title, INSTR(duas.title, '.') + 1))
                          ) > 0
                        )
                      )
                    )
                    FROM sub_subcategories
                    WHERE sub_subcategories.subcategory_id = subcategories.id
                  )
                )
              )
              FROM subcategories
              WHERE subcategories.category_id = categories.id
            ) AS subcategories
          FROM categories
          ORDER BY categories.sort_order ASC, 
            categories.id ASC;
        `,
      )
      .all() as RawCategoryRow[];

    // Parse JSON string to array of objects
    const parseResult: CatalogCategory[] = result.map((row) => ({
      id: row.id,
      name: row.name,
      name_ar: row.name_ar,
      slug: row.slug,
      icon_path: row.icon_path,
      sort_order: row.sort_order,
      is_active: Boolean(row.is_active), // Convert 0/1 to boolean
      subcategories: row.subcategories ? JSON.parse(row.subcategories) : [],
    }));

    // ================== Server working approach start ==================
    // const duas = await db.prepare("SELECT * FROM duas").all();

    // parseResult.forEach((c) => {
    //   c?.subcategories?.forEach((sc) => {
    //     sc?.sub_subcategories?.forEach((ssc) => {
    //       const d = duas.find((d) => {
    //         const dName = d?.title?.replace(/^\d+\.\s*/, "");
    //         return ssc?.name?.includes(dName);
    //       });
    //       ssc.dua = d;
    //     });
    //   });
    // });

    // ================== Server working approach end ==================

    return NextResponse.json(
      {
        status: 200,
        success: true,
        error: null,
        message: "Categories fetched successfully",
        count: parseResult.length,
        data: parseResult,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("error: ", error);

    return NextResponse.json(
      {
        status: 500,
        success: false,
        message: "Something went wrong. Internal server error.",
        // error:
        //   process.env.NODE_ENV === "development"
        //     ? Object.getOwnPropertyNames(error).reduce(
        //         (acc: Record<string, unknown>, key: string) => {
        //           acc[key] = error[key];
        //           return acc;
        //         },
        //         {} as Record<string, unknown>,
        //       )
        //     : undefined,
        error: error,
        data: null,
      },
      { status: 500 },
    );
  }
}
