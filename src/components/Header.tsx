import Link from "next/link";
import Logo from "@/data/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href={"/home"} className="text-4xl">
          {"zejie's Tech Blog"}
        </Link>
      </div>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <Link
          href="/post"
          className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
        >
          post
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
      </div>
    </header>
  );
}
