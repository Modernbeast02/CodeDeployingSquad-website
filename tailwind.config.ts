import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './components/**/*.{jhtml,js,ts,jsx,tsx,mdx}',
    './app/**/*.{html,js,ts,jsx,tsx,mdx}',
    './sections/**/*.{html,js,ts,jsx,tsx,mdx}',
    './styles/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      backgroundImage: {
        // 'hero': "url('../public/herogrid.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

