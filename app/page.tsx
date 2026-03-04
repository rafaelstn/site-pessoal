import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Solucao } from "@/components/sections/Solucao";
import { Portfolio } from "@/components/sections/Portfolio";
import { Sobre } from "@/components/sections/Sobre";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <Solucao />
      <Portfolio />
      <Sobre />
      <CTAFinal />
      <Footer />
    </main>
  );
}
