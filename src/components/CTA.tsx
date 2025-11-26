import { motion } from "framer-motion";

interface CTAButtonProps {
  text?: string;
  link?: string;
}

export default function CTAButton({
  text = "Quero Garantir Meu Ebook",
  link = "https://pay.kiwify.com.br/1lZmYlB",
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

   if (typeof (window as any).fbq === "function") {
  (window as any).fbq("trackCustom", "Lead"); 
}

    setTimeout(() => {
      window.open(link, "_blank");
    }, 300); 
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-event="Lead" // ← Marca que esse botão é Lead
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );
}
