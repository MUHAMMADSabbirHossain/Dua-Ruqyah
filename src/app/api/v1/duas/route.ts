import { NextResponse } from "next/server";
import db from "@/lib/database";

export async function GET(req: Request) {
  try {
    // 1. Extract slugs from the request URL
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get("category_slug");
    const subCategorySlug = searchParams.get("sub_category_slug");
    // console.log(new URL(req.url), categorySlug, subCategorySlug);

    // 2. Sanitize the extracted slugs
    const sanitizedCategorySlug = categorySlug?.trim().toLowerCase();
    const sanitizedSubCategorySlug = subCategorySlug?.trim().toLowerCase();

    // 3. Write the SQL query with proper joins, params and conditions
    let sqlQuery = `
                        SELECT 
                            duas.*, -- all duas columns

                            -- categories columns
                            categories.id as category_id,
                            categories.slug as category_slug,

                            -- subcategories columns
                            subcategories.id as subcategory_id,
                            subcategories.slug as subcategory_slug
                        FROM duas 
                            INNER JOIN categories 
                            ON duas.category_id = categories.id
                            INNER JOIN subcategories 
                            ON subcategories.category_id = categories.id
                        WHERE 1 = 1
                    `;

    let params = [];

    // if subcategory slug is present, then fetch data based on subcategory slug else fetch data based on category slug
    if (sanitizedSubCategorySlug && sanitizedSubCategorySlug.length > 0) {
      // Query based on subcategory slug only
      sqlQuery += ` AND subcategories.slug = ? `;
      params.push(sanitizedSubCategorySlug);
    } else if (sanitizedCategorySlug && sanitizedCategorySlug.length > 0) {
      // Query based on category slug only
      sqlQuery += ` AND categories.slug = ? `;
      params.push(sanitizedCategorySlug);
    } else {
      // Query all duas
      sqlQuery += ` AND 1 = 1 `;
    }

    // execute the query
    const result = db.prepare(sqlQuery).all(...params);

    return NextResponse.json(
      {
        status: 200,
        success: true,
        error: null,
        message: "Data fetched successfully",
        count: result?.length || 0,
        data: result || [],
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
