// HeroPintorEmpresario.tsx

import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { HiOutlineFire } from 'react-icons/hi'
import { HiCheckCircle } from 'react-icons/hi'

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' }
  }
}

export default function HeroPintorEmpresario() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-950 text-white py-20 overflow-hidden">
      <div className="max-w-4xl px-6 lg:px-0">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="flex flex-col items-start text-left gap-6"
        >

          {/* WRAPPER */}
          <div className="w-full flex flex-col items-start text-left">

            {/* BADGE */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-red-500 bg-[rgba(220,38,38,0.06)] mb-2"
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  '0 0 0 rgba(255,0,0,0.0)',
                  '0 0 18px rgba(59,130,246,0.0)',
                  '0 0 0 rgba(255,0,0,0.0)'
                ]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
              }}
            >
              <HiOutlineFire className="w-4 h-4 text-red-500" />
              <span className="text-xs font-mono tracking-tight">Oferta limitada</span>
            </motion.div>

            {/* TÍTULO */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-3xl text-center"
              style={{ WebkitTextStroke: '0.9px rgba(0,0,0,0.55)' } as React.CSSProperties}
            >
              <span className="block">
                <span
                  className="inline-block"
                  style={{ WebkitTextStroke: '1px rgba(0,0,0,0.55)' } as React.CSSProperties}
                >
                  Pintor
                </span>{' '}
                <span
                  className="inline-block text-white"
                  style={{ WebkitTextStroke: '1px rgba(0,0,0,0.55)' } as React.CSSProperties}
                >
                  Comum
                </span>
              </span>

              <span className="block mt-3">
                para{' '}
                <span
                  className="inline-block text-white"
                  style={{
                    WebkitTextStroke: '1px rgba(0,0,0,0.55)',
                    textShadow:
                      '0 6px 30px rgba(59,130,246,0.22), 0 1px 0 rgba(59,130,246,0.15)',
                  } as React.CSSProperties}
                >
                  Pintor Empresário
                </span>
              </span>
            </motion.h1>
          </div>

          {/* SUBTÍTULO */}
          <motion.p variants={fadeUp} className="max-w-2xl text-md sm:text-lg text-gray-200">
            Aprenda o método que mantém sua agenda cheia mês após mês e deixe para trás a incerteza de quando fechará o próximo serviço.
          </motion.p>

          {/* LISTA */}
          <motion.ul variants={fadeUp} className="w-full mt-4 grid gap-3 max-w-2xl">

            <motion.li variants={fadeUp} className="flex items-start gap-3 text-left">
              <HiCheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
              <span className="text-white/90">Estratégias práticas para lotar a agenda de forma previsível</span>
            </motion.li>

            <motion.li variants={fadeUp} className="flex items-start gap-3 text-left">
              <HiCheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
              <span className="text-white/90">Técnicas para fechar orçamentos sem ouvir “eu te aviso”</span>
            </motion.li>

            <motion.li variants={fadeUp} className="flex items-start gap-3 text-left">
              <HiCheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
              <span className="text-white/90">Método para se destacar e ser reconhecido como profissional de alto valor</span>
            </motion.li>

          </motion.ul>

        </motion.div>
        {/* ---- COLUNA DIREITA (IMAGEM + GLOW) ---- */}
        <div className="relative flex justify-center items-center w-full mt-10">

          {/* Glow Vermelho (lado esquerdo) */}
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-72 h-72 md:w-150 md:h-150 bg-red-500/40 blur-[120px] rounded-full pointer-events-none" />

          {/* Glow Verde (lado direito) */}
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-72 h-72 md:w-150 md:h-150 bg-green-500/40 blur-[120px] rounded-full pointer-events-none" />

          {/* Imagem */}
          <img
            src="/hero.png"
            alt="Pintor Profissional"
            className="relative z-10 w-full max-w-sm md:max-w-3xl rounded-2xl"
          />
        </div>
        {/* CTA – seção de chamada para ação */}
        <motion.div
          variants={fadeUp}
          className="w-full mt-10 flex justify-center"
        >
          <a
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
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-center text-gray-300 text-sm mt-3"
        >
          Já passei pelas mesmas dores que você!
        </motion.p>
      </div>
    </section>
  )
}
