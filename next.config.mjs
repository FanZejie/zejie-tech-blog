/** @type {import('next').NextConfig} */

function defineNextConfig(config){
  return config;
}
const nextConfig = {};

export default defineNextConfig({
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          use: [{loader:'@svgr/webpack', options:{icon:true}}],
        })
    
        return config
      },
});
