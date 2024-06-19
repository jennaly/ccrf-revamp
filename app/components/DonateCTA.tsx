import { figtree } from "@/lib/fonts";
import React from "react";

const DonateCTA = () => {
  return (
    <button
      className={`${figtree.className} bg-ccrf-green rounded-full w-fit px-6 py-2`}
    >
      Donate Now
    </button>
  );
};

export default DonateCTA;
