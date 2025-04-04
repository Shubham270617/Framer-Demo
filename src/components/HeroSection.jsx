import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";

const logos = [
  "/hero.svg", 
  "/hero.svg",
  "/hero.svg",
  "/hero.svg"
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const logoSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        ],
}


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-blue-900 text-white p-10 rounded-3xl mt-5 max-w-[98%] mx-auto">
      <p className="text-sm uppercase tracking-wide bg-white text-black px-4 py-1 rounded-full">Trusted by 10,000+ companies</p>
      <h1 className="text-6xl font-bold mt-4 text-center">The Next-Generation Business Platform</h1>
      <p className="text-lg mt-2 text-center">Flair helps your business thrive in a digital world.</p>
      <button className="mt-4 px-6 py-2 bg-white transition-all hover:bg-blue-400 text-black rounded-full text-lg">Get Started</button>
      
      <motion.div
        ref={ref}
        style={{ scale, opacity, y: translateY }}
        className="mt-10 w-full max-w-[90%] bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <img 
          src="https://framerusercontent.com/images/kH2dYUYz6bTbR4cjVTdgUbxd3jk.png" 
          alt="Dashboard" 
          className="w-full object-cover h-full"
        />
      </motion.div>
      
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-gray-200 text-xl font-semibold mb-6 text-center">
          Trusted by the best companies in the world.
        </h3>
        <div className="max-w-4xl mx-auto">
          <Slider {...logoSettings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img src={logo} alt={`Company Logo ${index}`} className="w-28 opacity-70 hover:opacity-100 transition" />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
