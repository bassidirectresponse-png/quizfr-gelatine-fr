import QuizLayout from "@/components/quiz/QuizLayout";
import StepperInput from "@/components/quiz/StepperInput";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const Step15Height = () => {
  const { state, set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center text-foreground">Quelle est votre taille?</h2>
        <StepperInput value={state.height} onChange={v => set("height", v)} min={140} max={200} unit="cm" />
        <QuizButton onClick={goNext}>Continuer</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step15Height;
