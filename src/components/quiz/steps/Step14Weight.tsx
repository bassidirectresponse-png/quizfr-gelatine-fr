import QuizLayout from "@/components/quiz/QuizLayout";
import StepperInput from "@/components/quiz/StepperInput";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const Step14Weight = () => {
  const { state, set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center text-foreground">Quel est votre poids actuel?</h2>
        <StepperInput value={state.currentWeight} onChange={v => set("currentWeight", v)} min={45} max={150} unit="kg" />
        <QuizButton onClick={goNext}>Continuer</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step14Weight;
