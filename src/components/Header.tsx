import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="supports-backdrop-blur fixed left-0 right-0 top-0 z-40 bg-white/75 py-4 backdrop-blur dark:bg-gray-900/75">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href={"/"} className="text-2xl dark:text-gray-100 dark:hover:text-primary-400">
            {"zejie's Tech Blog"}
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <Link
            href="/blogs"
            className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
          >
            Blogs
          </Link>

          <Link
            href="/tag"
            className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
          >
            tags
          </Link>

          <Link
            href="/about"
            className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
          >
            about
          </Link>
          <ThemeToggle/>
        </div>
      </div>
    </header>
  );
}
