import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import { ArrowRight, CheckSquare } from "lucide-react";
import confirmGelatin from "@/assets/confirm-gelatin.png";
import confirmWoman from "@/assets/confirm-woman.png";

const Step17Confirmation = () => {
  const { state, goNext, weightDiff } = useQuiz();

  return (
    <QuizLayout>
      <div className="space-y-6">
        {/* Illustration: gelatin → arrow → woman + checkmarks */}
        <div className="flex items-center justify-center gap-2">
          <img src={confirmGelatin} alt="Gélatine" className="w-28 h-28 object-contain" loading="lazy" />
          <div className="flex flex-col items-center gap-1">
            <ArrowRight className="w-10 h-10 text-primary" />
          </div>
          <div className="flex items-start gap-1">
            <div className="flex flex-col gap-1 pt-2">
              {[1, 2, 3, 4].map(i => (
                <CheckSquare key={i} className="w-4 h-4 text-green-500" />
              ))}
            </div>
            <img src={confirmWoman} alt="Résultat" className="w-28 h-36 object-contain" loading="lazy" />
          </div>
        </div>

        {/* Card */}
        <div className="bg-card rounded-[22px] border border-border p-6 text-center shadow-[var(--shadow-card)] space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            C'est un excellent objectif, <span className="text-primary">{state.userName || "vous"}</span>! 💜
          </h2>
          <p className="text-sm text-muted-foreground">
            Objectif: {state.currentWeight}kg → {state.targetWeight}kg ({weightDiff}kg)
          </p>
          <p className="text-sm text-muted-foreground">
            Maintenant, nous allons ajuster les prochaines étapes pour que vous puissiez voir la différence <span className="text-primary font-semibold">dès les premiers jours.</span>
          </p>
        </div>

        <QuizButton onClick={goNext}>Ok, Allons-y! 🚀</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step17Confirmation;
