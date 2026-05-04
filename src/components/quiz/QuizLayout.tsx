import { useQuiz } from "@/contexts/QuizContext";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface QuizLayoutProps {
  children: ReactNode;
  hideProgress?: boolean;
}

const QuizLayout = ({ children, hideProgress }: QuizLayoutProps) => {
  const { progress, state } = useQuiz();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="w-full flex flex-col items-center pt-3 pb-1">
        <img src="https://i.imgur.com/DD0hphP.png" alt="Logo" className="h-28" />
      </div>
      {!hideProgress && (
        <div className="w-full h-1 bg-muted">
          <motion.div
            className="h-full quiz-gradient-bg"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      )}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <motion.div
          key={state.currentStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full max-w-lg will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default QuizLayout;
