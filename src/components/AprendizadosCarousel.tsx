import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Tipagem dos itens do carrossel para poder adicionar/remover facilmente
interface Item {
  img: string;
  title: string;
  description: string;
}

interface Props {
  heroImage: string; // imagem da pessoa com o celular
  items: Item[];     // lista de aprendizados
}

const AprendizadosCarousel: FC<Props> = ({ heroImage, items }) => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">

      {/* ----------------------------- */}
      {/*           HERO IMAGE          */}
      {/* ----------------------------- */}
      <div className="w-full bg-black flex justify-center items-center py-10 md:py-20">
        <img
          src={heroImage}
          alt="Profissional mostrando o ebook"
          className="
      w-full 
      max-w-130     /* controla o tamanho da imagem no desktop */
      h-auto 
      object-contain
    "
        />
      </div>

      {/* ----------------------------- */}
      {/*       SEÇÃO DO CARROSSEL      */}
      {/* ----------------------------- */}
      <div className="w-full mx-auto px-4 pb-16">

        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
          Descubra os principais aprendizados que vão transformar seu resultado
        </h2>

        <Swiper
  modules={[Autoplay, Navigation]}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  onTouchEnd={(swiper) => {
    setTimeout(() => {
      swiper.autoplay.start();
    }, 5000);
  }}
  spaceBetween={20}
  slidesPerView={1.1}   // Mobile padrão
  centeredSlides={false}
  loop
  navigation
  breakpoints={{
    768: { slidesPerView: 3 }, // Desktop: 3 cards
  }}
  className="pb-10"
>
  {items.map((item, i) => (
    <SwiperSlide key={i}>
      <div className="bg-zinc-900 rounded-2xl p-4 shadow-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col items-center">

        {/* Imagem SEM cortar */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full max-h-60 object-contain rounded-xl mb-4 bg-black"
        />

        {/* Título */}
        <h3 className="text-xl font-semibold mb-2 text-center">
          {item.title}
        </h3>

        {/* Descrição */}
        <p className="text-sm text-zinc-300 leading-relaxed text-center">
          {item.description}
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
};

export default AprendizadosCarousel;
