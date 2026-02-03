"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Smartphone } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Engineering Management & Leadership",
      description:
        "Leading cross-functional engineering teams across geographies (India, Europe, UK). Setting up engineering principles, technical roadmaps, and fostering a culture of excellence and innovation.",
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: "Microservices Architecture & APIs",
      description:
        "Designing and implementing scalable microservices using Java, Kotlin, Scala with Spring Boot, HTTP4k, and Play Framework. Building event-driven systems with Kafka and implementing circuit breaker patterns.",
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Product Development & Delivery",
      description: "Bridging technical and business teams for seamless product delivery. Working closely with Product and UX stakeholders to deliver customer-centric solutions with agile practices (TDD, BDD, pair programming).",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
      title: "DevOps & Cloud Infrastructure",
      description: "Setting up CI/CD pipelines (Jenkins, Concourse), monitoring (Prometheus), and cloud deployments on AWS and Google Cloud. Implementing containerization with Docker and orchestration with Kubernetes.",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Areas of Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

