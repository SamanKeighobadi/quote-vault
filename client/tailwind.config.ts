import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ['light', 'dark', 'lofi'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
} satisfies Config;