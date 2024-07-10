import { BrandIconType } from "@/components/BrandIcon";

type PopularTag = {
  href: string;
  iconType: BrandIconType;
  slug: string;
  title: string;
};
const popularTags: PopularTag[] = [
  {
    href: '/tags/javascript',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    href: '/tags/typescript',
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript',
  },
  {
    href: '/tags/react',
    iconType: 'React',
    slug: 'react',
    title: 'React',
  },
  {
    href: '/tags/vue',
    iconType: 'Vue',
    slug: 'vue',
    title: 'Vue',
  },
  {
    href: '/tags/nextjs',
    iconType: 'NextJS',
    slug: 'nextjs',
    title: 'NextJS',
  },
  {
    href: '/tags/tailwindcss',
    iconType: 'Tailwindcss',
    slug: 'tailwindcss',
    title: 'Tailwindcss',
  },
  {
    href: '/tags/nestjs',
    iconType: 'NestJS',
    slug: 'nestjs',
    title: 'NestJS',
  },
  {
    href: '/tags/java',
    iconType: 'Java',
    slug: 'java',
    title: 'Java',
  },
  {
    href: '/tags/mongodb',
    iconType: 'Mongodb',
    slug: 'mongodb',
    title: 'MongoDB',
  },
  {
    href: '/tags/mysql',
    iconType: 'Mysql',
    slug: 'mysql',
    title: 'MySQL',
  },
  {
    href: '/tags/devops',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops',
  },
  {
    href: '/tags/aws',
    iconType: 'AWS',
    slug: 'aws',
    title: 'AWS',
  },
];
export default popularTags;
