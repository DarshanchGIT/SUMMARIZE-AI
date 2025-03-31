"use client";

import { motion } from "framer-motion";
import { LogIn, Upload, FileText } from "lucide-react";

export const HowItWorks = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How Our AI Summarization Works
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Easily upload PDFs and let our AI summarize content quickly and
            efficiently, saving you time and effort.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {[
            {
              icon: <LogIn className="w-8 h-8 text-fuchsia-600" />,
              title: "Start with creating account",
              text: "Create an account or log in to access our AI summarization tool. Your summaries will be saved to your account for future reference.",
              video: "/step1.mp4",
            },
            {
              icon: <Upload className="w-8 h-8 text-fuchsia-600" />,
              title: "Upload Your PDF",
              text: "Simply select a PDF file to upload. Our AI will process your document in seconds, analyzing the content for key information.",
              video: "/step2.mp4",
            },
            {
              icon: <FileText className="w-8 h-8 text-fuchsia-600" />,
              title: "View Your Summary",
              text: "Get your summarized content instantly in a predefined format to understand better and faster. Save time by focusing on the key points.",
              video: "/step3.mp4",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              variants={fadeIn}
            >
              <div className="w-full md:w-1/2 flex items-start">
                <div className="relative">
                  <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    {step.icon}
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-3xl font-semibold text-black leading-relaxed tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">{step.text}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.div
                  className="w-[500px] h-[220px] rounded-lg overflow-hidden shadow-lg"
                  animate={{
                    boxShadow: [
                      "0px 4px 12px rgba(0,0,0,0.1)",
                      "0px 8px 24px rgba(0,0,0,0.2)",
                      "0px 4px 12px rgba(0,0,0,0.1)",
                    ],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-lg"
                  >
                    <source src={step.video} type="video/mp4" />
                  </video>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
