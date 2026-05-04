import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";

const timelineSteps = [
  { time: "☀️ Matin", desc: "Préparez la gélatine avec de l'eau tiède." },
  { time: "🌤️ Jour", desc: "Maintenez une alimentation équilibrée." },
  { time: "🌙 Nuit", desc: "Le corps brûle les graisses pendant le sommeil." },
];

const Step24Instructions = () => {
  const { goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Mode d'Emploi</h2>

        <div className="space-y-3">
          {["Achetez les ingrédients", "Suivez la recette exclusive", "Consommez quotidiennement"].map((s, i) => (
            <div key={i} className="flex items-center gap-3 bg-card rounded-[22px] p-4 shadow-[var(--shadow-card)] border border-border">
              <span className="w-8 h-8 rounded-full quiz-gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">{i + 1}</span>
              <span className="font-medium text-foreground">{s}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {timelineSteps.map((t, i) => (
            <div key={i} className="bg-card rounded-[22px] p-4 shadow-[var(--shadow-card)] border border-border">
              <span className="font-bold text-foreground">{t.time}</span>
              <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
            </div>
          ))}
        </div>

        <img src="https://i.imgur.com/Rt9suKW.png" alt="Instructions" className="w-full rounded-[22px] shadow-[var(--shadow-card)]" loading="lazy" />

        <QuizButton onClick={goNext}>Continuer</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step24Instructions;
