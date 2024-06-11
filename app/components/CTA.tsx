import { figtree } from "@/lib/fonts";
import React from "react";

const CTA = () => {
  return (
    <button
      className={`${figtree.className} border-2 border-ccrf-green text-ccrf-green font-semibold rounded-full w-fit px-6 py-2`}
    >
      Learn More
    </button>
  );
};

export default CTA;
