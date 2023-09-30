import React from "react";
import Image from "next/image";
import carProfilePic from "../../public/images/carTwo.jpg";
import riddarProfilePic from "../../public/images/riddarNine.jpg";
import archipelagoProfilePic from "../../public/images/archipelagoFour.jpg";
import randomProfilePic from "../../public/images/randomFour.jpg";
import Link from "next/link";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Link href="/gallery/cars">
        <div style={{ position: "relative" }}>
          <Image
            src={carProfilePic}
            alt="3 cars on a track"
            width={375}
            quality={100}
          />
          <div
            style={{
              height: "40px",
              position: "absolute",
              bottom: "0",
              width: "100%",
              backgroundColor: "rgba(34, 34, 34, 0.4)",
            }}
          >
            <h2
              style={{
                margin: "auto",
                textAlign: "center",
                paddingTop: "5px",
              }}
            >
              Cars
            </h2>
          </div>
        </div>
      </Link>
      <Link href="/gallery/archipelago">
        <div style={{ position: "relative" }}>
          <Image
            src={archipelagoProfilePic}
            alt="3 cars on a track"
            width={375}
            quality={100}
          />
          <div
            style={{
              height: "40px",
              position: "absolute",
              bottom: "0",
              width: "100%",
              backgroundColor: "rgba(34, 34, 34, 0.4)",
            }}
          >
            <h2
              style={{
                margin: "auto",
                textAlign: "center",
                paddingTop: "5px",
              }}
            >
              Archipelago
            </h2>
          </div>
        </div>
      </Link>
      <Link href="/gallery/people">
        <div style={{ position: "relative" }}>
          <Image
            src={riddarProfilePic}
            alt="3 cars on a track"
            width={375}
            quality={100}
          />
          <div
            style={{
              height: "40px",
              position: "absolute",
              bottom: "0",
              width: "100%",
              backgroundColor: "rgba(34, 34, 34, 0.4)",
            }}
          >
            <h2
              style={{
                margin: "auto",
                textAlign: "center",
                paddingTop: "5px",
              }}
            >
              Riddarhuset
            </h2>
          </div>
        </div>
      </Link>
      <Link href="/gallery/people">
        <div style={{ position: "relative" }}>
          <Image
            src={randomProfilePic}
            alt="3 cars on a track"
            width={375}
            quality={100}
          />
          <div
            style={{
              height: "40px",
              position: "absolute",
              bottom: "0",
              width: "100%",
              backgroundColor: "rgba(34, 34, 34, 0.4)",
            }}
          >
            <h2
              style={{
                margin: "auto",
                textAlign: "center",
                paddingTop: "5px",
              }}
            >
              Random
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default page;
