import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  { question: "What is Graphite, and how does it benefit my business?", answer: "Graphite provides powerful AI-driven analytics to help businesses grow efficiently." },
  { question: "How easy is it to integrate Graphite with my existing tools?", answer: "Graphite is designed to integrate seamlessly with most business tools in just a few clicks." },
  { question: "Is my data secure with Graphite?", answer: "Yes, we use end-to-end encryption and follow industry-leading security standards." },
  { question: "What kind of support do you offer?", answer: "We provide 24/7 support through live chat, email, and dedicated account managers." },
  { question: "Can I upgrade or downgrade my plan at any time?", answer: "Yes, you can change your plan anytime through your account settings." },
  { question: "How does Graphite leverage AI for analytics?", answer: "Graphite uses machine learning algorithms to uncover insights from your data in real-time." },
  { question: "How do I get this Framer Template?", answer: "You can download it from our website for free!" },
];


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section id="faq" className="py-20 px-6">
        <motion.div
          className="max-w-8xl mx-auto bg-gradient-to-b from-black to-[#001F3F] text-white rounded-3xl shadow-xl p-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
 <span className="bg-gray-800 text-white text-sm px-4 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mt-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Here are our most frequently asked questions. If you can’t find what you are looking for, don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-700 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-gray-400 text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>
              <motion.p
                className={`text-gray-300 mt-2 overflow-hidden ${
                  openIndex === index ? "h-auto" : "h-0"
                }`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>
 {/* Contact Button */}
 <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="bg-white text-black px-6 py-2 rounded-lg shadow-lg">
            Contact us
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;  