import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-blue-100">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.span
          className="bg-black text-white text-sm px-4 py-1 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          PRICING
        </motion.span>
        <motion.h2
          className="text-4xl font-bold mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
 Simple, Transparent Pricing
        </motion.h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Starter Plan */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Starter plan</h3>
          <p className="text-2xl font-bold mt-2">$29/month</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✅ 5 users</li>
            <li>✅ Basic AI analytics</li>
            <li>✅ 10 GB of storage</li>
            <li>✅ Access to all core features</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded-lg mt-6">
            Get started
          </button>
          </motion.div>

{/* Growth Plan (Highlighted) */}
<motion.div
  className="bg-gradient-to-b from-[#00091A] to-[#001F3F] text-white p-8 rounded-xl shadow-xl border border-gray-600"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
>
  <h3 className="text-xl font-semibold">Growth plan</h3>
  <p className="text-2xl font-bold mt-2">$29/month</p>
  <ul className="mt-4 space-y-2 text-gray-300">
    <li>✅ 25 users</li>
    <li>✅ Advanced AI analytics</li>
    <li>✅ 10 GB of storage</li>
    <li>✅ Enhanced security</li>
  </ul>
  <button className="w-full bg-white text-black py-2 rounded-lg mt-6">
    Get started
  </button>
</motion.div>

{/* Enterprise Plan */}
<motion.div
  className="bg-white p-8 rounded-xl shadow-xl border border-gray-200"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
>
<h3 className="text-xl font-semibold">Enterprise plan</h3>
          <p className="text-2xl font-bold mt-2">Contact sales</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✅ Unlimited users</li>
            <li>✅ Full AI analytics</li>
            <li>✅ Advanced security</li>
            <li>✅ 24/7 priority support</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded-lg mt-6">
            Contact us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;