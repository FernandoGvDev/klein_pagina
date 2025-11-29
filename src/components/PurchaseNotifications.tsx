import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

type Compra = {
  nome: string;
  minutos: number;
  metodo: string;
};

const comprasFalsas: Compra[] = [
  { nome: "Carlos Andrade", minutos: 12, metodo: "Cartão de crédito" },
  { nome: "João Pereira", minutos: 7, metodo: "Pix" },
  { nome: "Mariana Lima", minutos: 3, metodo: "Cartão de crédito" },
  { nome: "Roberto Souza", minutos: 1, metodo: "Pix" },
];

export default function PurchaseNotifications() {
  const [compraAtual, setCompraAtual] = useState<Compra | null>(null);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const compra =
        comprasFalsas[Math.floor(Math.random() * comprasFalsas.length)];

      setCompraAtual(compra);

      setTimeout(() => {
        setCompraAtual(null);
      }, 5000);
    }, 9000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 w-[260px] sm:w-[300px]">
      <AnimatePresence mode="wait">
        {compraAtual && (
          <motion.div
            key={compraAtual.nome + compraAtual.minutos}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="
              bg-white text-black p-4 rounded-xl shadow-xl
              flex items-start gap-3 border border-neutral-200
            "
          >
            <CheckCircle className="text-green-500 w-7 h-7 shrink-0" />

            <div className="flex flex-col">
              <span className="font-bold text-sm">
                {compraAtual.nome}
              </span>

              <span className="text-xs text-neutral-600">
                Há {compraAtual.minutos} minutos
              </span>

              <span className="text-[11px] text-neutral-700 mt-1 font-medium">
                Comprou no {compraAtual.metodo}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
