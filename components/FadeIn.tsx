// components/FadeIn.tsx
"use client"
import { motion } from "framer-motion";

// const FadeIn: React.FC = ({children }) => {
export default function FadeIn ({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}


