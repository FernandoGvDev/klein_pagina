// src/components/Offer.tsx
import { motion } from "framer-motion";
import {
  Timer,
  UserCheck,
  Star,
  Landmark,
  CreditCard,
  ShieldCheck,
  Zap,
} from "lucide-react";
import CTAButton from "./CTA";

export const Offer = () => {
  return (
    <section
      id="oferta"
      className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-blue-300 to-blue-950 relative overflow-hidden pt-20 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(/pintor.webp)` }}
    >
      {/* Glow */}
      <div className="absolute w-full h-full bg-linear-to-b from-transparent to-black pointer-events-none" />



      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-lg max-w-3xl w-full relative z-10 mb-20"
      >
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Oferta do Ebook “Lote sua Agenda”
        </h2>

        {/* SUBTÍTULO */}
        <p className="text-white mt-4 text-lg leading-relaxed">
          Transforme seu negócio de pintura com estratégias práticas e validadas.
        </p>

        {/* LISTA DE BENEFÍCIOS */}
        <div className="mt-6 space-y-4">

          <div className="flex items-center gap-2">
            <Timer className="w-6 h-6 text-emerald-400" />
            <span className="text-neutral-300 font-semibold">
              Preço especial por tempo limitado
            </span>
          </div>

          <div className="flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-emerald-400" />
            <span className="text-neutral-300 font-semibold">
              Conteúdo criado por pintor experiente
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-emerald-400" />
            <span className="text-neutral-300 font-semibold">
              Estratégias reais para lotar sua agenda
            </span>
          </div>
        </div>

        {/* PREÇOS */}
        <div className="mt-8 flex items-baseline gap-4">
          <span className="text-lg line-through text-red-400">R$97</span>

          <span className="text-3xl md:text-6xl font-extrabold text-emerald-400">
            R$47
          </span>

          <span className="text-sm text-neutral-300 font-semibold">
            Economize R$50 agora!
          </span>
        </div>

        {/* CTA */}
        <div className="mt-8 inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-4 rounded-lg text-lg md:text-xl shadow-lg shadow-emerald-500/30 transition-transform transform hover:scale-105">
          <CTAButton text="Quero transformar minha agenda agora" />
        </div>

        {/* GRID DE GARANTIAS E PAGAMENTO */}
        <div className="grid grid-cols-2 gap-1 mt-10 text-neutral-300 text-sm font-medium">

          <div className="flex items-center gap-2">
            <Landmark className="text-white w-6 h-6" />
            Pix
          </div>

          <div className="flex items-center gap-2">
            <CreditCard className="text-white w-6 h-6" />
            Cartão de crédito ou débito
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="text-white w-6 h-6" />
            Compra 100% segura
          </div>

          <div className="flex items-center gap-2">
            <Zap className="text-white w-6 h-6" />
            Acesso imediato
          </div>

        </div>
      </motion.div>
    </section>
  );
};
