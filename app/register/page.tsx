'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Register() {
  return (
    <div className="container mx-auto">
      <motion.h1 className="text-7xl font-bold text-blue-900 mb-8" {...fadeIn}>
        Register for DMUN XII
      </motion.h1>

      <div className='bg-white py-10 rounded-xl max-w-3xl mx-auto shadow-lg'>
        <motion.p
          className="text-blue-700 mb-6 text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          To register for DMUN XII, please fill out our registration form. Click
          the button below to access the Google Form.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScB9WnVJI6D1GDFinjxfMaAxbbMQGTqU1NvqUtJd18y-aA65A/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-2xl w-full text-center text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors inline-block"
          >
            Register Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

