
"use client";

import Photoalbum from "@/app/util/photoalbum";
import { Tomorrow_Foundation } from "@/app/items/farmguide";
import ContentPage from "@/app/util/ContentPage";
import { Details } from "@/app/items/CardImages";

export default function TOMORROW_FOUNDATION() {

  const pageId= 11; 
  const details = Details.find((detail) => detail.id === pageId);
  
  if (!details) {
    return <div>Details not found for this page.</div>; 
  }

  return (
    <>
    <ContentPage title={details.title} description={details.description}>
        <Photoalbum photos={Tomorrow_Foundation} />
      </ContentPage>
    </>
  );
}