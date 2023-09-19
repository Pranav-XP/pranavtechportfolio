import React from "react";
import { motion } from "framer-motion";
import { profileImg } from "@/public/assets/images";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex-col sm:flex items-center px-10">
      <div>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-bold"
        >
          Bula, my name is<br></br>
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          id="bannerName"
          className="text-textLight font-titleFont font-black text-5xl"
        >
          Pranav
        </motion.h1>
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="font-black text-2xl"
        >
          I create things on the web.
        </motion.span>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {" "}
          Currently studying Software Engineering at the{" "}
          <a
            className="text-textLight bg-bodyColor underline hover:underline-none hover:bg-textLight hover:text-bodyColor"
            href="https://www.usp.ac.fj/discipline-of-computer-science-and-information-systems/programmes/software-engineering/"
          >
            University of the South Pacific!
          </a>
          <br></br> This is my journey to becoming a fully fledged Engineer.{" "}
        </motion.p>
        <div className="pt-5">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="active:shadow-inset w-52 h-14 text-m font-titleFont font-bold border border-textLight
                    rounded-md text-textLight tracking-wide active:bg-textLight hover:bg-textLight md:hover:drop-shadow-glow 
                    hover:text-bodyColor duration-300"
          >
            <a href="https://github.com/Pranav-XP/pranavtechportfolio">
              View Website Code
            </a>
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Image
          className="mdl:rounded-lg h-full object-cover md:hover:drop-shadow-glow transition duration-700 ease-in-out"
          src={profileImg}
          alt="Profile Image of Pranav"
          width={300}
          height={1}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
