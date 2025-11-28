import { type FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const itens = [
  "Captação de clientes para obras grandes",
  "Captação de clientes pelas redes sociais",
  "Estratégias para agenda cheia",
  "Dicas práticas",
  "Acesso ilimitado ao e-book",
  "Conteúdo feito com experiência real",
  "Todo o conhecimento para mudar de vida"
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15 }
  })
};

const RecapitulacaoEbook: FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto bg-zinc-900 text-white p-6 rounded-2xl shadow-lg space-y-6 my-20">
      <h2 className="text-2xl font-bold text-center">
        Tudo que você vai receber
      </h2>

      <div className="space-y-4">
        {itens.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <CheckCircle className="w-6 h-6 text-green-400" />
            <p className="text-base">{item}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-4 border-t border-zinc-700">
        <p className="text-lg font-semibold">Apenas</p>
        <p className="text-4xl font-bold text-green-400">R$47</p>
      </div>
    </div>
  );
};

export default RecapitulacaoEbook;
