import QuizLayout from "@/components/quiz/QuizLayout";
import { useQuiz } from "@/contexts/QuizContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { label: "Analyse de votre profil corporel", icon: "🔬", duration: 2000 },
  { label: "Calcul du métabolisme basal", icon: "🧬", duration: 2000 },
  { label: "Évaluation des zones cibles", icon: "🎯", duration: 1500 },
  { label: "Personnalisation de votre plan", icon: "📋", duration: 1500 },
  { label: "Préparation de votre recette", icon: "🍮", duration: 1000 },
];

const totalDuration = steps.reduce((sum, s) => sum + s.duration, 0);

const Step27Loading1 = () => {
  const { goNext, state } = useQuiz();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let elapsed = 0;
    let stepIdx = 0;

    const interval = setInterval(() => {
      elapsed += 100;
      setProgress(Math.min((elapsed / totalDuration) * 100, 100));

      let acc = 0;
      for (let i = 0; i < steps.length; i++) {
        acc += steps[i].duration;
        if (elapsed < acc) {
          if (i !== stepIdx) {
            stepIdx = i;
            setCurrentStep(i);
          }
          break;
        }
      }

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setTimeout(goNext, 400);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <QuizLayout>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            Analyse en cours, <span className="text-primary">{state.userName || "chère"}</span>...
          </h2>
          <p className="text-sm text-muted-foreground">Nous personnalisons votre expérience</p>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full quiz-gradient-bg rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-xs text-right text-muted-foreground font-medium">{Math.round(progress)}%</p>
        </div>

        {/* Steps checklist */}
        <div className="bg-card border border-border rounded-[22px] p-4 space-y-3">
          {steps.map((step, i) => {
            const isDone = i < currentStep;
            const isActive = i === currentStep;

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.2 }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 ${
                  isActive ? "bg-primary/10" : isDone ? "bg-muted/50" : ""
                }`}
              >
                <span className="text-lg flex-shrink-0">
                  {isDone ? "✅" : isActive ? (
                    <span className="inline-block animate-spin text-primary">⏳</span>
                  ) : "⬜"}
                </span>
                <span className={`text-sm font-medium ${
                  isDone ? "text-muted-foreground line-through" : isActive ? "text-foreground" : "text-muted-foreground/60"
                }`}>
                  {step.icon} {step.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <p className="text-xs text-center text-muted-foreground italic">
          ⚡ Basé sur vos réponses personnalisées
        </p>
      </div>
    </QuizLayout>
  );
};

export default Step27Loading1;
