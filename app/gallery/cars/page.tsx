import React from "react";
import { images } from "./images";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {images.map((car) => {
        return (
          <Image
            className="p-2"
            src={car.url}
            alt={car.alt}
            key={car.id}
            layout="responsive"
            quality={100}
            loading="lazy"
          />
        );
      })}
    </div>
  );
};

export default page;
