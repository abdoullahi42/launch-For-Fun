import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Token Generation Event (TGE)",
      description:
        "Every Monday and Thursday at 21:00 UTC European Time, we launch new meme tokens. The contract address is shared with our Telegram group and X community.",
    },
    {
      number: 2,
      title: "Tokenomics & Initial Buy",
      description:
        "Our dev team buys only 5% of the token supply and follows strict ethical principles. Devs can sell only 3% of the supply at any time and burn 2%.",
    },
    {
      number: 3,
      title: "Community-Driven",
      description:
        "Our project is completely community-driven, ensuring fairness and transparency. We choose Pump.fun to achieve this.",
    },
  ];

  return (
    <section className="bg-[#f4f7fa] py-16 px-4" id="How-it-works"> {/* New light gray background */}
      <div className="max-w-6xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24126a] mb-2">
            How It Works
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Our simple 3-step processes for token launches
          </p>
        </div>

        {/* 3-Grid Layout on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.number * 0.1 }}
              viewport={{ once: true, margin: "-50px" }} // Fixes animation trigger
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Hoverable Number Circle */}
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: "#3e80ff" }} // Hover effect
                className="w-14 h-14 rounded-full bg-[#24126a] flex items-center justify-center mb-4 transition-colors"
              >
                <span className="text-white text-xl font-bold">
                  {step.number}
                </span>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#24126a] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;