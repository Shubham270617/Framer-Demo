import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const FeatureSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how-it-works" className="relative  flex flex-col items-center justify-center bg-[#f8fbff] text-black p-10">
      <p  className="text-sm uppercase tracking-wide bg-black text-white px-4 py-1 rounded-full">How it works</p>
      <h1 className="text-4xl font-bold mt-4 text-center">Graphite helps you to scale <br /> your business to the next level</h1>
      <p className="text-lg mt-2 text-gray-600 text-center">Graphite is packed with features that allow you to focus on the essentials.</p>
      
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        className="mt-10 w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <img src="https://framerusercontent.com/images/uTMdDC3Bio7yD53HxpGY4voNAE.jpg?scale-down-to=512" alt="AI Assistant" className="w-full object-cover h-full rounded-lg" />
      </motion.div>
      
      <div className="mt-6 flex space-x-4">
        <button className="px-4 py-2 bg-white border rounded-full flex items-center shadow-sm">⚡ AI Assistant</button>
        <button className="px-4 py-2 bg-white border rounded-full flex items-center shadow-sm">📱 Mobile App</button>
        <button className="px-4 py-2 bg-white border rounded-full flex items-center shadow-sm">🔗 API Integration</button>
        <button className="px-4 py-2 bg-white border rounded-full flex items-center shadow-sm">🌱 Green Energy</button>
      </div>
    </section>
  );
};

export default FeatureSection;