import CTAButton from "./CTA";
import { Zap } from "lucide-react";

export const FAQ = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold">Perguntas frequentes</h2>
    <div className="mt-8 space-y-6">
      <div>
        <h4 className="font-semibold">Para quem é o ebook?</h4>
        <p className="text-neutral-400">
          Pintores autônomos e pequenos times que querem sair do improviso e operar como empresa rentável.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">Quanto tempo para ver resultados?</h4>
        <p className="text-neutral-400">
          Depende da execução. Muitos veem novos pedidos nas primeiras semanas aplicando campanhas simples e o script de orçamento.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">Tem suporte?</h4>
        <p className="text-neutral-400">
          Você recebe materiais complementares por email e atualizações do conteúdo promocional durante o período de lançamento.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">Como recebo o ebook?</h4>
        <p className="text-neutral-400">
          Após a compra, o acesso é enviado por email imediatamente com instruções de download.
        </p>
      </div>
      <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition-colors duration-300 text-sm md:text-base">
            <Zap className="w-5 h-5" />
            <CTAButton text="Quero Garantir Meu Ebook"/>
            </div>
    </div>
  </section>
);
