"use client"

import { motion } from "framer-motion"
import {
  Code,
  Database,
  Server,
  Layout,
  GitBranch,
  Terminal,
  Layers,
  Workflow,
  Smartphone,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: LucideIcon; color: string }) => (
  <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg">
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const leadershipAreas = [
  {
    icon: Workflow,
    title: "Engineering Management",
    description: "Leading cross-functional teams across India, Europe, and UK with technical roadmaps and engineering principles.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    title: "Microservices & APIs",
    description: "Scalable architectures with Java, Kotlin, Scala — Spring Boot, HTTP4k, Play Framework, Kafka, and circuit breakers.",
    color: "text-green-500",
  },
  {
    icon: Code,
    title: "Product Delivery",
    description: "Bridging product, UX, and engineering with agile practices — TDD, BDD, and pair programming.",
    color: "text-purple-500",
  },
  {
    icon: Smartphone,
    title: "Product Building",
    description: "End-to-end product development — 8+ live apps on Google Play and the web, from idea to launch.",
    color: "text-orange-500",
  },
]

const technicalSkills = [
  {
    icon: Code,
    name: "Backend Development",
    tech: "Java 8+, Scala, Kotlin",
    description: "Robust backend systems with JVM languages and HTTP4k.",
    color: "text-blue-500",
  },
  {
    icon: Database,
    name: "Databases & Data",
    tech: "MongoDB, PostgreSQL, MySQL, Kafka",
    description: "ORM with Hibernate/JPA and event streaming with Kafka.",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "Frontend Development",
    tech: "Angular 5+, HTML5, CSS3",
    description: "Responsive UIs and full-stack web development.",
    color: "text-pink-500",
  },
  {
    icon: GitBranch,
    name: "DevOps & Cloud",
    tech: "Docker, Kubernetes, AWS, GCP",
    description: "CI/CD with Jenkins, Concourse, and cloud deployments.",
    color: "text-orange-500",
  },
  {
    icon: Terminal,
    name: "Testing & Quality",
    tech: "TDD, BDD, JUnit, Mockito",
    description: "Test automation, pair programming, and quality practices.",
    color: "text-yellow-500",
  },
  {
    icon: Layers,
    name: "Architecture & Design",
    tech: "DDD, Event-Driven, Patterns",
    description: "Microservices patterns and scalable system design.",
    color: "text-indigo-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />

        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto -mt-8 mb-10">
          A blend of engineering leadership, product delivery, and hands-on technical depth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {leadershipAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <SkillIcon icon={area.icon} color={area.color} />
                <div>
                  <h3 className="text-lg font-semibold dark:text-white mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 text-center mb-8">
          Technical Stack
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group h-full">
                <div className="flex items-center mb-3">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-3">
                    <h4 className="font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
