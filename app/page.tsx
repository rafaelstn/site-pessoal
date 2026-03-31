import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Solucao } from "@/components/sections/Solucao";
import { Portfolio } from "@/components/sections/Portfolio";
import { Sobre } from "@/components/sections/Sobre";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { SocialProof } from "@/components/sections/SocialProof";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <Solucao />
      <Portfolio />
      <Sobre />
      <ComoFunciona />
      <SocialProof />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
