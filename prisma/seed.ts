import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//这里写Prisma.PostCreateInput[],是因为prisma会自动生成类，直接使用prisma生成的类，可以避免类型错误，同时有代码提示
const initialTags: Prisma.TagCreateInput[] = [
    {
        title:'Javascript',
        iconType:'Javascript',
        slug:'javascript',
        sort:0
    },
    {
        title:'Typescript',
        iconType:'Typescript',
        slug:'typescript',
        sort:1
    },
    {
        title:'React',
        iconType:'React',
        slug:'react',
        sort:2
    },
    {
        title:'Vue',
        iconType:'Vue',
        slug:'vue',
        sort:3
    },
    {
        title:'NextJS',
        iconType:'NextJS',
        slug:'nextjs',
        sort:4
    },
    {
        title:'TailwindCSS',
        iconType:'Tailwindcss',
        slug:'tailwindcss',
        sort:5
    },
    {
        title:'NestJS',
        iconType:'NestJS',
        slug:'nestjs',
        sort:6
    },
    {
        title:'Java',
        iconType:'Java',
        slug:'java',
        sort:7
    },
    {
        title:'MongoDB',
        iconType:'Mongodb',
        slug:'mongodb',
        sort:8
    },
    {
        title:'MySQL',
        iconType:'Mysql',
        slug:'mysql',
        sort:9
    },
    {
        title:'Devops',
        iconType:'Docker',
        slug:'devops',
        sort:10
    },
    {
        title:'AWS',
        iconType:'AWS',
        slug:'aws',
        sort:11
    },
]
async function main() {
    console.log('start seeding...')
    for (const tag of initialTags) {
        const newtag = await prisma.tag.create({
            data: tag,
        })
        console.log(`Created tag with id: ${newtag.id}`)
    }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })