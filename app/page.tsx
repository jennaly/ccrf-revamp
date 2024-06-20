import { getHomePage } from "@/lib/data";
import { HomePage } from "@/lib/definitions";
import { crimson, figtree } from "@/lib/fonts";
import Image from "next/image";
import DonateCTA from "./components/DonateCTA";
import CTA from "./components/CTA";
import WWFCard from "./components/WWFCard";
import StoriesCarousel from "./components/StoriesCarousel";

export default async function Home() {
  const data: HomePage[] = await getHomePage();

  const {
    heroSection,
    missionSection,
    whatWeFundSection,
    storiesSection,
    videoSection,
  } = data[0];

  return (
    <main>
      <section
        id="hero"
        style={{
          backgroundImage: `url(${heroSection.backgroundImg.desktopImg.imageURL})`,
        }}
        className={`mt-[40px] relative flex h-screen 2xl:min-h-screen flex-col items-start justify-start xl:py-24 bg-cover bg-[60%] md:bg-center xl:items-center xl:justify-center`}
      >
        <div
          id="hero-backgroundOverlay"
          className="bg-hero-overlay/50 w-full h-full absolute top-0 z-10"
        />
        <div
          id="hero-textOverlay"
          className="absolute z-20 left-[32px] md:left-10 right-[32px] md:right-10 bottom-20 md:bottom-32 lg:bottom-44 xl:bottom-24 flex flex-col gap-4 xl:gap-8 max-w-[1440px] md:w-[450px] lg:w-[680px] xl:relative xl:mt-144 2xl:mt-144 xl:mr-96 text-white"
        >
          <h1
            className={`${crimson.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
          >
            {heroSection.heading.line1}
            <br></br>
            {heroSection.heading.line2}
          </h1>
          <p className={`${figtree.className} text-lg lg:text-xl`}>
            {heroSection.subheading}
          </p>

          <DonateCTA />
        </div>
      </section>

      <section
        id="mission"
        className="px-[32px] xl:px-[64px] pt-[80px] lg:pt-[160px] max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-stretch gap-8 lg:justify-between"
      >
        <div
          id="mission-text"
          className="w-full lg:w-2/5 flex flex-col gap-4 lg:justify-around lg:gap-0"
        >
          <h2
            className={`${crimson.className} text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}
          >
            {missionSection.heading}
          </h2>
          <p
            className={`${figtree.className} text-lg lg:text-xl md:my-4 xl:my-0`}
          >
            {missionSection.paragraph}
          </p>

          <CTA />
        </div>

        <div id="mission-image" className="w-full lg:w-1/2">
          <Image
            src={missionSection.image.imageURL}
            width="500"
            height="500"
            alt={missionSection.image.alt}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      <section
        id="whatWeFund"
        className="px-[32px] xl:px-[64px] pt-[80px] lg:pt-[160px] max-w-[1440px] mx-auto flex flex-col"
      >
        <div id="whatWeFund-header" className="mb-[40px] lg:mb-[80px]">
          <h2
            className={`${crimson.className} text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}
          >
            {whatWeFundSection.heading}
          </h2>
        </div>

        <div
          id="whatWeFund-programs"
          className="flex flex-col md:flex-row md:flex-wrap md:justify-between"
        >
          {whatWeFundSection.programs.map((program) => (
            <WWFCard key={program._key} data={program} />
          ))}
        </div>
      </section>

      <section
        id="stories"
        className="px-[32px] xl:px-[64px] pt-[80px] lg:pt-[160px] max-w-[1440px] mx-auto "
      >
        <StoriesCarousel data={storiesSection} />
      </section>

      <section
        id="video"
        className="bg-[url('/video-background-desktop.jpg')] bg-cover mt-[80px] lg:mt-[160px]"
      >
        <div className="relative px-[32px] py-[80px] lg:[py-100px] 2xl:py-[160px] max-w-[1440px] mx-auto">
          <h2
            className={`${crimson.className} text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl w-full lg:w-[55%] 2xl:w-[80%] mx-auto`}
          >
            {videoSection.heading}
          </h2>

          <div className=" left-0 pt-[40px] lg:pt-[60px] 2xl:pt-[80px] max-w-[1440px] mx-auto">
            <iframe
              src={videoSection.videoURL}
              title={videoSection.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full lg:w-[55%] 2xl:w-[80%] mx-auto aspect-video rounded-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
