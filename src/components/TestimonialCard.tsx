import { motion } from "framer-motion";
import { StarIcon } from '@heroicons/react/24/solid';


interface Testimonial {
  name: string;
  city: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rafael",
    city: "Porto Alegre",
    text: "Em 3 semanas fechei 6 serviços novos. O ebook me deu confiança para cobrar melhor.",
  },
  {
    name: "Camila",
    city: "Canoas",
    text: "Eu tinha medo de anunciar. Agora tenho leads toda semana e parei de correr atrás.",
  },
  {
    name: "Mário",
    city: "Caxias do Sul",
    text: "A parte de orçamento foi o ponto de virada. Virei referência no meu bairro.",
  },
  {
    name: "Fernanda",
    city: "Gravataí",
    text: "Aprendi a organizar minha agenda e negociar preços justos. Minha renda aumentou 40%.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative py-20 px-6 bg-linear-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-200 mb-4"
        >
          Resultados Reais de Pintores
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-lg"
        >
          Profissionais comuns transformando suas agendas e faturamento
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Estrelas preenchidas */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>

            {/* Depoimento */}
            <p className="italic text-gray-700 text-base mb-4">"{t.text}"</p>

            {/* Nome e cidade */}
            <div>
              <span className="font-bold text-gray-900">{t.name}</span>
              <span className="text-sm text-gray-500 ml-2">{t.city}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
