import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Emma Jackson",
    role: "Product Manager | XYZ",
    image: "https://framerusercontent.com/images/zXfXN1VzctWMMr1lQiOMyhbCc8I.jpg",
    text: "Flair has transformed the way we manage our projects. The intuitive interface and seamless integration made the setup a breeze, and the real-time analytics have been a game-changer for our decision-making process. Highly recommend!",
  },
  {
    name: "Alex Ling",
    role: "CTO | Corp Company",
    image: "https://framerusercontent.com/images/bgkrDz7rzmxmidwht7TFcy4z3yw.jpg",
    text: "We were impressed with how quickly we could integrate Flair into our existing systems. The ease of use and robust API options allowed us to customize the platform to fit our unique needs. It’s an essential tool for our tech stack now.",
  },
  {
    name: "Michael Stephens",
    role: "Founder | Corp Corp",
    image: "https://framerusercontent.com/images/fxlRDg6JdHIHaIrYKolf9y9ezI.jpg",
    text: "From onboarding to daily use, Flair has exceeded our expectations. The platform’s simplicity and effectiveness have allowed us to focus more on growth and less on technical hassles. A top-notch solution for any modern business.",
  },
];

const logos = [
  "/hero.svg", 
  "/hero.svg",
  "/hero.svg",
  "/hero.svg"
  ];


const TestimonialCarousel = () => {
  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };


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
    <div id="testimonials" className="bg-gradient-to-b from-black to-[#0B1622] py-16 px-8 text-center">
      {/* Testimonials Section */}
      <motion.h2
        className="text-white text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Are Saying
      </motion.h2>
      <motion.p
        className="text-gray-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Discover how Graphite has transformed businesses with its seamless integration, intuitive design, and powerful features.
      </motion.p>

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Slider {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-[#1A2236] p-6 rounded-xl text-white shadow-lg">
                <p className="text-lg">⭐ ⭐ ⭐ ⭐ ⭐</p>
                <p className="mt-3 italic">{testimonial.text}</p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Trusted Companies Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-gray-300 text-lg font-semibold mb-6">
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
    </div>
  );
};

export default TestimonialCarousel;