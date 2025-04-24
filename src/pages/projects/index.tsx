"use client";

import ImageGrid from "@/app/util/ImageGrid";
import {cardImages} from "@/app/items/CardImages";

import MyHeader from "@/components/ui/header";
import Footer  from "@/app/util/footer";


export default function aboutme() {
  return (
    <>
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-7">

      <MyHeader/>

      <div className="mt-10 mb-5">
        <h2 className="font-extrabold text-3xl text-gray-600 mb-5">My Projects</h2>
        <p className="text-balance text-muted-foreground text-lg mt-4 mb-8">Here are some of my favourite projects. Feel free to have a look!</p>
      </div>

     <ImageGrid images={cardImages} />
     </div>
  <Footer/>
</>
    
  );
}
