import { NextResponse } from "next/server";
import db from "@/lib/database";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    // console.log(slug);

    const sqlQuery = `SELECT * FROM categories WHERE slug = ?`;

    const result = db.prepare(sqlQuery).get(slug);

    return NextResponse.json(
      {
        status: 200,
        success: true,
        error: null,
        message: "Category fetched successfully",
        data: result || null,
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
