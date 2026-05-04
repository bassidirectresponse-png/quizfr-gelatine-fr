import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const items = [
  { label: "Énergie", icon: "⚡" },
  { label: "Vêtements", icon: "👗" },
  { label: "Confiance", icon: "💪" },
  { label: "Santé", icon: "❤️" },
  { label: "Légèreté", icon: "🪶" },
  { label: "Compliments", icon: "🌟" },
];

const Step12Aspirations = () => {
  const { state, set, goNext } = useQuiz();
  const toggle = (a: string) => {
    const c = state.aspirations;
    set("aspirations", c.includes(a) ? c.filter(x => x !== a) : [...c, a]);
  };
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Que voulez-vous conquérir?</h2>
        <div className="grid grid-cols-2 gap-3">
          {items.map(a => (
            <OptionCard key={a.label} label={a.label} icon={a.icon} selected={state.aspirations.includes(a.label)} onClick={() => toggle(a.label)} />
          ))}
        </div>
        {state.aspirations.length > 0 && <QuizButton onClick={goNext}>Continuer</QuizButton>}
      </div>
    </QuizLayout>
  );
};

export default Step12Aspirations;
