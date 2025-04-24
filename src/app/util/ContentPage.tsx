"use client";

import MyHeader from "@/components/ui/header";
// import Photoalbum from "@/app/util/photoalbum";
// import {awash} from "@/app/items/farmguide"; 
import Footer from "@/app/util/footer";
import TheBreadcrumbs from "@/app/util/thebreadcrumbs";
import { Details } from "@/app/items/CardImages";


interface ContentPageProps {
  children: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export default function ContentPage({ children, title, description }: ContentPageProps) {

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-7">
          <MyHeader />
          <TheBreadcrumbs />

          <div className="mt-10 mb-5">
            <h2 className="font-extrabold text-3xl text-gray-600 mb-5">{title}</h2>
            <p className="text-balance text-gray-500 text-lg mt-4 mb-8">{description}
              <br />
              Feel free to have a look! <br />
                    <span className="font-bold italic">(Click on one of the images to View in Slideshow format or in Full Screen.)</span>
            </p>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}