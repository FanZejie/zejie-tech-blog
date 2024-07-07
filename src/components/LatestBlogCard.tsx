
const LatestBlogCard = () => {
  return (
    <div className="w-full divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 py-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Latest Blog
        </h1>
        <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
          My desire to practice my skills and share my acquired knowledge fuels
          my endeavors.
        </p>
      </div>
      <div className="popular-tags grid grid-cols-3 gap-4 py-6 xl:grid-cols-6"></div>
    </div>
  );
};

export default LatestBlogCard;
