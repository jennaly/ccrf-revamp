import { getHomePage } from "@/lib/data";
import { HomePage } from "@/lib/definitions";
import { crimson, figtree } from "@/lib/fonts";
import Image from "next/image";
import DonateCTA from "./components/DonateCTA";

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
        className={`relative flex min-h-screen flex-col items-start justify-start py-24 bg-[url('/hero-desktop.webp')] bg-cover bg-[60%] md:bg-center xl:items-center xl:justify-center border-2 border-red-400`}
      >
        <div
          id="hero-backgroundOverlay"
          className="bg-hero-overlay/50 w-full h-full absolute top-0 z-10"
        />
        <div
          id="hero-textOverlay"
          className="absolute z-20 left-10 right-10 bottom-10 md:bottom-16 lg:bottom-20 flex flex-col gap-4 border-2 border-red-700 max-w-[1440px] md:w-[450px] lg:w-[680px] xl:relative xl:mt-144 xl:mr-144 text-white"
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
    </main>
  );
}
