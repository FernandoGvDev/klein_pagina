import Hero from "./components/Hero"
import PainSection from "./components/PainSection"
import SecaoImagineSolucao from "./components/SecaoImagineSolucao"
import SecaoEbook from "./components/SecaoEbook"
import { Offer } from "./components/Offer"
import Footer from "./components/Footer"
import AprendizadosCarousel from "./components/AprendizadosCarousel"
import RecapitulacaoEbook from "./components/RecapitulacaoEbook"
import { FAQ } from "./components/FAQ"
import TestimonialSection from "./components/TestimonialCard"
import SobreSecao from "./components/SobreSecao"
import PurchaseNotifications from "./components/PurchaseNotifications"

const aprendizados = [
  {
    img: "/1.png",
    title: "Como lotar sua agenda",
    description:
      "Aplique estratégias práticas que fazem qualquer profissional ter demanda constante, mesmo sem seguidores ou anúncios caros.",
  },
  {
    img: "/2.png",
    title: "Como passar orçamentos que convertem",
    description:
      "Aprenda as frases e técnicas que aumentam drasticamente a taxa de aceitação — o cliente sente segurança imediatamente.",
  },
  {
    img: "3.png",
    title: "Como aumentar sua qualidade",
    description:
      "Segredos da execução profissional que elevam sua reputação e geram clientes que pagam mais sem reclamar.",
  },
  {
    img: "/4.png",
    title: "Experiência da vida real",
    description:
      "Nada de teoria. Conteúdo testado em atendimentos reais, que funciona para quem vive do próprio trabalho.",
  },
  {
    img: "/5.png",
    title: "Clientes todos os dias",
    description:
      "Um método simples e repetível para nunca mais depender de indicação e manter o fluxo de clientes ativo sempre.",
  },
];

function App() {
  return (
    <>
    <div className="bg-black">
      <Hero />
      <PainSection />
      <SecaoImagineSolucao />
      <SecaoEbook />
      <AprendizadosCarousel
      heroImage="/persol.png" // sua imagem da pessoa com o celular
      items={aprendizados}
    />
    <RecapitulacaoEbook />
      <div id="compra">
      <Offer />
      </div>
      <TestimonialSection />
      <SobreSecao />
      <FAQ />
      <Footer />
      <PurchaseNotifications />
    </div>
    </>
  )
}

export default App
