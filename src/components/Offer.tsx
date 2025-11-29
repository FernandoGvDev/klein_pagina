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

export const Offer = () => {
  const link = "https://pay.kiwify.com.br/1lZmYlB";

  return (
    <section
      id="oferta"
      className="
        min-h-screen flex items-center justify-center 
        px-4 sm:px-6 lg:px-12 
        bg-linear-to-b from-blue-300 to-blue-950
        relative overflow-hidden pt-16 sm:pt-20
        bg-no-repeat bg-cover bg-center
      "
      style={{ backgroundImage: `url(/pintor.webp)` }}
    >
      <div className="absolute w-full h-full bg-linear-to-b from-transparent to-black pointer-events-none"></div>

      {/* CARD CENTRALIZADO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          bg-black/90 backdrop-blur-sm
          rounded-xl p-5 sm:p-8 shadow-lg 
          w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl 
          relative z-10 mb-10 sm:mb-20
          flex flex-col items-center text-center
        "
      >
        {/* TÍTULO */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          Oferta do Ebook “Lote sua Agenda”
        </h2>

        {/* SUBTÍTULO */}
        <p className="text-white mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed max-w-xl">
          Transforme seu negócio de pintura com estratégias práticas e validadas.
        </p>

        {/* LISTA */}
        <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
          {[
            { icon: Timer, text: "Preço especial por tempo limitado" },
            { icon: UserCheck, text: "Conteúdo criado por pintor experiente" },
            { icon: Star, text: "Estratégias reais para lotar sua agenda" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2"
            >
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              <span className="text-neutral-300 text-sm sm:text-base font-semibold">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* PREÇOS */}
        <div className="my-6 sm:my-8 flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-base sm:text-lg line-through text-red-400">
            R$260
          </span>

          <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-emerald-400">
            R$47
          </span>

          <span className="text-xs sm:text-sm text-neutral-300 font-semibold">
            Economize R$215 agora!
          </span>
        </div>

        {/* CTA */}
        <motion.a
          id="botaoLead"
          href={link}
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-full sm:w-auto mx-auto"
        >

          <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 opacity-70 blur transition duration-300 group-hover:opacity-100"></div>

          <span
            className="
          relative flex flex-col items-center justify-center
          rounded-lg bg-black px-6 sm:px-7 py-3 
          leading-none w-full
        "
          >
            <span className="md:text-2xl font-bold text-cyan-500 mb-1">
              Transforme sua Agenda AGORA
            </span>
            <span className="text-[9px] sm:text-[10px] font-light tracking-wider text-cyan-300/80">
              Clique AQUI
            </span>
          </span>
        </motion.a>


        {/* GRID INFERIOR CENTRALIZADO */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 
            gap-3 sm:gap-4 mt-8 
            text-neutral-300 text-sm font-medium 
            w-full
          "
        >
          <div className="flex justify-center items-center gap-2">
            <Landmark className="text-white w-5 h-5" /> Pix
          </div>

          <div className="flex justify-center items-center gap-2">
            <CreditCard className="text-white w-5 h-5" />
            Cartão de crédito ou débito
          </div>

          <div className="flex justify-center items-center gap-2">
            <ShieldCheck className="text-white w-5 h-5" />
            Compra 100% segura
          </div>

          <div className="flex justify-center items-center gap-2">
            <Zap className="text-white w-5 h-5" />
            Acesso imediato
          </div>
        </div>
      </motion.div>
    </section>
  );
};
