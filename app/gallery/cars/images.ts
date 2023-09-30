import carOne from "../../../public/images/carOne.jpg";
import carTwo from "../../../public/images/carTwo.jpg";
import carThree from "../../../public/images/carThree.jpg";
import carFour from "../../../public/images/carFour.jpg";
import carFive from "../../../public/images/carFive.jpg";
import carSix from "../../../public/images/carSix.jpg";
// import carSeven from "../../../public/images/carSeven.jpg";
import carEight from "../../../public/images/carEight.jpg";
import carNine from "../../../public/images/carNine.jpg";
import carTen from "../../../public/images/carTen.jpg";
import carEleven from "../../../public/images/carEleven.jpg";
// import carTwelve from "../../../public/images/carTwelve.jpg";
import carThirteen from "../../../public/images/carThirteen.jpg";
import carFourteen from "../../../public/images/carFourteen.jpg";
import carFifteen from "../../../public/images/carFifteen.jpg";
import carSixteen from "../../../public/images/carSixteen.jpg";
// import carSeventeen from "../../../public/images/carSeventeen.jpg";
// import carEighteen from "../../../public/images/carEighteen.jpg";
// import carNineteen from "../../../public/images/carNineteen.jpg";
// import carTwenty from "../../../public/images/carTwenty.jpg";
// import carTwentyOne from "../../../public/images/carTwentyOne.jpg";
// import carTwentyTwo from "../../../public/images/carTwentyTwo.jpg";
import carTwentyThree from "../../../public/images/carTwentyThree.jpg";
import carTwentyFour from "../../../public/images/carTwentyFour.jpg";
import { StaticImageData } from "next/image";

type imageObject = {
  id: string;
  url: StaticImageData;
  heading: string;
  category: string;
  alt: string;
};
export const images: imageObject[] = [
  { id: "1", url: carOne, heading: "imgOne", category: "car", alt: "carOne" },
  { id: "2", url: carTwo, heading: "imgOne", category: "car", alt: "carOne" },
  { id: "3", url: carThree, heading: "imgOne", category: "car", alt: "carOne" },
  { id: "4", url: carFour, heading: "imgOne", category: "car", alt: "carOne" },
  { id: "5", url: carFive, heading: "imgOne", category: "car", alt: "carOne" },
  { id: "6", url: carSix, heading: "imgOne", category: "car", alt: "carOne" },
  //   { id: "7", url: carSeven, heading: "imgOne", category: "car", alt: "carOne" },
  { id: "8", url: carEight, heading: "imgOne", category: "car", alt: "carOne" },
  { id: "9", url: carNine, heading: "imgOne", category: "car", alt: "carOne" },
  { id: "10", url: carTen, heading: "imgOne", category: "car", alt: "carOne" },
  {
    id: "11",
    url: carEleven,
    heading: "imgOne",
    category: "car",
    alt: "carOne",
  },
  //   {
  //     id: "12",
  //     url: carTwelve,
  //     heading: "imgOne",
  //     category: "car",
  //     alt: "carOne",
  //   },
  {
    id: "13",
    url: carThirteen,
    heading: "imgOne",
    category: "car",
    alt: "carOne",
  },
  {
    id: "14",
    url: carFourteen,
    heading: "imgOne",
    category: "car",
    alt: "carOne",
  },
  {
    id: "15",
    url: carFifteen,
    heading: "imgOne",
    category: "car",
    alt: "carOne",
  },
  {
    id: "16",
    url: carSixteen,
    heading: "imgOne",
    category: "car",
    alt: "carOne",
  },
  //   {
  //     id: "17",
  //     url: carSeventeen,
  //     heading: "imgOne",
  //     category: "car",
  //     alt: "carOne",
  //   },
  //   {
  //     id: "18",
  //     url: carEighteen,
  //     heading: "imgOne",
  //     category: "car",
  //     alt: "carOne",
  //   },
  //   {
  //     id: "19",
  //     url: carNineteen,
  //     heading: "imgOne",
  //     category: "car",
  //     alt: "carOne",
  //   },
  //   {
  //     id: "20",
  //     url: carTwenty,
  //     heading: "imgOne",
  //     category: "car",
  //     alt: "carOne",
  //   },
  //   {
  //     id: "21",
  //     url: carTwentyOne,
  //     heading: "imgOne",
  //     category: "car",
  //     alt: "carOne",
  //   },
  //   {
  //     id: "22",
  //     url: carTwentyTwo,
  //     heading: "imgOne",
  //     category: "car",
  //     alt: "carOne",
  //   },
  {
    id: "23",
    url: carTwentyThree,
    heading: "imgOne",
    category: "car",
    alt: "carOne",
  },
  {
    id: "24",
    url: carTwentyFour,
    heading: "imgOne",
    category: "car",
    alt: "carOne",
  },
];
