"use client"

import { useState } from "react"
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

interface Experience {
  company: string
  location: string
  period: string
  role: string
  summary?: string
  responsibilities: string[]
  previewCount?: number
}

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const previewCount = exp.previewCount ?? exp.responsibilities.length
  const hasMore = exp.responsibilities.length > previewCount
  const [expanded, setExpanded] = useState(false)

  const visible = expanded ? exp.responsibilities : exp.responsibilities.slice(0, previewCount)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 transition-transform duration-300 group-hover:scale-110" />
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-2 dark:text-white">{exp.company}</h3>
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
          {visible.map((resp, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {resp}
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            {expanded ? (
              <>
                Show less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show {exp.responsibilities.length - previewCount} more <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "Springer Nature",
      location: "Pune, India",
      period: "Sep 2015 – Present (9+ Years)",
      role: "Engineering Manager / Technical Lead (2022-Present) | Senior Software Engineer (2019-2022) | Software Developer (2015-2018)",
      summary:
        "Progressed from Software Developer to Engineering Manager, building software solutions for researchers and publishers using Kotlin, Node.js, Scala, Java, and Spring Boot.",
      previewCount: 4,
      responsibilities: [
        "Leading a cross-functional team of 10+ engineers and QA across India, Europe, and UK",
        "Built SNAPP peer review system, Nano research tool, and Adis platform for pharma and healthcare professionals",
        "Developed Kotlin HTTP4k and Java Spring Boot microservices with CI/CD, Kafka, Prometheus, and Swagger",
        "Defined technical roadmaps, engineering principles, and led agile ceremonies with TDD and pair programming",
        "Implemented rate limiter service, circuit breaker patterns, and performance optimization for high-traffic applications",
        "Developed microservices using Play Framework, Scala, Akka HTTP with MongoDB and PostgreSQL",
        "Led migration to Google Cloud and AWS with Cloud Foundry RED/GREEN deployments and GoCD pipelines",
        "Conducted story analysis with Product Owners, estimation, sprint planning, and code reviews",
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
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
