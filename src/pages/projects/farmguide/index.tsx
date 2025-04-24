
"use client";

import Photoalbum from "@/app/util/photoalbum";
import { farmguide_site } from "@/app/items/farmguide";
import ContentPage from "@/app/util/ContentPage";
import { Details } from "@/app/items/CardImages";

export default function FARMGUIDE() {

  const pageId= 4; // The ID corresponding to this page
  const details = Details.find((detail) => detail.id === pageId);
  
  if (!details) {
    return <div>Details not found for this page.</div>; 
  }

  return (
    <>
    <ContentPage title={details.title} description={details.description}>
        <Photoalbum photos={farmguide_site} />
      </ContentPage>
    </>
  );
}     