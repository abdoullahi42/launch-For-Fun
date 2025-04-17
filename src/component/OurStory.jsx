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
              <h3 className="text-2xl font-bold text-[#24126a] mb-3">The Beginning</h3>
              <p className="text-gray-600 leading-relaxed">
                We began as a team of three, driven to create a launch community that empowers innovators with groundbreaking token ideas. Our initial goal was to provide a supportive ecosystem, <a href="https://mooncolins.com" className="text-[#3e80ff] hover:underline">MoonColins</a>, where projects could thrive under our brand identity.
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
              <h3 className="text-2xl font-bold text-[#24126a] mb-3">Overcoming Challenges</h3>
              <p className="text-gray-600 leading-relaxed">
                Our flagship token, $MQUEEN, achieved success, but we soon faced tough business decisions that led to divisions. Despite another attempt with $MCCT, a community-driven project, we encountered further challenges that reshaped our path.
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
              <h3 className="text-2xl font-bold text-[#24126a] mb-3">A New Chapter</h3>
              <p className="text-gray-600 leading-relaxed">
                We've transformed into <span className="font-bold text-[#24126a]">Launch For Fun</span>, embracing memecoin culture with regular token launches. Starting every Saturday and Sunday at 21:00 UTC (soon daily), we've created a space where degens can participate in fair launches of tokens with zero use cases - pure fun, profit, or learning.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 bg-[#3e80ff] hover:bg-[#3369d6] text-white font-semibold px-6 py-2 rounded-full transition-all"
                onClick={() => window.open("https://t.me/mooncolinsprojects" , "_blank")}
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