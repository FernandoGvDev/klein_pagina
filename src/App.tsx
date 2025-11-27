import Hero from "./components/Hero"
import PainSection from "./components/PainSection"
import SecaoImagineSolucao from "./components/SecaoImagineSolucao"
import SecaoEbook from "./components/SecaoEbook"
import SecaoTopicosEbook from "./components/SecaoTopicosEbook"
import { Offer } from "./components/Offer"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <div className="">
      <Hero />
      <PainSection />
      <SecaoImagineSolucao />
      <SecaoEbook />
      <SecaoTopicosEbook />
      <Offer />
      <Footer />
      
    </div>
    </>
  )
}

export default App
