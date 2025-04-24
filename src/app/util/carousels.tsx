"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaWordpress, FaSass, FaReact, FaDatabase, FaFigma, FaGit } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { DiJqueryLogo } from "react-icons/di";
import { SiWoocommerce } from "react-icons/si";


const iconProps = {
  color: "#6b7280", 
  size: "4em" 
};

const skillsImages = [
  { src: <FaHtml5 {...iconProps} />, alt: "HTML5" },
  { src: <FaCss3Alt {...iconProps} />, alt: "CSS3" },
  { src: <FaJs {...iconProps} />, alt: "Javascript" },
  { src: <DiJqueryLogo {...iconProps} />, alt: "Jquery" },
  { src: <FaBootstrap {...iconProps} />, alt: "Bootstrap" },
  { src: <FaWordpress {...iconProps} />, alt: "Wordpress" },
  { src: <FaSass {...iconProps} />, alt: "Sass" },
  { src: <FaReact {...iconProps} />, alt: "ReactJS" },
  { src: <GrGraphQl {...iconProps} />, alt: "Graphql" },
  { src: <FaDatabase {...iconProps} />, alt: "Mysql" },
  { src: <FaFigma {...iconProps} />, alt: "Figma" },
  { src: <FaGit {...iconProps} />, alt: "Git" },
  { src: <SiWoocommerce {...iconProps} />, alt: "Woocommerce" },

];


export function SkillsCarousel() {

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  
    return (
        <div className="px-10 md:px-6 py-7">
           <h2 className="text-3xl font-bold my-5 text-gray-500">My Tools</h2>
           <Carousel
        plugins={[plugin.current]}
        // loop={true} // Enable looping
        className="my-5"
      >
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselContent className="">
          {skillsImages.map((image, index) => (
            <CarouselItem key={index} className="text-center basis-1/3 md:basis-1/4  lg:basis-1/5 gap-5">
              <div className="mt-3 flex justify-center items-center">{image.src}</div>
              <h2 className="font-medium mt-3 text-center">{image.alt}</h2>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext>Next</CarouselNext>
      </Carousel>
             
      </div>
    );
}