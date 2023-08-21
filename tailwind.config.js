/** @type {import('tailwindcss').Config} */
export const content = [
  "./Components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
]
export const theme = {
  extend: {
    fontSize: {
      sm: ['14px', '23px'],
      base: ['11px', '21px'],
      mini: ["7", "12"],
      lg: ['20px', '28px'],
      xl: ['35px', '52px'],
      xlg: ['55px', '62px'],
      medio: ['18px', '26px'],
    },
    colors: {
      verde: {
        "400": "#16a34a",
        "500": "#10b981",
        "600": "#059669"
      },
      indigo: {
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#1d4ed8"
      }
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
}
export const plugins = []



