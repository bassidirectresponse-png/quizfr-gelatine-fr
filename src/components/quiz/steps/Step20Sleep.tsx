import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import { useQuiz } from "@/contexts/QuizContext";

const options = [
  { label: "Moins de 5h", icon: "😴" },
  { label: "5-7h", icon: "🌙" },
  { label: "7-9h", icon: "😊" },
  { label: "Plus de 9h", icon: "💤" },
];

const Step20Sleep = () => {
  const { set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Sommeil par nuit?</h2>
        <div className="space-y-3">
          {options.map(o => (
            <OptionCard key={o.label} label={o.label} icon={o.icon} onClick={() => { set("sleep", o.label); goNext(); }} />
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step20Sleep;
