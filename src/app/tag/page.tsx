import Link from "next/link"

export default async function TagPage() {
   
    return (
        <>
        <div className="flex flex-col h-80 items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
          <div className="space-x-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
              Tags
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap">
            
            <div className=" mb-2 mr-5 mt-2">
            <Link href={`/tags/nextjs`} className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">NextJs(1)
            </Link>
            </div>
            <div className=" mb-2 mr-5 mt-2">
            <Link href={`/tags/nextjs`} className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">NextJs(1)
            </Link>
            </div>
            <div className=" mb-2 mr-5 mt-2">
            <Link href={`/tags/nextjs`} className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">NextJs(1)
            </Link>
            </div>
            <div className=" mb-2 mr-5 mt-2">
            <Link href={`/tags/nextjs`} className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">NextJs(1)
            </Link>
            </div>
            <div className=" mb-2 mr-5 mt-2">
            <Link href={`/tags/nextjs`} className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">NextJs(1)
            </Link>
            </div>
            <div className=" mb-2 mr-5 mt-2">
            <Link href={`/tags/nextjs`} className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">NextJs(1)
            </Link>
            </div>
            <div className=" mb-2 mr-5 mt-2">
            <Link href={`/tags/nextjs`} className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">NextJs(1)
            </Link>
            </div>
          </div>
        </div>
      </>
    )
}