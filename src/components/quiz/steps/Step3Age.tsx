import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import { useQuiz } from "@/contexts/QuizContext";

const options = [
  { label: "18-27", icon: "🌱" },
  { label: "28-39", icon: "💪" },
  { label: "40-54", icon: "✨" },
  { label: "54+", icon: "🌟" },
];

const Step3Age = () => {
  const { set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Quel est votre âge?</h2>
        <div className="space-y-3">
          {options.map(o => (
            <OptionCard key={o.label} label={o.label} icon={o.icon} onClick={() => { set("age", o.label); goNext(); }} />
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step3Age;
