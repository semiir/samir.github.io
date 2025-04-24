"use client";

import MyHeader from "@/components/ui/header";

import ImageGrid from "@/app/util/ImageGrid";
import {cardImages} from "@/app/items/CardImages";

import { MyTypewriter } from "@/app/util/Mytypewriter";
import { SkillsCarousel } from "@/app/util/carousels";
import Footer from "@/app/util/footer";

import Link from "next/link" ;


export default function Home() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-7">
      <MyHeader />
      
      <MyTypewriter />

      <main className="relative flex flex-col justify-start bg-slate-50 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-7">
        <div className="flex flex-row items-center gap-5 mb-5">
          <h2 className="text-3xl font-bold text-gray-500">My Projects</h2>
          <p className="text-base text-white py-1 px-3 rounded-lg bg-gray-500">
            <Link href="/projects">View All</Link>
          </p>
        </div>

        <hr className="mb-4"/>

      <ImageGrid images={cardImages.slice(0,3)} />


      </div>
    </main>


      <SkillsCarousel />

    </div>
    </div>
    <Footer />
    </>
  )
}
