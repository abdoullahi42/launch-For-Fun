import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { motion } from "framer-motion";
import logo from "../assets/caps.jpg"

const Footer = () => {
  return (
    <footer className="bg-[#24126a] text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Launch For Fun" 
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-3 text-xl font-bold">Launch For Fun</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A community for degens launching meme tokens every weekend at 21:00 UTC.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[#3e80ff] transition-colors">Home</a></li>
              <li><a href="#How-it-works" className="text-gray-300 hover:text-[#3e80ff] transition-colors">How It Works</a></li>
              <li><a href="#Our-Story" className="text-gray-300 hover:text-[#3e80ff] transition-colors">Our Story</a></li>
              <li><a href="#Faqs" className="text-gray-300 hover:text-[#3e80ff] transition-colors">FAQs</a></li>
            </ul>
          </motion.div>

          {/* Launch Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg uppercase tracking-wider">Launch Times</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#3e80ff] rounded-full mr-2"></span>
                Saturday • 21:00 UTC
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#3e80ff] rounded-full mr-2"></span>
                Sunday • 21:00 UTC
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg uppercase tracking-wider">Join Us</h3>
            <div className="flex space-x-4">
              {/* Twitter/X Icon */}
              <motion.a 
                href="https://x.com/MoonColins" 
                whileHover={{ scale: 1.1 }}
                className="bg-[#0c0c14] hover:bg-[#3e80ff] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow on X/Twitter"
              >
                <FaTwitter className="text-white text-lg" />
              </motion.a>

              {/* Telegram Icon */}
              <motion.a 
                href="https://t.me/mooncolinsprojects" 
                whileHover={{ scale: 1.1 }}
                className="bg-[#0c0c14] hover:bg-[#3e80ff] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Join Telegram"
              >
                <FaTelegram className="text-white text-lg" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#3a2a7a] mt-12 pt-8 text-center text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Launch For Fun. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;