"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

interface Experience {
  company: string
  location: string
  period: string
  role: string
  summary?: string
  responsibilities: string[]
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "Springer Nature",
      location: "Pune, India",
      period: "Sep 2015 – Present (9+ Years)",
      role: "Engineering Manager / Technical Lead (2022-Present) | Senior Software Engineer (2019-2022) | Software Developer (2015-2018)",
      summary: "Progressed from Software Developer to Engineering Manager, building software solutions for researchers and publishers using cutting-edge technologies like Kotlin, Node.js, Scala, Java, and Spring Boot across multiple scientific domain products.",
      responsibilities: [
        "Currently leading and managing a cross-functional team of 10+ engineers and QA across India, Europe, and UK with focus on quality, velocity, and collaboration",
        "Built SNAPP (JMT) - peer review system enabling researchers to publish articles and research papers in respective journals",
        "Developed greenfield Kotlin HTTP4k and Java Spring Boot microservices with CI/CD pipelines (Concourse, Jenkins) and Sonar reporting",
        "Created Nano - powerful research tool allowing researchers to obtain and compare characteristics of nanomaterials with their composition and preparation methods",
        "Built Adis platform for pharmaceutical companies, researchers, and healthcare professionals with features like saved searches, user onboarding, and pay-per-download with payment integration",
        "Setup monitoring tools (Prometheus), event-driven architecture (Kafka), API documentation (Swagger), and managed GIT repositories with branching and feature toggles",
        "Implemented rate limiter service for identifying automated users, circuit breaker patterns for service failure scenarios, and performance optimization for high-traffic applications",
        "Developed microservices using Play Framework, Scala, Akka HTTP for scientific domain products with MongoDB and PostgreSQL databases",
        "Led migration to cloud platforms (Google Cloud, AWS) with Cloud Foundry deployments in RED/GREEN manner and pipeline migrations to GoCD",
        "Defined technical roadmaps, engineering guiding principles, architecture decisions, and best practices for development teams",
        "Conducted story analysis with Product Owners, estimation, sprint planning, code reviews, and led agile ceremonies following TDD, BDD, and pair programming practices",
      ],
    },
    {
      company: "Capgemini India Pvt. Ltd.",
      location: "Pune, India",
      period: "Jul 2013 – Sep 2015",
      role: "Consultant",
      responsibilities: [
        "Led development of myJohnDeere.com - farm lifecycle management platform for farmers and dealers",
        "End-to-end implementation of user stories using Spring Framework, HTML, jQuery, and JavaScript",
        "Developed Spring Batch cron jobs based on AWS Lambda functions",
        "Mentored team members, practicing design patterns, TDD, and Acceptance TDD",
        "Built microservices for internal systems serving device data from machines",
        "Setup pull request-based code review process and organized team retrospectives",
      ],
    },
    {
      company: "Synechron Technologies Pvt. Ltd.",
      location: "Pune, India",
      period: "Jul 2011 – Jun 2013",
      role: "Software Developer",
      responsibilities: [
        "Developed IVR application for Asurion USA - end-to-end claim processing system",
        "Built voice-based logic implementation with Java and Spring Framework",
        "Developed basic architecture followed by the framework for IVR suite of applications",
        "Followed Agile methodologies emphasizing best practices for design and development",
        "Mentored team members and performed unit testing with comprehensive test cases",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-lg font-medium mb-3 dark:text-gray-200 flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>{exp.role}</span>
                </p>
                {exp.summary && (
                  <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 dark:text-gray-300 italic">{exp.summary}</p>
                  </div>
                )}
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

