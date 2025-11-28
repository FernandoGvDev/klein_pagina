import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion"
import { useRef } from "react";

// -----------------------------
// Variants
// -----------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  }
};

const bounceUp: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 }
  }
};

const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 }
  }
};

export default function SecaoEbook() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 2.7]);

  return (
    <section
      ref={ref}
      className="relative w-full py-28 overflow-hidden bg-gray-900"
    >
      {/* FUNDO */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-blue-800/5 animate-pulse blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGEM */}
        <motion.div
          style={{ scale: imageScale }}
          className="flex justify-center will-change-transform"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.img
            src="/ebook3dt.png"
            alt="Ebook Lote Sua Agenda"
            loading="lazy"
            decoding="async"
            className="w-64 md:w-80 lg:w-96 rounded-xl drop-shadow-[0_0_35px_rgba(59,130,246,0.35)] will-change-transform"
            whileHover={{ rotate: -2, scale: 1.07, filter: "brightness(1.15)" }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="will-change-transform"
        >
          {/* TÍTULO */}
          <motion.h2
            variants={bounceUp}
            className="text-4xl md:text-4xl font-extrabold text-gray-100 mb-4 leading-tight"
          >
            O método simples que faz pintores saírem da incerteza e conquistarem uma agenda cheia o ano todo
          </motion.h2>

          {/* PARÁGRAFO 1 */}
          <motion.p
            variants={blurIn}
            className="text-lg text-gray-300 leading-relaxed mb-6 will-change-[opacity,filter]"
          >
            <strong className="text-white">Lote Sua Agenda</strong> é o eBook que mostra, passo a passo, a rotina, as estratégias e o processo real usado por um pintor que saiu da falta de serviço e passou a ter clientes todos os meses — sem depender de indicação ou sorte.
          </motion.p>
          <motion.p
            variants={blurIn}
            className="text-lg text-gray-300 leading-relaxed mb-6 will-change-[opacity,filter]"
          >
            Aqui você aprende exatamente o que fazer para atrair clientes, cobrar o valor certo e manter sua agenda sempre cheia, de forma prática e realista.
          </motion.p>
          {/* PARÁGRAFO 2 */}
          <motion.p
            variants={blurIn}
            className="text-lg text-gray-300 leading-relaxed mb-10 will-change-[opacity,filter]"
          >
            Se você é pintor e está cansado de torcer para aparecer serviço… chegou a hora de mudar isso.
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="w-full mt-30 flex justify-center">
          <button className="button">
            <span>Avançar Para o Próximo Nível</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
              <polygon
                points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"
              ></polygon>
              <polygon
                points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"
              ></polygon>
              <polygon
                points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"
              ></polygon>
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
