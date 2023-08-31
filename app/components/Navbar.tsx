import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} href="/">
          A Photographs Perspective
        </Link>
      </h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-evenly",
          paddingBottom: "30px",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} href={"/"}>
          Home
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href={"https://www.instagram.com/aphotographersperspective/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href={"/contact"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
