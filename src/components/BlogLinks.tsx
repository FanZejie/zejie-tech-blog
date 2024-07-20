import Link from "next/link";
import { NotebookPen,Laugh,BriefcaseBusiness,Pickaxe   } from "lucide-react";

const BlogLinks = () => {
  return (
    <div className="flex justify-between mt-4 ">
      <div className="flex flex-col space-y-1.5">
        <Link href="/blog" className="hover:underline flex flex-row">
          <NotebookPen color="#4d4545"/>
          <span data-umami-event="home-link-blog" className="ml-3 ">
            My writings
          </span>
        </Link>
        <Link href="/projects" className="hover:underline flex flex-row">
        <Pickaxe color="#4d4545"/>
          <span data-umami-event="home-link-projects" className="ml-3">
            What have I built?
          </span>
        </Link>
      </div>

      <div className="flex flex-col space-y-1.5 mr-8">
        <Link href="/about" className="hover:underline flex flex-row">
        <Laugh color="#4d4545"/>
          <span data-umami-event="home-link-about" className="ml-3">
            More about me and myself
          </span>
        </Link>
        <Link href="/resume" className="hover:underline flex flex-row">
        <BriefcaseBusiness color="#4d4545"/>
          <span data-umami-event="home-link-resume" className="ml-3">
            My career
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogLinks;
