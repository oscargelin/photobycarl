import Link from "next/link";
import React from "react";

const Navbar = () => {
  const mobileMenu = "py-0.5 px-3 rounded bg-white mb-1.5";

  return (
    <nav>
      <h1 className="flex justify-between">
        <Link href="/">PhotoByCarl</Link>
        <div className="flex justify-center flex-col w-8 cursor-pointer">
          <div className={mobileMenu}></div>
          <div className={mobileMenu}></div>
          <div className={mobileMenu}></div>
        </div>
      </h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-evenly",
          paddingBottom: "30px",
        }}
      >
        <Link href={"/"}>Home</Link>
        <Link
          href={"https://www.instagram.com/aphotographersperspective/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
