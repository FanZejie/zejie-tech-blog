# include technologies
react

nextjs

typescript

tailwindcss

prisma

sqlite


use svgr to import svg files

install @svgr/webpack
```
npm install --save-dev @svgr/webpack
```
add this config in next.confi.mjs
```
webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          use: [{loader:'@svgr/webpack', options:{icon:true}}],
        })
    
        return config
      },
```