"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"


interface ImageItem{
    src: string;
    alt: string;
    url?: string;
    badge?: string;
    parts?: string;
}

interface ImageGridProps{
    images: ImageItem[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((image, index) => (
          
          <div key={index} className="relative h-60">
             
              {image.url ? (
              <Link href={image.url}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-xl border shadow"
                  style={{ objectFit: "cover" }}
                />
              </Link>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-xl border shadow"
                style={{ objectFit: "cover" }}
              />
            )}
            <div className="absolute bottom-0 right-0 p-2 text-white text-right">
              {image.badge && <Badge variant="secondary">{image.badge}</Badge>}
            </div>
            <div className="absolute bottom-0 left-0 p-2 text-white text-right">
              {image.parts && <Badge variant="default">{image.parts}</Badge>}
            </div>
            
            </div>
        ))}
      </div>
    </>
  );
}