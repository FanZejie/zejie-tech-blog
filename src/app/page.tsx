import InfoCard from "@/components/InfoCard";
import TechCard from "@/components/TechCard";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
     <InfoCard></InfoCard>
    <TechCard></TechCard>
    
    </main>
  );
}
