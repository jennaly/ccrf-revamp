import { figtree } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

const WWFCard = () => {
  return (
    <div className="w-full md:w-[48%] xl:w-[32%] flex flex-col py-[24px] border-t xl:border-b border-accent-gray">
      <h3 className={`${figtree.className} text-lg md:text-xl xl:text-2xl`}>
        Innovative and promising research
      </h3>
      <div className="w-full pt-[24px]">
        <Image
          src="/whatWeFund-program1.webp"
          alt="program 1"
          width="300"
          height="500"
          className="w-full h-128 object-cover object-center rounded-xl"
        />
      </div>

      <div
        className={`${figtree.className} text-md md:text-lg xl:text-xl pt-[24px]`}
      >
        <span className="font-semibold">
          We fund research at institutions nationwide.
        </span>{" "}
        <p>
          Bridge funding gaps for research projects by helping researchers prove
          their ideas and secure larger grants.
        </p>
      </div>
    </div>
  );
};

export default WWFCard;
