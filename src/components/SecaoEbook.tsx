import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SecaoEbook() {
  const ref = useRef(null);

  // A imagem cresce conforme o usuário desce a página
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 2.7]); // cresce suave

  return (<section
    ref={ref}
    className="relative w-full py-28 overflow-hidden bg-gray-900"
  >
    {/* LUZ EM MOVIMENTO (efeito 12) */} <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-blue-800/5 animate-pulse blur-3xl"></div>

    ```
    <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

      {/* IMAGEM DO EBOOK COM SCROLL SCALE + TILT */}
      <motion.div
        style={{ scale: imageScale }}
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex justify-center"
      >
        <motion.img
          src="/ebook3dt.png"
          alt="Ebook Lote Sua Agenda"
          className="w-64 md:w-80 lg:w-96 drop-shadow-[0_0_35px_rgba(59,130,246,0.35)] rounded-xl"
          whileHover={{
            rotate: -2,
            scale: 1.05,
            boxShadow: "0 0 40px rgba(59,130,246,0.45)",
          }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        />
      </motion.div>

      {/* TEXTO COM ENTRADA EMOCIONAL */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 leading-tight"
        >
          O guia que transforma pintores comuns em profissionais disputados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-lg text-gray-300 leading-relaxed mb-6"
        >
          <strong className="text-white">Lote Sua Agenda</strong> é o eBook que revela a rotina,
          as estratégias e os bastidores de um pintor que saiu da incerteza e
          passou a ter trabalho todos os meses — sem depender da sorte.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="text-lg text-gray-300 leading-relaxed mb-10"
        >
          Feito para pintores que querem clientes, preço certo e uma agenda
          cheia, de forma simples e realista.
        </motion.p>

        <motion.a
          href="#checkout"
          className="
      px-8 py-4 rounded-xl font-semibold text-lg
      bg-transparent hover:bg-blue-700 
      text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.45)]
      transition-all duration-300
      hover:shadow-[0_0_35px_rgba(59,130,246,0.75)]
      active:scale-95
    "
        >
          Quero avançar para o próximo nível
        </motion.a>
      </motion.div>
    </div>
  </section>
  );
}
