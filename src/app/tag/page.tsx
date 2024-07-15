import {map} from 'lodash'
import Link from 'next/link';
import BrandIcon from '@/components/BrandIcon';
import popularTags from '@/data/popularTags';

export default async function TagPage() {
  return (
    <>
      <div className="flex flex-col h-80 items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap">
          {map(popularTags, (popularTag) => {
            const { slug, iconType, href, title } = popularTag;

            const className = `${slug} flex w-[200px]  space-x-2 rounded-lg p-3`;

            return (
              <Link key={slug} href={href} className={className}>
                <BrandIcon type={iconType} className="h-6 w-6" />
                <div className="my-auto text-black dark:text-gray-400">
                  {title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
