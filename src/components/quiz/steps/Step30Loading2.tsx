import QuizLayout from "@/components/quiz/QuizLayout";
import { useQuiz } from "@/contexts/QuizContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const checklist = [
  "Analyse du métabolisme...",
  "Calcul du déficit calorique...",
  "Sélection des ingrédients...",
  "Terminée! ✅",
];

const Step30Loading2 = () => {
  const { goNext } = useQuiz();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => {
        if (c >= checklist.length - 1) { clearInterval(interval); return c; }
        return c + 1;
      });
    }, 2500);
    const timeout = setTimeout(goNext, 10000);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [goNext]);

  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Vérification en cours...</h2>
        <div className="space-y-3">
          {checklist.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: i <= current ? 1 : 0.3 }}
              className="flex items-center gap-3 bg-card rounded-[22px] p-4 shadow-[var(--shadow-card)] border border-border"
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                i <= current ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {i <= current ? "✓" : i + 1}
              </span>
              <span className={`font-medium ${i <= current ? "text-foreground" : "text-muted-foreground"}`}>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step30Loading2;
