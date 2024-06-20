import { HomePage, Program } from "@/lib/definitions";
import { crimson, figtree } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

type WWFProgramProps = {
  data: Program;
};

const WWFCard = ({
  data: { heading, text, emText, image },
}: WWFProgramProps) => {
  return (
    <div className="w-full md:w-[48%] xl:w-[32%] flex flex-col py-[24px] border-t xl:border-b border-accent-gray">
      <h3 className={`${crimson.className} text-2xl`}>{heading}</h3>
      <div className="w-full pt-[24px]">
        <Image
          src={image.imageURL}
          alt={image.alt}
          width="300"
          height="500"
          className="w-full h-128 object-cover object-center rounded-xl"
        />
      </div>

      <div
        className={`${figtree.className} text-md md:text-lg xl:text-xl pt-[24px]`}
      >
        <span className="font-semibold">{emText}</span> <p>{text}</p>
      </div>
    </div>
  );
};

export default WWFCard;
