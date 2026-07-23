import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageTitle } from "@/lib/page-titles";
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
  return { title: pageTitle("en", slug) };
}

export default async function EnSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!isPageSlug(slug) || slug === "index") {
    notFound();
  }
  return <SitePage slug={slug} locale="en" />;
}
