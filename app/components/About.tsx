"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "14+ Years", description: "Engineering Experience" },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Global Teams",
      description: "India, Europe, UK",
    },
    { icon: <Database className="w-8 h-8 text-purple-500" />, title: "Product Focus", description: "Customer-Centric Solutions" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Engineering Manager", description: "Tech Lead & Mentor" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Engineering Manager with 14+ years of strong foundation in full-stack development and deep technical 
              expertise in API development, microservices, and web applications using Java, Kotlin, and Scala with 
              frameworks like Spring Boot and Play Framework.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Currently managing a cross-functional team of 8+ engineers and QA across geographies (India, Europe, UK), 
              working closely with product and UX stakeholders to deliver customer-centric solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Strong advocate of agile engineering practices, infusing test-driven development (TDD), pair programming, 
              and continuous delivery to ensure scalable architecture and rapid iteration. I bring a blend of technical 
              leadership, team mentorship, and hands-on experience to foster a culture of excellence and innovation.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                {skill.icon}
                <h3 className="text-lg font-semibold mt-3 mb-1 dark:text-white">{skill.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

