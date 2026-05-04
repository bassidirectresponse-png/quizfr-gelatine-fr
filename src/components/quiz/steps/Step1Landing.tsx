import QuizLayout from "@/components/quiz/QuizLayout";
import { useQuiz } from "@/contexts/QuizContext";

const Step1Landing = () => {
  const { goNext } = useQuiz();
  return (
    <QuizLayout hideProgress>
      <div className="text-center space-y-5">

        {/* Hero image */}
        <img
          src="https://i.imgur.com/DIFRwx5.png"
          alt="Gélatine Mounjaro"
          className="w-full rounded-[22px] shadow-[var(--shadow-card)]"
        />

        {/* Description */}
        <p className="text-sm text-foreground leading-relaxed px-2">
          Découvrez comment activer votre métabolisme et perdre jusqu'à{" "}
          <strong>12kg en 30 jours</strong> avec la{" "}
          <strong>Gélatine Mounjaro!</strong>
        </p>

        {/* CTA Button */}
        <button
          onClick={goNext}
          className="w-full py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-base transition-all shadow-lg shadow-green-500/30 active:scale-[0.97] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        >
          Je veux savoir si ça fonctionne pour moi! 🔥
        </button>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>✓ 127.000+ femmes</span>
          <span>•</span>
          <span>✓ 100% Naturel</span>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step1Landing;
