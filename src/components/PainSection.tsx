import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.6, ease: "easeOut" }, // i controla a pausa dramática
  }),
}

export default function PainSection() {
  return (
    <section className="w-full bg-white text-gray-900 pt-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Micro-heading emocional */}
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-600 text-sm mb-4"
        >
          Talvez isso esteja acontecendo com você…
        </motion.p>

        {/* Título emocional forte — dividido em blocos para pausas dramáticas */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-3"
          aria-level={2}
        >
          <motion.span
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="block"
          >
            Você não aguenta mais ficar sem previsão de novos trabalhos,
          </motion.span>

          <motion.span
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="block mt-2"
          >
            isso não te traz uma renda sólida!
          </motion.span>
        </motion.h2>

        {/* Subtítulo emocional — também com entrada sequencial */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg text-gray-700 leading-relaxed mb-6"
        >
          Isso faz você estar em um serviço, mas já com a cabeça no próximo sem saber quando vai aparecer mais trampo… e isso cansa.
        </motion.p>

        {/* Frase final (mais dor, mais conexão) */}
        <motion.p
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-700 leading-relaxed"
        >
          E quanto mais o tempo passa, pior fica a sensação de estar sempre correndo atrás.
        </motion.p>
      </div>
    </section>
  )
}
