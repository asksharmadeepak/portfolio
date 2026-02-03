"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin, MessageCircle, Send } from "lucide-react"
import Image from "next/image"

export default function Contact() {

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <motion.div
            className="lg:w-1/3 flex"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
              <div className="space-y-6 flex-grow">
                <a
                  href="mailto:deepak.sharma@live.in"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 mr-3 text-blue-600" />
                  deepak.sharma@live.in
                </a>
                <a
                  href="https://www.linkedin.com/in/iamsharmadeepak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6 mr-3 text-blue-600" />
                  LinkedIn Profile
                </a>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                  Pune, India (Remote/Hybrid)
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-2/3 flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white text-center">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
              </p>
              
              <div className="space-y-4">
                {/* LinkedIn Message Button - Primary */}
                <motion.a
                  href="https://www.linkedin.com/messaging/compose?recipient=iamsharmadeepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold">Message me on LinkedIn</span>
                </motion.a>

                {/* Email Button - Secondary */}
                <motion.a
                  href="mailto:deepak.sharma@live.in?subject=Let's Connect"
                  className="w-full bg-gray-600 text-white py-4 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold">Send me an Email</span>
                </motion.a>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Typically responds within 24-48 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

