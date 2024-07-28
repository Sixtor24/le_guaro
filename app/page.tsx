import Distribute from "@/components/Distribute";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-black-0 flex flex-col overflow-hidden mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center w-full">
        <section className="w-full">
          <Hero />
          <Distribute />
        </section>
        <section className="flex flex-col items-center w-full sm:px-10 px-5 max-w-7xl">
          {/* Otros componentes */}
        </section>
      </main>
    </div>
  );
}
