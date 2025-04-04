import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div id="features" className="bg-gradient-to-b from-[#f8f9fb] to-[#e4ebf5] py-20 text-center">
      {/* Section Header */}
      <div className="mb-10">
        <motion.button
          className="px-4 py-1 rounded-full bg-black text-white text-sm font-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          FEATURES
        </motion.button>
        <motion.h2
          className="text-4xl font-bold mt-4 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Boost your productivity
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Graphite improves your processes and transforms your business for you.
        </motion.p>
      </div>

 {/* Feature Cards */}
 <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Superior Performance Card */}
        <motion.div
          className="bg-black text-white p-6 rounded-2xl w-full md:w-1/3 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Superior Performance</h3>
          <p className="text-gray-300 mt-2">
            Our platform consistently outperforms competitors in speed and
            efficiency, thanks to cutting-edge technology and optimized
            infrastructure.
          </p>
          {/* Performance Scores */}
          <div className="mt-4 space-y-2">
            <div>
              <p className="text-sm font-bold">GRAPHITE</p>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-full bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">COMPETITOR 1</p>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-2/3 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">COMPETITOR 2</p>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-1/3 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
 {/* Lightning Fast Card */}
 <motion.div
          className="bg-black text-white p-6 rounded-2xl w-full md:w-1/3 shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Lightning Fast</h3>
          <p className="text-gray-300 mt-2">
            Loading times optimized for a seamless experience for your users.
          </p>
          {/* Lightning Icon */}
          <div className="mt-6">
            <svg
              className="w-16 h-16 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
<path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
        </motion.div>
      </div>
      {/* NEW SECTION - Integration & AI Updates */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 mt-10">
        {/* Seamless Integration Card */}
        <motion.div
          className="bg-black text-white p-6 rounded-2xl w-full md:w-1/3 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Seamless Integration</h3>
          <p className="text-gray-300 mt-2">
            Integrate Flair with all your favorite apps in just a few clicks.
          </p>
          {/* Logos (Fake Placeholder Icons) */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center"
              >
                🔵
              </div>
            ))}
          </div>
        </motion.div>
        {/* AI Updates Card */}
        <motion.div
          className="bg-gradient-to-b from-black to-[#001F3F] text-white p-6 rounded-2xl w-full md:w-1/3 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">AI Updates</h3>
          <p className="text-gray-300 mt-2">
            Our data centers are powered by green energy, reducing our carbon
            footprint and supporting a cleaner planet.
          </p>
          {/* AI Update Messages */}
          <div className="mt-4 space-y-3">
            <div className="bg-blue-700 px-4 py-2 rounded-lg">
              <p className="text-sm">
                🔹 User retention has increased by <b>18%</b> after introducing
                the new onboarding flow. Keep an eye on activation rates!
              </p>
            </div>
            <div className="bg-blue-800 px-4 py-2 rounded-lg opacity-75">
              <p className="text-sm">
                🔹 Revenue per user has increased by <b>XX%</b>.
              </p>
            </div>
          </div>
        </motion.div>
</div>

<motion.div
  className="bg-gradient-to-b from-[#00091A] to-[#001F3F] text-white p-10 rounded-2xl w-full md:w-3/4 mx-auto mt-14 shadow-2xl backdrop-blur-lg"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* Heading */}
  <motion.h3
    className="text-3xl font-bold text-white"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    Smart Folders
  </motion.h3>

  {/* Description */}
  <motion.p
    className="text-gray-300 mt-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    Real-time, data-driven insights that help you make smarter decisions
    and uncover hidden opportunities.
  </motion.p>

  {/* Image with Motion */}
  <motion.div
    className="mt-6 rounded-lg overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
<img
      src="https://framerusercontent.com/images/0KZbh63RuBnjoYUTovLwPSdF7hU.jpg"
      alt="Smart Folders UI"
      className="w-full rounded-lg object-cover"
      style={{ height: "300px", objectFit: "cover" }}

    />
  </motion.div>
</motion.div>
    </div>
  );
};

export default Features;