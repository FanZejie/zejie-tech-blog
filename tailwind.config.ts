import type { Config } from "tailwindcss";
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

const config: Config = {
  darkMode: 'class', // 新增的配置项
  presets: [createPreset()], // 新增的配置项
  content: [
    './node_modules/fumadocs-ui/dist/**/*.js', // 新增的内容路径
    './components/**/*.{ts,tsx}', // 新增的内容路径
    './app/**/*.{ts,tsx}', // 新增的内容路径
    './content/**/*.mdx', // 新增的内容路径
    './mdx-components.tsx', // 新增的内容路径
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
