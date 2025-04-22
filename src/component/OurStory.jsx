import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8f9ff] to-[#eef1ff] py-20 px-4" id="Our-Story"> {/* Light gradient background */}
      <div className="max-w-5xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#24126a] mb-4"
          >
            Our Story
          </motion.h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3e80ff] rounded-full"></div>
        </div>

        {/* Timeline-style story */}
        <div className="space-y-12 relative">
          {/* Left border line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#3e80ff] bg-opacity-30"></div>

          {/* Chapter 1: Beginnings */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative md:pl-20"
          >
            <div className="absolute hidden md:flex left-0 top-0 w-16 h-16 rounded-full bg-white border-4 border-[#3e80ff] items-center justify-center shadow-md">
              <span className="text-[#3e80ff] text-xl font-bold">1</span>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#24126a] mb-3">Who We Are 
              </h3>
              <p className="text-gray-600 leading-relaxed">
              We're Launch For Fun—a launch community, and our journey is all about embracing the thrill of the unknown and the power of community to create possibilities. We've been on a wild ride, learning from our experiences and growing into a launch community that's all about fun, creativity, and networking.

              </p>
            </div>
          </motion.div>

          {/* Chapter 2: Challenges */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative md:pl-20"
          >
            <div className="absolute hidden md:flex left-0 top-0 w-16 h-16 rounded-full bg-white border-4 border-[#ff6b6b] items-center justify-center shadow-md">
              <span className="text-[#ff6b6b] text-xl font-bold">2</span>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#24126a] mb-3">The Meme Culture In Us 
              </h3>
              <p className="text-gray-600 leading-relaxed">
              We're stoked about the memecoin culture and its potential to bring people together. That's why we're launching tokens every Monday and Thursday at 21:00 UTC (and soon, daily). It's not just about the tokens – it's about the community, the excitement, the fun, and the possibilities to profit or learn in a fun and dynamic environment.

              </p>
            </div>
          </motion.div>

          {/* Chapter 3: Rebirth */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative md:pl-20"
          >
            <div className="absolute hidden md:flex left-0 top-0 w-16 h-16 rounded-full bg-white border-4 border-[#4ecdc4] items-center justify-center shadow-md">
              <span className="text-[#4ecdc4] text-xl font-bold">3</span>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#24126a] mb-3">Join the Party 
              </h3>
              <p className="text-gray-600 leading-relaxed">
              At Launch For Fun, we're all about creating a space where people can come together, share ideas, and have a blast. We're not just launching tokens; we're building a community that's all about positivity, money making party, and good vibes. So, what are you waiting for? Join us in the party ground for pure fun, profit, and learning.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 bg-[#3e80ff] hover:bg-[#3369d6] text-white font-semibold px-6 py-2 rounded-full transition-all"
                onClick={() => window.open("https://t.me/launchforfunproject" , "_blank")}
              >
                Join Our Journey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;