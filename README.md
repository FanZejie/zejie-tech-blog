# include technologies
react

nextjs

typescript

tailwindcss

prisma

sqlite

## use seed to init database

添加seed.ts
修改package.json
```
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
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