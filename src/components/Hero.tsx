// HeroPintorEmpresario.tsx
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { HiOutlineFire } from "react-icons/hi"
import { FaHandshake, FaPaintRoller } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
import Button from "./button"


const itens = [
  {
    texto: "SEM DEPENDER DE INDICAÇÃO",
    icon: <FaHandshake className="w-7 h-7 text-white" />,
  },
  {
    texto: "SEM BATER “DE PORTA EM PORTA”",
    icon: <GiExitDoor className="w-7 h-7 text-white" />,
  },
  {
    texto: "MÉTODOS PARA PINTORES SER RECONHECIDOS",
    icon: <FaPaintRoller className="w-7 h-7 text-white" />,
  },
];




const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

export default function HeroPintorEmpresario() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-linear-to-b from-black to-gray-800 text-white pt-10 pb-20">

      <div className="max-w-4xl px-6 lg:px-0">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="flex flex-col items-start text-left gap-6"
        >

          {/* BADGE */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-10 rounded-full border-2 border-red-500 bg-[rgba(220,38,38,0.06)]"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
          >
            <HiOutlineFire className="w-4 h-4 text-red-500" />
            <span className="text-xs font-mono tracking-tight">Oferta limitada</span>
          </motion.div>

          {/* TÍTULO + IMAGEM */}
          <div className="flex items-center justify-center gap-1 sm:gap-4 w-full">

            {/* IMAGEM — SEMPRE VISÍVEL */}
            <motion.img
              src="/calendario2.webp"
              alt="Imagem do Desafio"
              className="
                w-[5.5rem] h-[5.5rem] 
                sm:w-[7rem] sm:h-[7rem]
                lg:w-[9rem] lg:h-[9rem]
                object-contain
                shrink-0
              "
              variants={fadeUp}
            />

            {/* TÍTULO EM DUAS LINHAS OBRIGATÓRIAS */}
            <motion.h1
              variants={fadeUp}
              className="
    font-extrabold leading-[1.05]
    text-2xl sm:text-5xl lg:text-6xl
    whitespace-pre-line
    text-left
    max-w-[17ch] lg:max-w-[18ch]
    min-w-[17ch] lg:min-w-[18ch]
  "
              style={{ WebkitTextStroke: "1px rgba(0,0,0,0.45)" }}
            >
              {"DESAFIO AGENDA\nCHEIA TODO MÊS"}
            </motion.h1>
          </div>
          {/* SUBTÍTULO */}
          <motion.p variants={fadeUp} className="max-w-2xl text-2xl sm:text-lg font-extrabold text-gray-200">
            Agenda Vazia não paga contas. aprenda a lotar sua agenda e pare de sobreviver — comece a ganhar.
          </motion.p>

          {/* LISTA */}
          <motion.ul
  variants={fadeUp}
  className="w-full mt-4 grid gap-4 max-w-2xl"
>
  {itens.map((item, i) => (
    <motion.li
      key={i}
      variants={fadeUp}
      className="
        flex items-center gap-3 text-left
        text-lg
        border border-white
        rounded-xl
        p-3
        bg-transparent
      "
    >
      
        {item.icon}

      <span className="text-white/90">
        {item.texto}
      </span>
    </motion.li>
  ))}
</motion.ul>



        </motion.div>

        {/* IMAGEM PRINCIPAL + EFEITO */}
        <div className="relative flex justify-center items-center w-full mt-10">

          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-72 h-72 bg-red-500/60 blur-[120px] rounded-full" />
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-72 h-72 bg-green-500/60 blur-[120px] rounded-full" />

          <img
            src="/hero.png"
            alt="Pintor Profissional"
            className="relative z-10 w-full max-w-sm md:max-w-3xl rounded-2xl"
          />
        </div>

        {/* CTA */}
        <Button />

        <motion.p variants={fadeUp} className="text-center text-gray-300 text-sm mt-3">
          Já passei pelas mesmas dores que você!
        </motion.p>

      </div>
    </section>
  )
}
