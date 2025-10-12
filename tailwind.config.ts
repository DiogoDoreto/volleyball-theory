import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: 'rgb(200,170,144)',
        forest: 'rgb(69,92,87)',
        green: 'rgb(44,104,78)',
        marine: 'rgb(115,181,223)',
        maroon: 'rgb(88,50,51)',
        navy: 'rgb(18,33,72)',
        orange: 'rgb(206,83,43)',
        purple: 'rgb(47,30,81)',
        red: 'rgb(182,41,55)',
        royal: 'rgb(31,83,154)',
        yellow: 'rgb(245,200,82)',
      },
      minHeight: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}
export default config
