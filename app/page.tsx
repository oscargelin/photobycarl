import Image from "next/image";
import carProfilePic from "../public/images/carTwo.jpg";
import riddarProfilePic from "../public/images/riddarNine.jpg";
import archipelagoProfilePic from "../public/images/archipelagoFour.jpg";
import randomProfilePic from "../public/images/randomFour.jpg";
import { images } from "../app/gallery/images";
import Link from "next/link";
import Gallery from "./gallery/page";
export default function Home() {
  return (
    <main style={{ backgroundColor: "black", color: "white" }}>
      <Gallery />
    </main>
  );
}
