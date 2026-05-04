import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import { useQuiz } from "@/contexts/QuizContext";

const options = [
  { label: "Presque rien", icon: "🌵" },
  { label: "Un peu", icon: "💧" },
  { label: "Normal", icon: "🥤" },
  { label: "Beaucoup", icon: "🌊" },
];

const Step21Water = () => {
  const { set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Consommation d'eau?</h2>
        <div className="space-y-3">
          {options.map(o => (
            <OptionCard key={o.label} label={o.label} icon={o.icon} onClick={() => { set("water", o.label); goNext(); }} />
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step21Water;
