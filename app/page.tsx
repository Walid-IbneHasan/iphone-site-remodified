import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import My3DScene from "@/components/Model";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Highlights />
      <My3DScene />
    </main>
  );
}
