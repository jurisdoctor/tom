import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "992px" },
      // => @media (max-width: 992px) { ... }

      xl: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      lg: { max: "576px" },
      // => @media (max-width: 576px) { ... }

      md: { max: "350px" },
      // => @media (max-width: 767px) { ... }
    },
    extend: {
      animation: {
        profileCircles: "profileCircles 8s ease-in-out infinite 1s",
        scrollWheel: "scroll 1s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        profileCircles: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        scroll: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(3.75rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
