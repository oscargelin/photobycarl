import React from "react";
import { images } from "./images";
import Image from "next/image";

const page = () => {
  return (
    <div style={{ width: "100%" }}>
      {images.map((image) => (
        <Image
          className="p-2"
          src={image.url}
          alt={image.alt}
          key={image.id}
          layout="responsive"
          quality={100}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default page;
