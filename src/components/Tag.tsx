import Link from "next/link"

interface Props{
    text:string;
}
const Tag = ({text}:Props)=>{
    return (
        <Link href={`/tags/${text}`} className="mr-3 text-sm font-medium uppercase text-primary text-sky-400 hover:text-sky-600 dark:hover:text-sky-200">{text}</Link>
    )
}

export default Tag;