import { getAllTags } from "@/actions/actions"
export default async function TagPage() {
    const tags =await getAllTags()
    return (
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
             <h1 className="text-6xl font-bold">Tag Page</h1>
           

            
          </div>
    )
}