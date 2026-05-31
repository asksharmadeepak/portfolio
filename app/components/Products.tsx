"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Layers, Sparkles } from "lucide-react"
import {
  AndroidIcon,
  GooglePlayIcon,
  PlatformBadge,
  WebPlatformIcon,
} from "./PlatformIcons"

interface Product {
  name: string
  tagline: string
  description: string
  href: string
  platform: "web" | "android"
  gradient: string
  glow: string
  iconUrl?: string
}

function ProductIcon({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false)

  if (product.iconUrl && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={product.iconUrl}
        alt=""
        className="w-full h-full object-cover rounded-[inherit]"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <span className="text-white font-bold text-lg">{product.name.charAt(0)}</span>
  )
}

const webApps: Product[] = [
  {
    name: "Dual Canvas",
    tagline: "Draw together, anywhere",
    description: "Real-time collaborative canvas — sketch on tablet, sync instantly in the browser.",
    href: "https://dual-canvas.com/",
    platform: "web",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    glow: "group-hover:shadow-violet-500/25",
    iconUrl: "https://www.google.com/s2/favicons?domain=dual-canvas.com&sz=128",
  },
  {
    name: "Lounge Access Finder",
    tagline: "Airport lounge access, simplified",
    description: "Find credit card lounge eligibility across major airports in India.",
    href: "https://loungeaccessfinder.com/",
    platform: "web",
    gradient: "from-blue-600 via-indigo-600 to-slate-700",
    glow: "group-hover:shadow-blue-500/25",
    iconUrl: "https://www.google.com/s2/favicons?domain=loungeaccessfinder.com&sz=128",
  },
]

const mobileApps: Product[] = [
  {
    name: "ChargerLive",
    tagline: "EV charging companion",
    description: "Find and manage EV charging on the go.",
    href: "https://play.google.com/store/apps/details?id=com.chargerlive.app",
    platform: "android",
    gradient: "from-emerald-500 to-teal-600",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    name: "Fitwith",
    tagline: "Fitness & training",
    description: "Workout tracking and fitness goals.",
    href: "https://play.google.com/store/apps/details?id=com.fitwith.app",
    platform: "android",
    gradient: "from-lime-500 to-green-600",
    glow: "group-hover:shadow-lime-500/20",
  },
  {
    name: "LoungeAccessFinder",
    tagline: "Lounges on mobile",
    description: "Check lounge access from your phone.",
    href: "https://play.google.com/store/apps/details?id=com.loungeaccessfinder.app",
    platform: "android",
    gradient: "from-indigo-500 to-violet-600",
    glow: "group-hover:shadow-indigo-500/20",
    iconUrl: "https://www.google.com/s2/favicons?domain=loungeaccessfinder.com&sz=128",
  },
  {
    name: "NextBinge",
    tagline: "What to watch next",
    description: "Discover your next show or movie.",
    href: "https://play.google.com/store/apps/details?id=com.nextbinge.app",
    platform: "android",
    gradient: "from-purple-500 to-fuchsia-600",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    name: "Tayyari",
    tagline: "Travel prep made easy",
    description: "Plan and prepare for your journeys.",
    href: "https://play.google.com/store/apps/details?id=com.tayyari.app",
    platform: "android",
    gradient: "from-cyan-500 to-teal-600",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    name: "myBinge",
    tagline: "Your watchlist hub",
    description: "Track and plan what you watch.",
    href: "https://play.google.com/store/apps/details?id=com.mybinge.app",
    platform: "android",
    gradient: "from-rose-500 to-orange-600",
    glow: "group-hover:shadow-rose-500/20",
  },
]

function FeaturedWebCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 min-h-[220px] flex flex-col justify-between bg-gradient-to-br ${product.gradient} text-white shadow-xl ${product.glow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-60" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm overflow-hidden flex items-center justify-center ring-2 ring-white/30">
              <ProductIcon product={product} />
            </div>
            <span
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-white/90 shadow-md flex items-center justify-center text-blue-600"
              title="Web app"
            >
              <WebPlatformIcon size={12} />
            </span>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <PlatformBadge platform="web" variant="light" />
            <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-1">{product.name}</h3>
        <p className="text-white/90 font-medium text-sm md:text-base mb-3">{product.tagline}</p>
        <p className="text-white/70 text-sm leading-relaxed max-w-md">{product.description}</p>
      </div>
      <p className="relative z-10 mt-4 text-xs text-white/60 group-hover:text-white/90 transition-colors">
        Idea · Design · Development by me
      </p>
    </motion.a>
  )
}

function MobileAppCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 p-5 hover:border-transparent hover:shadow-xl ${product.glow} hover:-translate-y-0.5 transition-all duration-300`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300`}
          >
            <ProductIcon product={product} />
          </div>
          <span
            className="absolute -bottom-1 -right-1 flex items-center gap-0.5 px-1 py-0.5 rounded-md bg-white dark:bg-gray-900 shadow-md ring-1 ring-gray-200 dark:ring-gray-700"
            title="Available on Google Play for Android"
          >
            <GooglePlayIcon size={11} />
            <AndroidIcon size={11} className="text-[#3DDC84]" />
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-semibold text-gray-900 dark:text-white truncate">{product.name}</h4>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 shrink-0 opacity-0 group-hover:opacity-100 -translate-y-0.5 group-hover:translate-y-0 transition-all duration-300" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{product.tagline}</p>
        </div>
      </div>
      <div className="mt-3">
        <PlatformBadge platform="android" variant="default" />
      </div>
    </motion.a>
  )
}

function ProductsHeader() {
  const stats = [
    { value: "8", label: "Products live", iconType: "layers" as const },
    { value: "2", label: "Web apps", iconType: "web" as const },
    { value: "6", label: "Google Play", iconType: "android" as const },
  ]

  function StatIcon({ type }: { type: "layers" | "web" | "android" }) {
    if (type === "layers") return <Layers className="w-4 h-4 text-white" />
    if (type === "web") return <WebPlatformIcon size={18} className="text-white" />
    return (
      <span className="flex items-center gap-0.5">
        <GooglePlayIcon size={16} />
        <AndroidIcon size={14} className="text-[#3DDC84]" />
      </span>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-14 md:mb-16"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/60 dark:border-gray-700/60 bg-white/40 dark:bg-gray-800/30 backdrop-blur-xl shadow-xl shadow-blue-500/5 dark:shadow-none">
        {/* Inner gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-3xl" />

        <div className="relative px-6 py-10 md:px-12 md:py-14 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-purple-500/30 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Product Builder
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200">
              Products I&apos;ve Built
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            From idea to launch — production-grade apps on Google Play and the web.
            <span className="block mt-1 text-gray-500 dark:text-gray-500 text-sm md:text-base">
              Designed, developed, and shipped end-to-end by me.
            </span>
          </p>

          {/* Stats bar */}
          <div className="inline-flex flex-col sm:flex-row items-stretch gap-px p-1 rounded-2xl bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-blue-200/50 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-blue-900/40 shadow-inner">
            {stats.map(({ value, label, iconType }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-3 px-6 py-4 sm:py-3 bg-white/90 dark:bg-gray-900/90 first:rounded-t-xl last:rounded-b-xl sm:first:rounded-l-xl sm:first:rounded-tr-none sm:last:rounded-r-xl sm:last:rounded-bl-none sm:min-w-[140px]"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20">
                  <StatIcon type={iconType} />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold leading-none text-gray-900 dark:text-white tabular-nums">{value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 whitespace-nowrap">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950"
    >
      {/* Ambient background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ProductsHeader />

        {/* Featured web apps */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <WebPlatformIcon size={18} className="text-blue-600 dark:text-blue-400" />
              Live on the Web
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {webApps.map((app, i) => (
              <FeaturedWebCard key={app.name} product={app} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile apps grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <GooglePlayIcon size={18} />
              <AndroidIcon size={16} className="text-[#3DDC84]" />
              Google Play · Android
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileApps.map((app, i) => (
              <MobileAppCard key={app.name} product={app} index={i} />
            ))}
          </div>
        </div>

        {/* Early access CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl p-6 md:p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">What&apos;s coming next?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 max-w-md">
                  I&apos;m always building. Connect for early access, beta invites, or to collaborate on new products.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 shrink-0"
            >
              Get early access
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
