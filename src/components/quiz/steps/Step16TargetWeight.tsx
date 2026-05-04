import QuizLayout from "@/components/quiz/QuizLayout";
import StepperInput from "@/components/quiz/StepperInput";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const Step16TargetWeight = () => {
  const { state, set, goNext, weightDiff } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center text-foreground">Quel est votre poids idéal?</h2>
        <StepperInput value={state.targetWeight} onChange={v => set("targetWeight", v)} min={40} max={state.currentWeight} unit="kg" />
        {weightDiff > 0 && (
          <div className="text-center">
            <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm">
              Objectif: perdre {weightDiff}kg 🎯
            </span>
          </div>
        )}
        <QuizButton onClick={goNext}>Continuer</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step16TargetWeight;
