"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, children }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
