import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const items = [
  { label: "Temps", icon: "⏰" },
  { label: "Autocontrôle", icon: "🧠" },
  { label: "Finances", icon: "💰" },
  { label: "Constance", icon: "📉" },
];

const Step11Barriers = () => {
  const { state, set, goNext } = useQuiz();
  const toggle = (b: string) => {
    const c = state.barriers;
    set("barriers", c.includes(b) ? c.filter(x => x !== b) : [...c, b]);
  };
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Qu'est-ce qui vous empêche de perdre du poids?</h2>
        <div className="space-y-3">
          {items.map(b => (
            <OptionCard key={b.label} label={b.label} icon={b.icon} selected={state.barriers.includes(b.label)} onClick={() => toggle(b.label)} />
          ))}
        </div>
        {state.barriers.length > 0 && <QuizButton onClick={goNext}>Continuer</QuizButton>}
      </div>
    </QuizLayout>
  );
};

export default Step11Barriers;
