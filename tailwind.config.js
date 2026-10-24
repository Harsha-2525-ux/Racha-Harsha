/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#172B4D",
          hover: "#0F1F3A",
        },
        growth: {
          DEFAULT: "#477A63",
          hover: "#3B664F",
        },
        charcoal: "#252A32",
        muted: "#667085",
        mist: "#E5E9EF",
        sand: "#F6F4EF",
        "light-green": "#E8EEE8",
        "light-blue": "#EDF2F8",
        warning: "#A15C16",
        error: "#B42318",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.08", fontWeight: "700" }],
        h1: ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.12", fontWeight: "700" }],
        h2: ["clamp(1.625rem, 3vw, 2.25rem)", { lineHeight: "1.18", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }],
        h4: ["1.125rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
        "card-hover": "0 4px 12px rgba(16, 24, 40, 0.08)",
        pop: "0 8px 28px rgba(16, 24, 40, 0.12)",
      },
      transitionDuration: {
        180: "180ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "bounce-sm": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "sound-wave": {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 180ms ease-out",
        "slide-up": "slide-up 220ms ease-out",
        "slide-in-right": "slide-in-right 200ms ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "bounce-sm": "bounce-sm 1.2s ease-in-out infinite",
        "scale-in": "scale-in 200ms ease-out",
      },
      backgroundSize: {
        "200": "200% 200%",
      },
    },
  },
  plugins: [],
};
