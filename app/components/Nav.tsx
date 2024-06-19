import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full fixed top-0 bg-white z-50 ">
      <div className="max-w-[1440px] mx-auto px-[32px] xl:px-[64px] py-[20px]">
        <Image
          src="/ccrf-logo-narrow-blue.png"
          width="160"
          height="28"
          alt="CCRF logo"
        />
      </div>
    </nav>
  );
};

export default Nav;
