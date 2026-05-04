import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import zonesWoman from "@/assets/zones-woman.png";

const zones = [
  { label: "Double menton", emoji: "😊" },
  { label: "Bras", emoji: "💪" },
  { label: "Ventre", emoji: "🍊" },
  { label: "Taille", emoji: "👗" },
  { label: "Fessiers", emoji: "🍑" },
  { label: "Cuisses", emoji: "🦵" },
  { label: "Tout le corps", emoji: "✨" },
];

const Step5Zones = () => {
  const { state, set, goNext } = useQuiz();
  const toggle = (z: string) => {
    const current = state.targetZones;
    set("targetZones", current.includes(z) ? current.filter(x => x !== z) : [...current, z]);
  };
  return (
    <QuizLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-foreground">
          Quelles zones voulez-vous <span className="text-primary">perdre du poids?</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm">Touchez les zones souhaitées.</p>
        <div className="flex gap-4">
          <div className="w-[120px] sm:w-[180px] flex-shrink-0 relative">
            <img src={zonesWoman} alt="Zones du corps" className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl" loading="lazy" />
          </div>
          <div className="flex-1 space-y-2">
            {zones.map(z => (
              <OptionCard
                key={z.label}
                label={`${z.emoji}  ${z.label}`}
                selected={state.targetZones.includes(z.label)}
                onClick={() => toggle(z.label)}
              />
            ))}
          </div>
        </div>
        {state.targetZones.length > 0 && <QuizButton onClick={goNext}>Continuer</QuizButton>}
      </div>
    </QuizLayout>
  );
};

export default Step5Zones;
