import Image from "next/image";
import nextSvg from "../public/images/champagne.jpg";
import { images } from "../app/gallery/images";

export default function Home() {
  const cars = images.map((car) => {
    return (
      <Image src={car.url} alt={car.alt} width={375} key={car.url + car.id} />
    );
  });
  return (
    <main style={{ backgroundColor: "black", color: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {cars}
      </div>
    </main>
  );
}
