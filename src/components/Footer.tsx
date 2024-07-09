

import BrandIcon from './BrandIcon';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
      <div className="flex items-center space-x-1">
    <span className="mr-1 text-gray-500 dark:text-gray-400">Build with</span>

    <div className="flex space-x-1.5">
      <Link href="https://nextjs.org?ref=karhdo.dev">
        <BrandIcon type="NextJS" className="h-5 w-5" />
      </Link>
      <Link href="https://www.typescriptlang.org?ref=karhdo.dev">
        <BrandIcon type="Typescript" className="h-5 w-5" />
      </Link>
      <Link href="https://tailwindcss.com?ref=karhdo.dev">
        <BrandIcon type="Tailwindcss" className="h-5 w-5" />
      </Link>
      <Link href="https://www.prisma.io/">
        <BrandIcon type="Prisma" className="h-5 w-5" />
      </Link>

    </div>
    <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
    <Link href={"https://github.com/FanZejie/zejie-tech-blog"} className="text-gray-500 underline underline-offset-4 dark:text-gray-400">
      <span data-umami-event="view-source">View source</span>
    </Link>
  </div>

        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>zejie's Tech Blog</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
