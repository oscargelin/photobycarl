import archiPelagoOne from "../../../public/images/archipelagoOne.jpg";
import archiPelagoTwo from "../../../public/images/archipelagoTwo.jpg";
import archiPelagoThree from "../../../public/images/archipelagoThree.jpg";
import archiPelagoFour from "../../../public/images/archipelagoFour.jpg";
import { StaticImageData } from "next/image";

type imageObject = {
  id: string;
  url: StaticImageData;
  heading: string;
  category: string;
  alt: string;
};
export const images: imageObject[] = [
  {
    id: "1",
    url: archiPelagoOne,
    heading: "",
    category: "archipelago",
    alt: "archipelago img",
  },
  {
    id: "2",
    url: archiPelagoTwo,
    heading: "",
    category: "archipelago",
    alt: "archipelago img",
  },
  {
    id: "3",
    url: archiPelagoThree,
    heading: "",
    category: "archipelago",
    alt: "archipelago img",
  },
  {
    id: "4",
    url: archiPelagoFour,
    heading: "",
    category: "archipelago",
    alt: "archipelago img",
  },
];
