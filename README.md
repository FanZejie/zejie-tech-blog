# include technologies
react

nextjs

typescript

tailwindcss

prisma

sqlite

mdx

fumadocs

## use seed to init database(do not use now)

add seed.ts
修改package.json
```
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prism/seed.ts"
  },
```
然后需要确保ts-node环境
```
npm i ts-node -D
```
运行以生成假数据
```
npx prisma db seed
```

# svg

## use svgr to import svg files

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

# Blog content manage&show

## first you need to install next mdx 

```
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```


## use fumadocs to show mdx blogs

refer this link to install and init fumadocs

https://fumadocs.vercel.app/docs/ui/manual-installation

and here are something you need to pay attention

### can't find next-docs-mdx ...
you can just copy these dependencies into your package.json and run `npm run dev`
```
"next-docs-mdx": "7.1.0",
"next-docs-ui": "7.1.0",
"next-docs-zeta": "7.1.0",
```

as you can see, i use src here, but document doesn't use src

if you use src, you need to change source.ts map location

```
import { map } from '@/../.map';
```
and you need to change content location put it same layer as .map.ts

then rerun `npm run dev`