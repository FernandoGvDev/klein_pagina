import { type FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowDown } from "lucide-react";

const itens = [
{ nome: "Captação de clientes para obras grandes", preco: 80 },
{ nome: "Captação de clientes pelas redes sociais", preco: 50 },
{ nome: "Estratégias para agenda cheia", preco: 40 },
{ nome: "Dicas práticas", preco: 20 },
{ nome: "Acesso ilimitado ao e-book", preco: 30 },
{ nome: "Conteúdo feito com experiência real", preco: 20 },
{ nome: "Todo o conhecimento para mudar de vida", preco: 20 }
];

const textoFinal =
"No total tudo isso deveria custar R$260. Mas hoje você vai ter acesso ao LOTE SUA AGENDA completo por apenas:";

const RecapitulacaoEbook: FC = () => {
const containerRef = useRef<HTMLDivElement | null>(null);

const [startAnimations, setStartAnimations] = useState(false);
const [showTotalBig, setShowTotalBig] = useState(false);
const [animateDiscount, setAnimateDiscount] = useState(false);
const [showFinalText, setShowFinalText] = useState(false);
const [arrowStep, setArrowStep] = useState(0);

const words = textoFinal.split(" ");

// --- Start animação somente quando o usuário chegar no componente ---
useEffect(() => {
if (!containerRef.current) return;

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) setStartAnimations(true);
  },
  { threshold: 0.3 }
);

observer.observe(containerRef.current);

return () => observer.disconnect();

}, []);

// --- Lógica das animações sequenciais ---
useEffect(() => {
if (!startAnimations) return;

const totalTime = itens.length * 250 + 700;

const t1 = setTimeout(() => setShowTotalBig(true), totalTime);
const t2 = setTimeout(() => setAnimateDiscount(true), totalTime + 1500);
const t3 = setTimeout(() => setShowFinalText(true), totalTime + 3000);

return () => {
  clearTimeout(t1);
  clearTimeout(t2);
  clearTimeout(t3);
};

}, [startAnimations]);

// --- Flechas piscando ---
useEffect(() => {
if (!showFinalText) return;

const interval = setInterval(() => {
  setArrowStep((prev) => (prev + 1) % 3);
}, 500);

return () => clearInterval(interval);

}, [showFinalText]);

return ( <div
   ref={containerRef}
   className="w-full max-w-xl mx-auto bg-black text-white pt-6 px-6 rounded-2xl shadow-lg space-y-6 my-20"
 > <h2 className="text-2xl font-bold text-center">Tudo que você vai receber</h2>

  {/* LISTA */}
  <div className="space-y-4">
    {itens.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={startAnimations ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: i * 0.25 }}
        className="flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <p className="text-base">{item.nome}</p>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={startAnimations ? { opacity: 1 } : {}}
          transition={{ delay: i * 0.3 }}
          className={`font-semibold whitespace-nowrap transition-all duration-500 ${
            animateDiscount ? "text-red-400 line-through" : "text-green-400"
          }`}
        >
          R${item.preco}
        </motion.span>
      </motion.div>
    ))}
  </div>

  {/* R$260 GRANDE */}
  {showTotalBig && !showFinalText && (
    <motion.p
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{
        scale: animateDiscount ? 0.7 : 1.4,
        opacity: animateDiscount ? 0 : 1,
        color: animateDiscount ? "#f87171" : "#4ade80"
      }}
      transition={{ duration: 1 }}
      className="text-center font-bold text-6xl"
    >
      R$260
    </motion.p>
  )}

  {/* TEXTO FINAL */}
  {showFinalText && (
    <div className="text-center pt-6 border-t border-white/40">
      <div className="flex flex-wrap justify-center gap-2 text-lg font-semibold leading-relaxed">
        {words.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            {w}
          </motion.span>
        ))}
      </div>

      {/* FLECHAS */}
      <div className="flex flex-col items-center gap-4 mt-6">
        <ArrowDown
          className={`w-10 h-10 transition-opacity ${
            arrowStep === 0 ? "opacity-100 text-green-400" : "opacity-20"
          }`}
        />
        <ArrowDown
          className={`w-10 h-10 transition-opacity ${
            arrowStep === 1 ? "opacity-100 text-green-400" : "opacity-20"
          }`}
        />
        <ArrowDown
          className={`w-10 h-10 transition-opacity ${
            arrowStep === 2 ? "opacity-100 text-green-400" : "opacity-20"
          }`}
        />
      </div>
    </div>
  )}
</div>

);
};

export default RecapitulacaoEbook;
