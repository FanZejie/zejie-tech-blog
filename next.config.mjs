import createMDX from 'fumadocs-mdx/config';

/** @type {import('next').NextConfig} */

function defineNextConfig(config) {
  return config;
}

// 创建带有 MDX 支持的配置
const withMDX = createMDX();

// 定义你的 Next.js 配置
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
  },
  // 添加其他 Next.js 配置项
  // 例如：trailingSlash: true,
};

// 合并配置
export default defineNextConfig(withMDX(nextConfig));