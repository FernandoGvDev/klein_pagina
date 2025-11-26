// src/components/Offer.tsx
import { motion } from "framer-motion";
import { Timer, UserCheck, Star } from "lucide-react";
import CTAButton from "./CTA";

export const Offer = () => {
  return (
    <section
      id="oferta"
      className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-blue-300 to-blue-950 relative overflow-hidden"
    >
      {/* Glow sutil atrás do card */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-lg max-w-3xl w-full relative z-10 mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Oferta do Ebook “De Pintor a Empresário”
        </h2>

        <p className="text-neutral-300 mt-4 text-lg leading-relaxed">
          Acesso imediato ao conteúdo passo a passo para transformar seu negócio de pintura. Ideal para quem quer
          profissionalizar, cobrar melhor e lotar a agenda com previsibilidade.
        </p>

        {/* Benefícios */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-emerald-400" />
            <span className="text-neutral-300 font-semibold">Preço especial por tempo limitado</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-neutral-300 font-semibold">Conteúdo criado por pintor experiente e gestor de serviços</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-400" />
            <span className="text-neutral-300 font-semibold">Estratégias testadas para lotar sua agenda rapidamente</span>
          </div>
        </div>

        {/* Preço destacado + CTA */}
        <div className="mt-8 flex flex-col items-start gap-4">
          <div className="flex items-baseline gap-4">
            <span className="text-lg line-through text-red-400">R$97</span>
            <span className="text-5xl md:text-6xl font-extrabold text-emerald-400 animate-pulse">
              R$47
            </span>
            <span className="text-sm text-neutral-300 font-semibold">
              Economize R$50 agora!
            </span>
          </div>

          <p className="text-sm text-neutral-400 font-medium">
            Promoção exclusiva por tempo limitado!
          </p>

          {/* Botão CTA */}
          <div className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-4 rounded-lg text-lg md:text-xl shadow-lg shadow-emerald-500/30 transition-transform transform hover:scale-105"
          >
            <CTAButton text="Quero transformar minha agenda agora" />
          </div>

          <p className="text-sm text-red-400 mt-2 max-w-xs font-semibold flex items-center gap-1">
            Oferta por tempo limitado — garanta antes que acabe!
          </p>
        </div>
      </motion.div>
    </section>
  );
};
