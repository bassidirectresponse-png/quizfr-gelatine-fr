import { motion } from "framer-motion";
import { ReactNode } from "react";

interface QuizButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "primary" | "success";
  className?: string;
}

const QuizButton = ({ onClick, children, variant = "primary", className = "" }: QuizButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full py-4 px-6 rounded-[22px] font-bold text-lg text-primary-foreground shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] ${
      variant === "success" ? "bg-success" : "quiz-gradient-bg"
    } ${className}`}
  >
    {children}
  </motion.button>
);

export default QuizButton;
