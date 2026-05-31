type IconProps = { className?: string; size?: number }

export function WebPlatformIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function AndroidIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.6 9.48l1.39-2.41a.42.42 0 00-.15-.57.42.42 0 00-.57.15l-1.42 2.46C15.53 8.98 13.84 8.5 12 8.5s-3.53.48-5.05 1.21L5.53 7.25a.42.42 0 00-.57-.15.42.42 0 00-.15.57l1.39 2.41C3.58 11.05 2 13.79 2 17h20c0-3.21-1.58-5.95-4.4-7.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
    </svg>
  )
}

export function GooglePlayIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M3.6 1.8l10.2 10.2L3.6 22.2A1.8 1.8 0 012 20.6V3.4a1.8 1.8 0 011.6-1.6z" />
      <path fill="#34A853" d="M16.2 8.4l3.6-2.1c.6-.3 1.2.1 1.2.8v9.8c0 .7-.6 1.1-1.2.8l-3.6-2.1-4.2-4.2 4.2-2.4z" />
      <path fill="#FBBC04" d="M3.6 1.8l10.2 10.2-4.2 2.4L3.6 1.8z" />
      <path fill="#EA4335" d="M3.6 22.2l6-6 4.2 2.4-10.2-10.2V22.2z" />
    </svg>
  )
}

export function AppleIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

type Platform = "web" | "android" | "ios"

export function PlatformBadge({
  platform,
  variant = "default",
  className = "",
}: {
  platform: Platform
  variant?: "default" | "light" | "dark"
  className?: string
}) {
  const styles = {
    default:
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700/60 dark:text-gray-200",
    light:
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm",
    dark: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-900/10 text-gray-600 dark:text-gray-300",
  }

  const config = {
    web: {
      label: "Web",
      icon: <WebPlatformIcon size={14} />,
    },
    android: {
      label: "Google Play",
      icon: (
        <>
          <GooglePlayIcon size={14} />
          <AndroidIcon size={14} className="text-[#3DDC84]" />
        </>
      ),
    },
    ios: {
      label: "App Store",
      icon: <AppleIcon size={14} />,
    },
  }

  const { label, icon } = config[platform]

  return (
    <span className={`${styles[variant]} ${className}`}>
      {icon}
      {label}
    </span>
  )
}
