import Benefits from "@/components/Benefits";
import Distribute from "@/components/Distribute";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Navbar from "@/components/Navbar";
import Purpose from "@/components/Purpose";
import { Montserrat, Manrope } from '@next/font/google';

// Importar las fuentes
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-manrope' });

export default function Home() {
  return (
    <div className={`${montserrat.variable} ${manrope.variable} relative bg-black-0 flex flex-col overflow-hidden mx-auto`}>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center w-full">
        <section className="w-full">
          <Hero />
          <Distribute />
          <Benefits />
          <Purpose />
          <Membership />
        </section>
        <section className="flex flex-col items-center w-full sm:px-10 px-5 max-w-7xl">
          {/* Otros componentes */}
        </section>
      </main>
    </div>
  );
}
