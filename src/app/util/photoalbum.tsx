import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
//import NextJsImage from "@/shadcn/NextJsImage"; //not mentioned in this code, but is used mostly to optimize images. it can be commented out for now.

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import type { Photo } from "react-photo-album";

interface photoalbumProps {
  photos: Photo[];
}

export default function Photoalbum({ photos }: photoalbumProps) {
  const [index, setIndex] = useState(-1);


    return (
      <>
        <RowsPhotoAlbum 
        photos={photos} 
        targetRowHeight={350} 
        onClick={({ index }) => setIndex(index)} 
        />
  
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </>
    );
}
