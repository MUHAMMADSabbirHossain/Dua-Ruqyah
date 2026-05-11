import { Metadata } from "next";

async function getCategory(slug: string) {
  const result = await fetch(
    `http://localhost:3000/api/v1/categories?slug=${slug}`,
  );
  const data = await result.json();

  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  //   console.log(slug);

  const data = await getCategory(slug);

  return {
    title: `${data?.data?.name || ""} - Dua & Ruqyah | (duaruqyahird.netlify.app)`,
    description: `${data?.data?.description || ""} | Dua & Ruqyah (duaruqyahird.netlify.app)`,
  };
}

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
