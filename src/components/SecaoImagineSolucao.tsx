import { motion } from "framer-motion";
import { FaUsers, FaDollarSign, FaCalendarCheck, FaChartLine } from "react-icons/fa";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
          className="text-3xl sm:text-4xl font-bold leading-tight mb-12"
        >
          Imagine…
        </motion.h2>

        {/* ÍCONES + FRASES CURTAS (IDEIA 2) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <FaUsers className="w-10 h-10 text-blue-600" />, text: "Clientes" },
            { icon: <FaDollarSign className="w-10 h-10 text-blue-600" />, text: "Preço certo" },
            { icon: <FaCalendarCheck className="w-10 h-10 text-blue-600" />, text: "Agenda cheia" },
            { icon: <FaChartLine className="w-10 h-10 text-blue-600" />, text: "Crescimento" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-gray-700"
            >
              {item.icon}
              <p className="mt-2 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* FRASE DE IMPACTO (IDEIA 7) */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl font-semibold text-gray-800 mb-10"
        >
          Simples. Direto. Feito para pintores.
        </motion.p>

        {/* APRESENTAÇÃO CURTA (IDEIA 6) */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          O <strong>Lote Sua Agenda</strong> é um guia rápido e direto para pintores aumentarem clientes,
          cobrarem com confiança e manterem a agenda cheia — sem depender de indicação.
        </motion.p>

        {/* FRASE CURTA (IDEIA 3) */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xl sm:text-2xl font-bold text-gray-900"
        >
          Um método real, aplicado por pintores de verdade.
        </motion.h3>

      </div>
    </section>
  );
}
