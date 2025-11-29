// components/CompraNotification.tsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const dados = [
  { nome: "Lucas Ferreira", tempo: "Há 3 minutos", metodo: "Cartão de crédito" },
  { nome: "Ana Paula", tempo: "Há 12 minutos", metodo: "Pix" },
  { nome: "João Santos", tempo: "Há 20 minutos", metodo: "Cartão de crédito" },
  { nome: "Mariana Silva", tempo: "Há 32 minutos", metodo: "Pix" },
  { nome: "Rafael Almeida", tempo: "Há 9 minutos", metodo: "Pix" },
{ nome: "Pedro Henrique", tempo: "Há 14 minutos", metodo: "Cartão de crédito" },
{ nome: "Beatriz Souza", tempo: "Há 22 minutos", metodo: "Cartão de débito" },
{ nome: "Gabriel Lima", tempo: "Há 33 minutos", metodo: "Pix" },
{ nome: "Juliana Rocha", tempo: "Há 18 minutos", metodo: "Cartão de crédito" },
{ nome: "Fernando Castro", tempo: "Há 27 minutos", metodo: "Pix" },
{ nome: "Camila Ribeiro", tempo: "Há 31 minutos", metodo: "Cartão de débito" },
{ nome: "Eduardo Martins", tempo: "Há 15 minutos", metodo: "Cartão de crédito" },
{ nome: "Patrícia Nunes", tempo: "Há 24 minutos", metodo: "Pix" },
{ nome: "Ricardo Azevedo", tempo: "Há 36 minutos", metodo: "Cartão de crédito" },
{ nome: "Larissa Gomes", tempo: "Há 12 minutos", metodo: "Cartão de débito" },
{ nome: "Mateus Barros", tempo: "Há 28 minutos", metodo: "Pix" },
{ nome: "Carolina Fernandes", tempo: "Há 17 minutos", metodo: "Cartão de crédito" },
{ nome: "Sérgio Batista", tempo: "Há 21 minutos", metodo: "Pix" },
{ nome: "Viviane Duarte", tempo: "Há 32 minutos", metodo: "Cartão de crédito" },
{ nome: "Tiago Moreira", tempo: "Há 29 minutos", metodo: "Cartão de débito" },
{ nome: "Natalia Cardoso", tempo: "Há 11 minutos", metodo: "Pix" },
{ nome: "Fábio Teixeira", tempo: "Há 25 minutos", metodo: "Cartão de crédito" },
{ nome: "Aline Correia", tempo: "Há 30 minutos", metodo: "Pix" },
{ nome: "Douglas Sales", tempo: "Há 37 minutos", metodo: "Cartão de débito" },
{ nome: "Helena Pires", tempo: "Há 19 minutos", metodo: "Pix" },
{ nome: "André Luiz", tempo: "Há 35 minutos", metodo: "Cartão de crédito" },
{ nome: "Samantha Torres", tempo: "Há 16 minutos", metodo: "Pix" },
{ nome: "Marcelo Vieira", tempo: "Há 23 minutos", metodo: "Cartão de débito" },
{ nome: "Isabela Tavares", tempo: "Há 10 minutos", metodo: "Cartão de crédito" },
{ nome: "Henrique Prado", tempo: "Há 26 minutos", metodo: "Pix" },
{ nome: "Talita Moraes", tempo: "Há 38 minutos", metodo: "Cartão de crédito" },
{ nome: "Otávio Ribeiro", tempo: "Há 20 minutos", metodo: "Cartão de débito" },
{ nome: "Renata Dias", tempo: "Há 34 minutos", metodo: "Pix" },
{ nome: "Alexandre Cunha", tempo: "Há 13 minutos", metodo: "Cartão de crédito" },
{ nome: "Sandra Meireles", tempo: "Há 39 minutos", metodo: "Pix" },
{ nome: "Daniel Araújo", tempo: "Há 18 minutos", metodo: "Cartão de débito" },
{ nome: "Bruna Matos", tempo: "Há 27 minutos", metodo: "Pix" },
{ nome: "Leandro Farias", tempo: "Há 22 minutos", metodo: "Cartão de crédito" },
{ nome: "Letícia Mendonça", tempo: "Há 30 minutos", metodo: "Pix" },
{ nome: "César Porto", tempo: "Há 14 minutos", metodo: "Cartão de débito" },
{ nome: "Michele Rezende", tempo: "Há 21 minutos", metodo: "Pix" },
{ nome: "Diego Pacheco", tempo: "Há 33 minutos", metodo: "Cartão de crédito" },
{ nome: "Raquel Antunes", tempo: "Há 17 minutos", metodo: "Cartão de débito" },
{ nome: "Vitor Amaral", tempo: "Há 36 minutos", metodo: "Pix" },
{ nome: "Jéssica Moraes", tempo: "Há 11 minutos", metodo: "Cartão de crédito" },
{ nome: "Rodrigo Peixoto", tempo: "Há 24 minutos", metodo: "Cartão de débito" },
{ nome: "Amanda Barcellos", tempo: "Há 32 minutos", metodo: "Pix" },
{ nome: "Gustavo Silveira", tempo: "Há 28 minutos", metodo: "Cartão de crédito" },
{ nome: "Elaine Couto", tempo: "Há 9 minutos", metodo: "Pix" },
{ nome: "Murilo Braga", tempo: "Há 40 minutos", metodo: "Cartão de débito" },
{ nome: "Priscila Moura", tempo: "Há 19 minutos", metodo: "Cartão de crédito" },
{ nome: "Bruno Cavalcante", tempo: "Há 23 minutos", metodo: "Pix" },
{ nome: "Débora Alencar", tempo: "Há 37 minutos", metodo: "Cartão de crédito" },
{ nome: "Igor Santana", tempo: "Há 29 minutos", metodo: "Pix" },
{ nome: "Carla Menezes", tempo: "Há 12 minutos", metodo: "Cartão de débito" }
];

// 🔥 Ajuste fácil do timing
const TEMPO_VISIVEL = 4000;   // card aparece por 4s
const INTERVALO = 15000;      // intervalo entre notificações (15s)

export const PurchaseNotifications = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dados.length);
      setShow(true);

      // Som
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }

      // Some automaticamente
      setTimeout(() => setShow(false), TEMPO_VISIVEL);
    }, INTERVALO);

    return () => clearInterval(interval);
  }, []);

  const item = dados[index];

  return (
    <>
      <audio ref={audioRef} src="/notify.mp3" preload="auto" />

      <div className="fixed bottom-6 left-6 z-50">
        <AnimatePresence mode="popLayout">
          {show && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="bg-white shadow-xl border border-gray-200 rounded-xl p-4 flex items-start gap-3 w-72"
            >
              <CheckCircle className="text-green-600 h-6 w-6 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">{item.nome}</span>
                <span className="text-sm text-gray-700">{item.tempo}</span>
                <span className="text-xs text-gray-500 mt-1">
                  Comprou com {item.metodo}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
