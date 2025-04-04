import { motion } from "framer-motion";
import Slider from "react-slick";


const logos = [
    "https://dummyimage.com/120x60/ffffff/aaa", 
    "https://dummyimage.com/120x60/ffffff/aaa",
    "https://dummyimage.com/120x60/ffffff/aaa",
    "https://dummyimage.com/120x60/ffffff/aaa",
  ];

const JoinTheFuture = () => {

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
    <section className="py-20 px-6 bg-gradient-to-b from-black to-blue-900 text-white rounded-2xl mx-10 md:mx-15 lg:mx-7">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Join the future</h2>
          <p className="text-gray-300 mt-4">
            Trusted by 10,000+ companies all over the world.
          </p>
  {/* Logos */}
  <div className="max-w-4xl mx-auto">
          <Slider {...logoSettings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img src={logo} alt={`Company Logo ${index}`} className="w-28 opacity-70 hover:opacity-100 transition" />
              </div>
            ))}
          </Slider>
        </div>

 {/* Buttons */}
 <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold">
              Get started
            </button>
            <button className="border border-white px-6 py-2 rounded-lg">
              Contact us
            </button>
          </div>
        </motion.div>

        {/* Animated Dashboard Card */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-3xl shadow-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/kH2dYUYz6bTbR4cjVTdgUbxd3jk.png"
              alt="Dashboard"
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinTheFuture;