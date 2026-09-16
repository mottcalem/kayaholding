import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/page-seo";
import { isPageSlug } from "@/lib/pages";
import { SitePage } from "@/lib/site-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isPageSlug(slug) || slug === "index") {
    return {};
  }
  return buildPageMetadata("en", slug);
}

export default async function EnSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!isPageSlug(slug) || slug === "index") {
    notFound();
  }
  return <SitePage slug={slug} locale="en" />;
}
