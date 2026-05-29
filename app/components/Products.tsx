"use client"

import { motion } from "framer-motion"
import { ExternalLink, Globe, Smartphone, Sparkles } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

interface Product {
  name: string
  tagline: string
  href: string
  platform: "web" | "android"
  accent: string
}

const webApps: Product[] = [
  {
    name: "Dual Canvas",
    tagline: "Collaborative drawing — tablet & browser in sync",
    href: "https://dual-canvas.com/",
    platform: "web",
    accent: "from-violet-500 to-purple-600",
  },
  {
    name: "Lounge Access Finder",
    tagline: "Credit card airport lounge access across India",
    href: "https://loungeaccessfinder.com/",
    platform: "web",
    accent: "from-blue-500 to-indigo-600",
  },
]

const mobileApps: Product[] = [
  {
    name: "ChargerLive",
    tagline: "EV charging companion",
    href: "https://play.google.com/store/apps/details?id=com.chargerlive.app",
    platform: "android",
    accent: "from-emerald-500 to-green-600",
  },
  {
    name: "Fitwith",
    tagline: "Fitness & training",
    href: "https://play.google.com/store/apps/details?id=com.fitwith.app",
    platform: "android",
    accent: "from-lime-500 to-green-700",
  },
  {
    name: "LoungeAccessFinder",
    tagline: "Lounge access on the go",
    href: "https://play.google.com/store/apps/details?id=com.loungeaccessfinder.app",
    platform: "android",
    accent: "from-indigo-500 to-violet-600",
  },
  {
    name: "NextBinge",
    tagline: "Discover what to watch next",
    href: "https://play.google.com/store/apps/details?id=com.nextbinge.app",
    platform: "android",
    accent: "from-purple-500 to-fuchsia-600",
  },
  {
    name: "Tayyari",
    tagline: "Travel preparation made simple",
    href: "https://play.google.com/store/apps/details?id=com.tayyari.app",
    platform: "android",
    accent: "from-teal-500 to-cyan-600",
  },
  {
    name: "myBinge",
    tagline: "Track & plan your watchlist",
    href: "https://play.google.com/store/apps/details?id=com.mybinge.app",
    platform: "android",
    accent: "from-rose-500 to-red-600",
  },
]

function ProductTile({ product, index }: { product: Product; index: number }) {
  const Icon = product.platform === "web" ? Globe : Smartphone

  return (
    <motion.a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 min-w-[240px] shrink-0 md:min-w-0"
    >
      <div
        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.accent} flex items-center justify-center text-white font-bold text-sm shrink-0`}
      >
        {product.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="font-semibold text-sm dark:text-white truncate">{product.name}</p>
          <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{product.tagline}</p>
      </div>
      <Icon className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 shrink-0" />
    </motion.a>
  )
}

export default function Products() {
  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="Products I've Built" />

        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto -mt-6 mb-10 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Beyond leading engineering teams, I design and ship production-grade products — live on Google Play and the
          web. Idea, design, and development by me.
        </motion.p>

        {/* Web apps — featured row */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Live on the Web
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {webApps.map((app, i) => (
              <ProductTile key={app.name} product={app} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile apps — compact horizontal scroll on small screens */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            Live on Google Play
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 lg:grid-cols-3">
            {mobileApps.map((app, i) => (
              <div key={app.name} className="snap-start md:snap-align-none">
                <ProductTile product={app} index={i + webApps.length} />
              </div>
            ))}
          </div>
        </div>

        {/* Early access CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
        >
          <div className="flex items-start gap-3 text-center sm:text-left">
            <Sparkles className="w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Building something new?</p>
              <p className="text-sm text-blue-100 mt-1">
                Connect for early access, beta invites, or to collaborate on what&apos;s next.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
          >
            Get early access
          </a>
        </motion.div>
      </div>
    </section>
  )
}
