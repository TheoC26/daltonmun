"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className="container mx-auto">
      <motion.h1 className="text-7xl font-bold text-blue-900 mb-8" {...fadeIn}>
        Welcome to DMUN XII
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-5xl font-semibold text-blue-800 mb-4">
          Conference Overview
        </h2>
        <p className="text-xl text-blue-700 mb-4">
          The Dalton Model United Nations Conference XII (DMUN XII) is an
          exciting opportunity for students to engage in diplomatic discussions,
          tackle global issues, and develop critical thinking skills. Join us
          for an unforgettable experience of debate, negotiation, and
          international cooperation.
        </p>
        <Image
          src="/DmunCover.jpeg"
          alt="Conference Overview"
          width={600}
          height={200}
          className="rounded-lg shadow-md mx-auto"
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-5xl font-semibold text-blue-800 mb-4">
          Letter from the Secretariat
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-blue-700">
          <p className="text-xl mb-4">Dear Delegates and Faculty Advisors,</p>
          <p className="text-xl mb-4">
            It is with great pleasure that we welcome you to the twelfth annual
            Dalton Model United Nations Conference (DMUN XII). This year's
            conference promises to be an engaging and thought-provoking
            experience for all participants.
          </p>
          <p className="text-xl mb-4">
            We look forward to seeing you at DMUN XII!
          </p>
          <p className="text-xl">
            Sincerely,
            <br />
            The DMUN XII Secretariat
          </p>
        </div>
      </motion.section>
    </div>
  );
}
