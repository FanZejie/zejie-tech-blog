import Link from "next/link";
const BlogCard = () => {
  return (
    <div className="flex flex-row w-full">
     <div className=" basis-1/4 ">
     <p className="text-base font-medium leading-6  text-gray-500 dark:text-gray-400">
                       2024-05-27
                      </p>
     </div>
     <div className="basis-3/4  flex flex-col">
        <h2 className="text-2xl font-bold leading-8 tracking-tight">Exploring module in NestJS</h2>
        <div>
            <span>NEXTJS</span>
            <span>NEXTJS</span>
            <span>NEXTJS</span>
        </div>
        <div className="prose max-w-none text-gray-500 dark:text-gray-400">Modules are crucial components at the center of NestJS. In this post, we will take a closer look at what modules are in NestJS.</div>

        <div className="text-base font-medium leading-6">
            <Link href="/blog/1" className="text-primary hover:text-sky-600 dark:hover:text-sky-400">Read more &rarr;</Link>
        </div>
     </div>
    </div>
  );
};

export default BlogCard;
