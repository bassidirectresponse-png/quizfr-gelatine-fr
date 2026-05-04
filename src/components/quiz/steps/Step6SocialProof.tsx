import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const Step6SocialProof = () => {
  const { goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-6 text-center">
        <h2 className="text-2xl font-bold text-foreground">Les célébrités l'utilisent déjà !</h2>
        <div className="rounded-[22px] overflow-hidden shadow-[var(--shadow-card)] border border-border">
          <img src="https://i.imgur.com/Yy5t4CY.png" alt="G1 Portal" className="w-full" loading="lazy" />
        </div>
        <QuizButton onClick={goNext}>Continuer</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step6SocialProof;
