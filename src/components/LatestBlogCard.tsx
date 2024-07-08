import BlogCard from "./BlogCard";
const LatestBlogCard = () => {
  return (
    <div className="w-full divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 py-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Latest Blog
        </h1>
        <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
        Sharing my learning journey and solutions to development challenges.
        </p>
      </div>
      <div className="w-full">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-6"><BlogCard/></li>
          <li className="py-6"><BlogCard/></li>
        </ul>
        
      </div>
    </div>
  );
};

export default LatestBlogCard;
