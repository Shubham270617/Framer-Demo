import { motion } from "framer-motion";

const blogPosts = [
  {
    date: "AUG 25, 2024",
    title: "5 Ways to Maximize Efficiency with Flair",
    image: "https://framerusercontent.com/images/hPzKMrevSSaxrEg7uxbWQPf3eA.png",
    link: "#",
  },
  {
    date: "APR 8, 2024",
    title: "Why Sustainable Technology is the New Standard",
    image: "https://framerusercontent.com/images/1HyFuGk3DgcopBH1ffoNVSNTDw.png",
    link: "#",
  },
  {
    date: "MAR 15, 2024",
    title: "How to Seamlessly Integrate Flair into Your Existing Tech Stack",
    image: "https://framerusercontent.com/images/y0MMFRrjNi57MI5FDzMFhDCKN6g.png",
    link: "#",
  },
];

const LatestNews = () => {
    return (
      <section id="blog" className="py-20 px-6 bg-gradient-to-b from-white to-blue-200">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-black text-white text-sm px-4 py-1 rounded-full">
              LATEST NEWS
            </span>
            <h2 className="text-4xl font-bold mt-4">The latest updates from Flair</h2>
          </motion.div>
  
 {/* Blog Cards */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                <span className="text-sm font-medium">{post.date}</span>
                <h3 className="text-lg font-bold">{post.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
        {/* All Posts Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="bg-black text-white px-6 py-2 rounded-lg shadow-lg">
            All posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;  