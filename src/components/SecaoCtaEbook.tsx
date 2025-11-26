import { motion } from "framer-motion";

export default function SecaoCtaEbook() {
return ( <section className="w-full py-24 m-2 bg-blue-900 text-white"> <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl font-bold leading-tight"
    >
      Oferta do Ebook “De Pintor a Empresário”
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="text-lg text-gray-100 leading-relaxed"
    >
      Acesso imediato ao conteúdo passo a passo para transformar seu negócio de pintura. Ideal para quem quer profissionalizar, cobrar melhor e lotar a agenda com previsibilidade.
    </motion.p>

    <ul className="text-left space-y-2 text-gray-200">
      <li>✅ Conteúdo criado por pintor experiente e gestor de serviços</li>
      <li>✅ Estratégias testadas para lotar sua agenda rapidamente</li>
    </ul>

    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
      <span className="text-gray-300 line-through text-lg sm:text-xl">R$97</span>
      <span className="text-3xl sm:text-4xl font-extrabold text-white">R$47</span>
      <span className="text-green-400 font-semibold">Economize R$50 agora!</span>
    </div>

    <motion.a
      href="#pagamento"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl transition-all"
    >
      Quero transformar minha agenda agora
    </motion.a>

    <p className="mt-4 text-gray-200 text-sm">
      Promoção exclusiva por tempo limitado — garanta antes que acabe!
    </p>
  </div>
</section>
);
}
