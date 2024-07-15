import BlogCard from "@/components/BlogCard"

const Blogs = () => {
    return (
        <div className="flex flex-row  w-full mt-5 h-full">
            <div className=" w-1/5 bg-gray-100 rounded-lg dark:bg-gray-800" >
            <div className="text-4xl font-bold uppercase text-cyan-500">All Tags</div>
                <ul className="mt-2">
                    <li className="px-4 py-2 text-sm font-medium uppercase text-gray-500 dark:text-gray-100">Nextjs(3)</li>
                    <li className="px-4 py-2 text-sm font-medium uppercase text-gray-500 dark:text-gray-100">TypeScript(3)</li>
                    <li className="px-4 py-2 text-sm font-medium uppercase text-gray-500 dark:text-gray-100">JavaScript(3)</li>
                    <li className="px-4 py-2 text-sm font-medium uppercase text-gray-500 dark:text-gray-100">AWS(4)</li>
                </ul>
            </div>
            <div className=" w-2/3 ml-8" >
                <ul>
                    <li className="py-4"><BlogCard></BlogCard></li>
                    <li className="py-4"><BlogCard></BlogCard></li>
                    <li className="py-4"><BlogCard></BlogCard></li>
                    <li className="py-4"><BlogCard></BlogCard></li>
                    <li className="py-4"><BlogCard></BlogCard></li>
                </ul>
            </div>
        </div>
    )
}

export default Blogs