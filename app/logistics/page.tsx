'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Logistics() {
  return (
    <div className="container mx-auto">
      <motion.h1 className="text-7xl font-bold text-blue-900 mb-8" {...fadeIn}>
        Conference Logistics
      </motion.h1>

      <motion.section
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-blue-800 mb-4">Venue</h2>
        <p className="text-blue-700 mb-4 text-xl">
          DMUN XII will be held at The Dalton School, located at 108 E 89th St,
          New York, NY 10128.
        </p>
        {/* <Image src="/placeholder.svg" alt="Venue Map" width={600} height={400} className="rounded-lg shadow-md" /> */}
      </motion.section>

      <motion.section
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-blue-800 mb-4">Schedule</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-xl">
          <p className="text-blue-700 mb-2">
            Registration <strong>8:30 AM - 9:15 AM</strong> Lobby
          </p>
          <p className="text-blue-700 mb-2">
            Opening Ceremonies <strong>9:20 AM - 10:00 AM</strong> Martin
            Theater - Floor 1
          </p>
          <p className="text-blue-700 mb-2">
            Committee Session I <strong>10:05 AM - 12:30 PM</strong> Committee
            Rooms
          </p>
          <p className="text-blue-700 mb-2">
            Lunch (Staggered) <strong>12:30 PM - 2:00 PM</strong> Cafeteria -
            Floor 3
          </p>
          <p className="text-blue-700 mb-2">
            Committee Session II <strong>2:00 PM - 5:30 PM</strong> Committee
            Rooms
          </p>
          <p className="text-blue-700 mb-2">
            Closing Ceremonies <strong>5:45 PM - 6:15 PM</strong> Martin Theater
            - Floor 1
          </p>
        </div>
      </motion.section>

      <motion.section
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-blue-800 mb-4">
          DMUN Policies
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-xl text-blue-700">
          DMUN will run as an in-person conference. Papers and legislation will
          be written and submitted electronically, committees will be held in
          rooms throughout the Dalton School building, and we encourage
          delegates to work with other delegates during breaks. DMUN does NOT
          require position papers. If a delegate so chooses, they may submit a
          position paper to their chair prior to the start of committee.
          However, please note that position papers are not required for awards
          consideration.
        </div>
      </motion.section>

      <motion.section
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-blue-800 mb-4">Pricing</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-blue-700 text-xl">
          <p className="mb-4">
            IMPORTANT NOTE: IF THE ISSUE OF COST COULD INHIBIT YOUR DELEGATION’S
            ATTENDANCE, PLEASE CONTACT DMUNCONFERENCE@GMAIL.COM. WE WILL BE
            HAPPY TO DISCUSS DISCOUNTS FOR MAXIMUM PARTICIPATION.
          </p>
          <p className="mb-10">
            Unfortunately, after the final registration deadline,{" "}
            <strong>April 14th</strong>, we are no longer able to offer refunds
            and we ask all delegations to pay for the amount they were invoiced.
            If you wish to register after April 14th, fill out the registration
            form, and email dmunconference@gmail.com. We will be happy to
            accommodate your delegation, space permitting. There will be an
            additional $5 charge per delegate after this deadline.
          </p>
          <p>Delegation Fee:</p>
          <p>Early Registration (prior to March 14th) - $75</p>
          <p className="mb-10">Regular Registration Fee - $100</p>
          <p>Delegate Fee:</p>
          <p>Large Delegation (20+ delegates) - $30 per person</p>
          <p className="">Small Delegation - $40 per person</p>
          <p>The Delegation Fee is waived for all Middle School delegations.</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-blue-800 mb-4">
          Dress Code
        </h2>
        <p className="text-blue-700 mb-4 text-xl">
          All delegates are expected to adhere to Western business attire
          throughout the conference.
        </p>
      </motion.section>
    </div>
  );
}

