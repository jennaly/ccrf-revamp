"use client";

import { HomePage, Image } from "@/lib/definitions";
import { crimson } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

type StoriesSectionProps = {
  heading: string;
  featuredStories: {
    _id: string;
    title: string;
    slug: string;
    ambassador: string;
    summary: string;
    featuredImage: Image;
  }[];
};

type StoryType = {
  _id: string;
  title: string;
  slug: string;
  ambassador: string;
  summary: string;
  featuredImage: Image;
};

const StoriesCarousel = ({ heading, featuredStories }: StoriesSectionProps) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (featuredStories.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="" ref={ref}>
      <div className="relative overflow-hidden">
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            <div id="stories-header" className="">
              <h2
                className={`${crimson.className} text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}
              >
                {heading}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex pt-[40px] lg:pt-[60px] 2xl:pt-[80px]"
          >
            {featuredStories.map((story) => {
              return <Story key={story._id} {...story} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Story = ({
  title,
  slug,
  ambassador,
  summary,
  featuredImage,
}: StoryType) => {
  return (
    <a href={`/stories/${slug}`}>
      <div
        className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
        style={{
          width: CARD_WIDTH,
          marginRight: MARGIN,
        }}
      >
        <img
          src={featuredImage.imageURL}
          className="mb-3 h-[200px] w-full rounded-lg object-cover"
          alt={featuredImage.alt}
        />
        <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
          {`${ambassador}'s story`}
        </span>
        <p className="mt-1.5 text-lg font-medium">{title}</p>
        <p className="text-sm text-neutral-500">{summary}</p>
      </div>
    </a>
  );
};

export default StoriesCarousel;
