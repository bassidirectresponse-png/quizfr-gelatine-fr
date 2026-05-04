import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import { useQuiz } from "@/contexts/QuizContext";

const options = [
  { label: "5-10kg", icon: "🎯" },
  { label: "10-15kg", icon: "🔥" },
  { label: "15-20kg", icon: "💪" },
  { label: "20kg+", icon: "🚀" },
];

const Step8Objective = () => {
  const { state, set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">
          <span className="quiz-gradient-text">{state.userName}</span>, quel est votre objectif?
        </h2>
        <div className="space-y-3">
          {options.map(o => (
            <OptionCard key={o.label} label={o.label} icon={o.icon} onClick={() => { set("objective", o.label); goNext(); }} />
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step8Objective;
