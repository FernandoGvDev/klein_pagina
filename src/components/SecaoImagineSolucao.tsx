import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function SecaoImagineSolucao() {
  return (
    <section className="w-full bg-white text-gray-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* TÍTULO */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold leading-tight mb-10"
        >
          Imagine…
        </motion.h2>

        {/* FRASES CURTAS */}
        <div className="flex flex-col gap-5 mb-16">
          {[
            "Nunca mais ficar sem clientes.",
            "Cobrar com segurança e sem dúvidas.",
            "Clientes chamando você, não o contrário.",
            "Agenda cheia mês após mês."
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.35 }}
              className="text-lg sm:text-xl text-gray-700"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* APRESENTAÇÃO DO EBOOK */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold leading-tight mb-6"
        >
          A solução existe.
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          O Ebook <strong>Lote Sua Agenda</strong> mostra o caminho real que um pintor usou para sair da incerteza, fechar mais serviços e manter clientes chegando todos os meses.
        </motion.p>

        {/* BENEFÍCIOS RESUMIDOS */}
        <div className="max-w-2xl mx-auto flex flex-col gap-4 text-left">
          {[
            "Atraia clientes todos os meses.",
            "Aprenda a dar preço sem perder dinheiro.",
            "Método simples para lotar sua agenda.",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.25 }}
              className="text-gray-800 text-lg list-none border-l-4 border-blue-500 pl-4"
            >
              {item}
            </motion.li>
          ))}
        </div>

      </div>
    </section>
  );
}
