import { type FC } from "react";

const SobreSecao: FC = () => {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                {/* Imagem */}
                <div className="flex justify-center">
                    <img
                        src="/person.jpeg"
                        alt="Claiton Klein"
                        loading="lazy"
                        className="w-72 md:w-3xl rounded-2xl shadow-2xl object-cover"
                    />
                </div>

                {/* Texto */}
                <div className="space-y-6">

                    {/* Título */}
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Conheça{" "}
                        <span className="relative inline-block">
                            {/* Glow apenas no nome */}
                            <span className="absolute inset-0 blur-lg bg-gray-200 opacity-40 rounded-xl"></span>

                            {/* Nome com degradê */}
                            <span className="relative bg-linear-to-r from-blue-900 to-gray-400 bg-clip-text text-transparent font-extrabold">
                                Claiton Klein
                            </span>
                        </span>
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Sou Claiton Klein, criador do método <strong className="text-blue-900">Lote Sua Agenda</strong>.
                        Depois de anos atuando no setor de Pinturas e vivenciando na prática a dificuldade de manter a agenda cheia,
                        transformei toda minha experiência em um e-book <strong className="text-blue-900">simples</strong>,
                        <strong className="text-blue-900">direto</strong> e <strong className="text-blue-900">comprovado</strong> na vida real.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Meu foco sempre foi ajudar profissionais a atrair <strong className="text-blue-900">clientes de verdade</strong>,
                        conquistar <strong className="text-blue-900">obras maiores</strong> e ter um fluxo constante de oportunidades —
                        sem complicação e sem desperdício de tempo.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        O <strong className="text-blue-900">Lote Sua Agenda</strong> reúne exatamente o que funciona,
                        para quem deseja <strong className="text-blue-900">crescer de forma sólida</strong> e se posicionar como referência.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Agora chegou o momento de dar o próximo passo e realmente <strong className="text-blue-900">lotar sua agenda</strong>.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default SobreSecao;
