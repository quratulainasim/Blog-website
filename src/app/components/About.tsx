import React from "react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <>
      <div className="flex justify-center items-center max-w-full mt-2 h-auto bg-white">
        <h1 className="text-4xl text-gray-500 text-center font-extrabold py-4 underline">
          Explore : Science Meets Healthy Living
        </h1>
      </div>
      <div className="sm:px-8 py-3 px-4 md:px-10 lg:px-16">
        <Card>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-8 md:px-12 lg:px-16 sm:leading-7 md:leading-9 lg:leading-10 py-4 sm:py-6 md:py-8 mx-4 sm:mx-6 md:mx-10 lg:mx-12">
            Hi, I am Qurat ul Ain—a frontend developer with a scientific edge!
            With a background in Analytical Chemistry and management, plus years
            in quality control, I bring precision and creativity to the digital
            world. Now, I craft seamless interfaces using HTML, CSS, Next.js,
            and React while sharing insights through my blog,
            <span className="text-xl font-bold">
              &quot;Science Meets Healthy Living.&quot;
            </span>
            Join me in exploring how science can power a healthier, smarter
            lifestyle!
          </p>
        </Card>
      </div>

      <div className="px-6 py-5 mx-10 pt-9">
        <div className="md:grid grid-cols-2 gap-6 text-gray-500">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-600 font-semibold text-xl">
                Science provides pathways for humans
              </AccordionTrigger>
              <AccordionContent>
                Science enables early disease detection, innovative treatments,
                and vaccines, significantly improving health outcomes.
                Preventive measures like regular screenings, personalized
                medicine, and wearable health tech empower individuals to
                monitor and maintain their health effectively.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-600 text-xl font-semibold">
                Science helps humans achieve a healthy life
              </AccordionTrigger>
              <AccordionContent>
                Research-backed guidelines help us understand the importance of
                balanced diets and regular physical activity. For example,
                studies highlight how nutrient-dense foods boost immunity and
                energy, while exercise improves cardiovascular health, mental
                well-being, and longevity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default About;
