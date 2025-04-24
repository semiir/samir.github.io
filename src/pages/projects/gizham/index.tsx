       
"use client";

import Photoalbum from "@/app/util/photoalbum";
import { gizham } from "@/app/items/farmguide";
import ContentPage from "@/app/util/ContentPage";
import { Details } from "@/app/items/CardImages";

export default function GIZHAM() {

  const pageId= 6; 
  const details = Details.find((detail) => detail.id === pageId);
  
  if (!details) {
    return <div>Details not found for this page.</div>; 
  }

  return (
    <>
    <ContentPage title={details.title} description={details.description}>
        <Photoalbum photos={gizham} />
      </ContentPage>
    </>
  );
}