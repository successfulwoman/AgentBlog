/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--hue, 30), 70%, 50%)',
          light: 'hsl(var(--hue, 30), 70%, 65%)',
          dark: 'hsl(var(--hue, 30), 70%, 35%)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
