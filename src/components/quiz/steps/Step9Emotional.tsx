import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import { useQuiz } from "@/contexts/QuizContext";

const options = [
  { label: "Estime de soi", icon: "💜" },
  { label: "Santé", icon: "❤️" },
  { label: "Relations", icon: "👥" },
  { label: "Travail", icon: "💼" },
];

const Step9Emotional = () => {
  const { set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Comment le poids affecte-t-il votre vie?</h2>
        <div className="space-y-3">
          {options.map(o => (
            <OptionCard key={o.label} label={o.label} icon={o.icon} onClick={() => { set("emotionalImpact", o.label); goNext(); }} />
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step9Emotional;
