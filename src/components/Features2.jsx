import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";


export const Features2 = () => (
  <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4" id="features">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className=" mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src="https://raw.githubusercontent.com/SpectrumPro/Spectrum/master/.github/2.png"
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src="https://raw.githubusercontent.com/SpectrumPro/Spectrum/dev/.github/Capure.PNG"
                alt="f2"
                className="rounded-xl  custom-border-gray"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              The Ultimate DMX Controller              
              </h2>
            <p className="mb-12 text-customGrayText leading-loose">
              Spectrum is the most sophisticated DMX controller you've ever encountered. (well, it will be, once we finish it)
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Node-Based Control: Easily design your lighting effects using a visual node system that simplifies creating and organizing DMX control logic.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Real-Time Previews (Coming Soon!): Preview your lighting effects in real-time, ensuring your creative vision aligns with the final result.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Flexible Architecture: Customize your lighting setups by connecting modular nodes, providing adaptability to suit various scenarios.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>DMX Integration: Spectrum seamlessly works with DMX hardware, offering precise control over a wide range of lighting fixtures for concerts, events, installations, and more.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Art-Net Support: Spectrum supports Art-Net, enabling efficient communication with a variety of DMX devices over Ethernet.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
