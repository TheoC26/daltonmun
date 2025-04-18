'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const committees = [
  {
    name: "DISEC",
    chairs: "Jonathan Henkin",
    topic: "Biological Warfare",
    backgroundGuide: "/DISEC-DMUN-XII.pdf",
  },
  {
    name: "ECOFIN",
    chairs: "Austin Gordon + Augie Emmanuel",
    topic: "Responding to Global Inflation and Financial Crises",
    backgroundGuide: "/ECOFIN-DMUN-XII.pdf",
  },
  {
    name: "SOCHUM",
    chairs: "Drew Wallack",
    topic: "Human Rights Violations of Prisoners",
    backgroundGuide: "/SOCHUM-DMUNXII-BG.pdf",
  },
  {
    name: "Futuristic",
    chairs: "Rohan Shah",
    topic: "New Planets",
    backgroundGuide: "/SPACE-DMUNXII-BG.pdf",
  },
  {
    name: "UNEP",
    chairs: "Lylah Patel",
    topic: "Natural Disaster Displacement",
    backgroundGuide: "/UNEP-DMUN-XII.pdf",
  },
  {
    name: "WHO",
    chairs: "Mehela Noel",
    topic: "Ebola Outbreak",
    backgroundGuide: "/WHO-DMUN-2025.pdf",
  },
  {
    name: "CSW",
    chairs: "Natalie Sloan + Priester Davis",
    topic: "Health and Reproductive Rights of Women",
    backgroundGuide: "/CSW-DMUN-XII.pdf",
  },
  {
    name: "JCC Trojan War: Greeks",
    chairs: "Ani Sharma",
    topic: "Trojan War",
    backgroundGuide: "/Trojan-War-DMUNXII-BG.pdf",
  },
  {
    name: "JCC Trojan War: Trojans",
    chairs: "Sophie Myers + Kavi Mittal",
    topic: "Trojan War",
    backgroundGuide: "/Trojan-War-DMUNXII-BG.pdf",
  },
  {
    name: "Suits",
    chairs: "Ryan Feder",
    topic: "Corporate Crisis",
    backgroundGuide: "/SUITS-DMUN-XII.pdf",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Committees() {
  return (
    <div className="container mx-auto">
      <motion.h1 
        className="text-7xl font-bold text-blue-900 mb-8"
        {...fadeIn}
      >
        DMUN XII Committees
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {committees.map((committee, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{committee.name}</h2>
            <p className="text-blue-700 mb-2"><strong>Chairs:</strong> {committee.chairs}</p>
            <p className="text-blue-700 mb-4"><strong>Topic:</strong> {committee.topic}</p>
            <Link href={committee.backgroundGuide} target='_blank' className="text-blue-500 hover:text-blue-700 transition-colors">
              Download Background Guide
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

