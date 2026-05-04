import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import gelatinCubes from "@/assets/gelatin-cubes.png";

const Step2Transition = () => {
  const { goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="text-center space-y-8">
        <img src={gelatinCubes} alt="Cubos de gelatina rosa" className="w-32 h-32 mx-auto object-contain" />
        <h2 className="text-2xl font-bold text-foreground">Commençons votre voyage !</h2>
        <QuizButton onClick={goNext}>C'est parti ! 💪</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step2Transition;
