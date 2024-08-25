import Hero from "@/app/components/Hero";
import Highlights from "@/app/components/Highlights";
import My3DScene from "@/app/components/Model";
import Explore from "./components/Explore";
import Chip from "./components/Chip";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Highlights />
      <My3DScene />
      <Explore />
      <Chip />
    </main>
  );
}
