import type { Metadata } from "next";
import { AirPhotoGallery } from "@/components/AirPhotoGallery";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Havacılık",
};

export default function Page() {
  return (
    <>
      <PageContent slug="havacilik" />
      <AirPhotoGallery />
    </>
  );
}
