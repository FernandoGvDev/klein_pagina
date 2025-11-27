import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

// -----------------------------
// Variants
// -----------------------------

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

const buttonMotion: Variants = {
  hover: { scale: 1.05, filter: "brightness(1.2)" },
  tap: { scale: 0.92 }
};

// -----------------------------
// COMPONENTE
// -----------------------------

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
            className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 leading-tight"
          >
            O método que faz pintores estruturais saírem da falta de serviço para uma agenda cheia o ano inteiro
          </motion.h2>

          {/* PARÁGRAFO 1 */}
          <motion.p
            variants={blurIn}
            className="text-lg text-gray-300 leading-relaxed mb-6 will-change-[opacity,filter]"
          >
            <strong className="text-white">Lote Sua Agenda</strong> é o eBook que revela a rotina,
            as estratégias e os bastidores de um pintor que saiu da incerteza e
            passou a ter trabalho todos os meses — sem depender da sorte.
          </motion.p>

          {/* PARÁGRAFO 2 */}
          <motion.p
            variants={blurIn}
            className="text-lg text-gray-300 leading-relaxed mb-10 will-change-[opacity,filter]"
          >
            Feito para pintores que querem clientes, preço certo e uma agenda
            cheia, de forma simples e realista.
          </motion.p>

          {/* BOTÃO */}
          <motion.a
            href="#checkout"
            role="button"
            aria-label="Avançar para o checkout"
            variants={buttonMotion}
            whileHover="hover"
            whileTap="tap"
            className="
              px-8 py-4 rounded-xl font-semibold text-lg
              bg-transparent hover:bg-blue-700 
              text-blue-400 
              shadow-[0_0_25px_rgba(59,130,246,0.45)]
              transition-all duration-300
              hover:shadow-[0_0_35px_rgba(59,130,246,0.75)]
              will-change-transform
            "
          >
            Quero avançar para o próximo nível
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
