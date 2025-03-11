import Image from "next/image";

import SocialIconList from "@/patterns/SocialIconList";

export default function HeroOneBlock({ theme = "dark" }: { theme: ThemeType }) {
  return (
    <section>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container pt-6 pb-12 md:pb-16">
          <div className="max-w-container-large mx-auto">
            <div className="grid gap-4 pb-6 lg:grid-cols-2 lg:gap-8 lg:pb-8">
              <div className="flex flex-col items-start justify-center gap-2">
                <h1 className="font-heading text-4xl font-bold text-balance md:text-5xl lg:text-9xl">
                  Hi I’m Sergio
                </h1>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-light-dark dark:text-dark-lightest font-heading mb-8 max-w-[48ch] text-lg/relaxed md:text-xl/relaxed">
                  I’m a front-end engineer and UI Designer based in Glasgow, Scotland. My passion
                  lies in the intersection between design and development - I love designing and
                  building things.
                </p>
                <SocialIconList />
              </div>
            </div>

            <Image
              width={1280}
              height={360}
              src="https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5"
              alt="Hero Image"
              className="rounded-large aspect-[16/8] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
