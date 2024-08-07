import {map} from 'lodash'
import Link from 'next/link';
import BrandIcon from './BrandIcon';
import popularTags from '@/data/popularTags';
const TechCard = () => {
  return (
    <div className="w-full divide-y divide-gray-200 dark:divide-gray-700 ">
      <div className="space-y-2 py-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Dev Skills
        </h1>
        <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
        These are the technologies I've been working with so far, and I'm continuously adding more to my toolkit.
        </p>
      </div>
      <div className="popular-tags grid grid-cols-3 gap-4 py-6 xl:grid-cols-6">
      {map(popularTags, (popularTag) => {
          const { slug, iconType, href, title } = popularTag;

          const className = `${slug} flex w-[200px]  space-x-2 rounded-lg p-3`;

          return (
            <Link key={slug} href={href} className={className}>
              <BrandIcon type={iconType} className="h-6 w-6" />
              <div className="my-auto text-black dark:text-gray-400">{title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TechCard;
