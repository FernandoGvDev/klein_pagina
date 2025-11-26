import { motion } from "framer-motion";

export default function SecaoTopicosEbook() {
const topicos = [
{ titulo: "Como Empreender", img: "/ebook-aula4.png", delay: 0 },
{ titulo: "Como Lotar a Agenda", img: "/ebook-aula1.png", delay: 0.2, destaque: true },
{ titulo: "Como Passar Orçamento", img: "/ebook-aula2.png", delay: 0.4 },
];

return ( <section className="w-full py-24 bg-gray-900 text-white"> <div className="max-w-6xl mx-auto px-6 text-center">
{/* Título */}
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
className="text-3xl md:text-4xl font-bold mb-16"
>
Principais Aprendizados do eBook
</motion.h2>
    {/* Tópicos lado a lado */}
    <div className="flex flex-row justify-center items-end gap-6 sm:gap-8 md:gap-12">
      {topicos.map((topico, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: topico.delay, duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <img
            src={topico.img}
            alt={topico.titulo}
            className={`rounded-xl shadow-xl transition-transform duration-300 ${
              topico.destaque
                ? "w-48 sm:w-56 md:w-60 transform sm:-translate-y-2"
                : "w-36 sm:w-44 md:w-44"
            }`}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>
);
}
