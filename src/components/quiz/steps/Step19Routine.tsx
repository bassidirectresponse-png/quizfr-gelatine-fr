import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const items = [
  { label: "Bureau", icon: "🏢" },
  { label: "Télétravail", icon: "🏠" },
  { label: "Famille", icon: "👨‍👩‍👧" },
  { label: "Études", icon: "📚" },
];

const Step19Routine = () => {
  const { state, set, goNext } = useQuiz();
  const toggle = (r: string) => {
    const c = state.routine;
    set("routine", c.includes(r) ? c.filter(x => x !== r) : [...c, r]);
  };
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Votre routine quotidienne?</h2>
        <div className="space-y-3">
          {items.map(r => (
            <OptionCard key={r.label} label={r.label} icon={r.icon} selected={state.routine.includes(r.label)} onClick={() => toggle(r.label)} />
          ))}
        </div>
        {state.routine.length > 0 && <QuizButton onClick={goNext}>Continuer</QuizButton>}
      </div>
    </QuizLayout>
  );
};

export default Step19Routine;
