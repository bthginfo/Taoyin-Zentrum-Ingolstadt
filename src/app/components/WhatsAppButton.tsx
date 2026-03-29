import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/4915115539416"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
    >
      <img
        src="https://cdn.prod.website-files.com/6890d61524a7dba397203fde/689c835a8e0044c154a36077_WhatsApp.svg.webp"
        alt="WhatsApp"
        className="w-14 h-14 rounded-full"
        loading="lazy"
      />
    </motion.a>
  );
}
