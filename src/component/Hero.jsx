import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-[#24126a] text-white py-16 md:py-20 px-8 xl:px-16" id='home'>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center xl:gap-16 xl:px-4">
          {/* Text Content - Centered on mobile, left-aligned on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center md:text-left mx-4 md:mx-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Launch It For Fun On Pump.fun!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Launch For Fun  is a launch community for degens that launch meme tokens every Monday and Thursday at 21:00 UTC European Time. It's a chance to profit or learn in a fun and dynamic environment.
            </p>
            <div className="flex justify-center md:justify-start">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#3e80ff] hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
    onClick={() => window.open("https://t.me/launchforfunproject" , "_blank")}
  >
    Join Now
  </motion.button>
</div>
          </motion.div>

          {/* Image - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex justify-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop" 
              alt="Crypto Launch"
              className="rounded-xl shadow-2xl w-full max-w-md object-cover h-80 md:h-96"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;