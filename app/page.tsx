import { getHomePage } from "@/lib/data";
import { HomePage } from "@/lib/definitions";
import { crimson, figtree } from "@/lib/fonts";
import Image from "next/image";
import DonateCTA from "./components/DonateCTA";
import CTA from "./components/CTA";
import WWFCard from "./components/WWFCard";

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
        // style={{
        //   backgroundImage: `url(${heroSection.backgroundImg.desktopImg.imageURL})`,
        // }}
        className={`mt-[40px] relative flex h-screen 2xl:min-h-screen flex-col items-start justify-start xl:py-24 bg-[url('/hero-desktop.webp')] bg-cover bg-[60%] md:bg-center xl:items-center xl:justify-center`}
      >
        <div
          id="hero-backgroundOverlay"
          className="bg-hero-overlay/50 w-full h-full absolute top-0 z-10"
        />
        <div
          id="hero-textOverlay"
          className="absolute z-20 left-[32px] md:left-10 right-[32px] md:right-10 bottom-10 md:bottom-16 lg:bottom-20 flex flex-col gap-4 xl:gap-8 max-w-[1440px] md:w-[450px] lg:w-[680px] xl:relative xl:mt-128 2xl:mt-144 xl:mr-96 text-white"
        >
          <h1
            className={`${crimson.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
          >
            Empowering Hope. <br></br> Changing Lives.
          </h1>
          <p className={`${figtree.className} text-lg lg:text-xl`}>
            ClimateCo. is a technology consultancy specialising in supporting
            sustainable start-ups to make a positive impact on the planet.
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
            We are on a mission to end childhood cancer.
          </h2>
          <p
            className={`${figtree.className} text-lg lg:text-xl md:my-4 xl:my-0`}
          >
            Children’s Cancer Research Fund is a national nonprofit dedicated to
            ending childhood cancer. Our main focus is to support the research
            of bright scientists across the country whose ideas can make the
            greatest impact for children fighting cancer.
          </p>

          <CTA />
        </div>

        <div id="mission-image" className="w-full lg:w-1/2">
          <Image
            src="/mission-image.webp"
            width="500"
            height="500"
            alt="mission image"
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
            We design, build and run collaborative spaces where climate-science,
            technology and people can thrive
          </h2>
        </div>

        <div
          id="whatWeFund-programs"
          className="flex flex-col md:flex-row md:flex-wrap md:justify-between"
        >
          <WWFCard />
          <WWFCard />
          <WWFCard />
        </div>
      </section>

      <section
        id="video"
        className="bg-[url('/video-background-desktop.jpg')] bg-cover mt-[80px] lg:mt-[160px]"
      >
        <div className="relative px-[32px] py-[80px] lg:[py-100px] 2xl:py-[160px] max-w-[1440px] mx-auto">
          <h2
            className={`${crimson.className} text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full lg:w-[55%] 2xl:w-full mx-auto`}
          >
            Join us in the fight against childhood cancer and unlock great ideas
            now.
          </h2>

          <div className=" left-0 pt-[40px] lg:pt-[60px] 2xl:pt-[80px] max-w-[1440px] mx-auto">
            <iframe
              src="https://www.youtube.com/embed/dsqgkR0cz_A?si=dtoQqTVu3OxGIYnH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full lg:w-[55%] 2xl:w-full mx-auto aspect-video rounded-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
