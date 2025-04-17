import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Launch For Fun?",
      answer: "Launch For Fun is a launch community for degens that launches meme tokens every Saturday and Sunday at 21:00 UTC European Time."
    },
    {
      question: "When do token launches happen?",
      answer: "Token launches occur every Saturday and Sunday at 21:00 UTC European Time, with plans to expand to daily launches in the future."
    },
    {
      question: "How does the Token Generation Event (TGE) work?",
      answer: "TGE happens every Saturday and Sunday, where the contract address is shared with the Telegram group and X community."
    },
    {
      question: "What is the tokenomics of Launch For Fun?",
      answer: "The dev team buys only 5% of the token supply and follows ethical principles, such as devs selling only 3% of the supply and burning 2%."
    },
    {
      question: "What kind of tokens does Launch For Fun launch?",
      answer: "Launch For Fun launches meme tokens with zero use cases, embracing the spirit of memecoins."
    },
    {
      question: "Is Launch For Fun a community-driven project?",
      answer: "Yes, Launch For Fun is a community-driven project that empowers innovators with groundbreaking token ideas."
    },
    {
      question:"What is the story behind Launch For Fun?",
      answers:"Launch For Fun evolved from MoonColins, a launch community that faced challenges and transformed into a new approach focused on regular token launches."
    },
    {
      question:"What are the benefits of participating in Launch For Fun?",
      answer:"Participants can profit or learn from the token launches, and it's a chance to be part of a vibrant community for degens and memecoins."
    },
    {question: "How can I stay updated on Launch For Fun's latest launches?",
    answer: "You can stay updated by following Launch For Fun's community channels and website."
    },
    {
      question: "What is the goal of Launch For Fun?",
      answer: "The goal is to create a supportive ecosystem for degens and memecoins, providing a platform for regular token launches and community engagement."
    }
    
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f9ff] py-20 px-4" id='Faqs'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#24126a] mb-3">FAQs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our launch community</p>
        </motion.div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-[#24126a]">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#3e80ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


