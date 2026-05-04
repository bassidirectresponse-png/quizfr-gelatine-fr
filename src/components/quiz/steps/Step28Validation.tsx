import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const Step28Validation = () => {
  const { goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="text-center space-y-6">
        <div className="text-6xl">🎯</div>
        <h2 className="text-2xl font-bold text-foreground">Perdre 8 à 11kg en quelques semaines?</h2>
        <p className="text-muted-foreground">C'est possible avec notre protocole scientifique.</p>
        <QuizButton variant="success" onClick={goNext}>Oui, je veux commencer!</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step28Validation;
