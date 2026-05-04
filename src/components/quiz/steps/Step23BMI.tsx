import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import { CheckCircle, XCircle, Star } from "lucide-react";

const getBmiCategory = (bmi: number) => {
  if (bmi < 18.5) return "Insuffisance pondérale";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Surpoids";
  if (bmi < 35) return "Obésité";
  return "Obésité sévère";
};

const benefits = [
  "Recette 100% Naturelle",
  "Active le GLP-1 de votre corps",
  "Brûlage de graisse localisée",
  "Régule votre métabolisme",
  "Légèreté et corps dégonflé",
  "Moins d'envies de sucre",
  "Facile à suivre",
];

const Step23BMI = () => {
  const { state, goNext } = useQuiz();
  const bmi = (state.currentWeight / ((state.height / 100) ** 2)).toFixed(1);
  const category = getBmiCategory(parseFloat(bmi));

  return (
    <QuizLayout>
      <div className="space-y-5">
        <h2 className="text-xl font-bold text-center text-foreground">
          Résultat de votre <span className="text-primary">analyse</span>, <span className="text-primary">{state.userName || "vous"}</span>
        </h2>

        {/* BMI Card */}
        <div className="bg-card rounded-[22px] p-5 shadow-[var(--shadow-card)] border border-border text-center space-y-3">
          <div className="text-5xl font-extrabold text-primary">{bmi}</div>
          <p className="text-sm text-muted-foreground">
            Votre IMC: <span className="text-primary font-semibold">{category}</span>
          </p>
          <div className="border-t border-border pt-3">
            <p className="text-xs font-semibold text-amber-500 mb-2">⚠️ Signes d'alerte identifiés:</p>
            <div className="space-y-1.5 text-left">
              {[
                "Métabolisme ralenti",
                "Risque d'accumulation de graisse viscérale",
                "Hormones de satiété déréglées",
              ].map((alert) => (
                <div key={alert} className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{alert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secret tip */}
        <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center">
          <p className="text-xs text-foreground">
            🚀 Le secret pour sécher: <strong>activer le GLP-1. La Gélatine Mounjaro</strong> est l'«interrupteur» hormonal naturel!
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-2">
          <p className="text-center text-sm font-bold text-foreground">
            Bénéfices de la <span className="text-primary">Gélatine Mounjaro</span> ✨
          </p>
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-2.5">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-foreground">{b}</span>
            </div>
          ))}
        </div>

        {/* Before/After */}
        <div className="bg-card rounded-[22px] border border-border overflow-hidden shadow-[var(--shadow-card)]">
          <img
            src="https://s.yimg.com/ny/api/res/1.2/5Oi7EGFb3oK_zRSORt.CZA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk2MTtjZj13ZWJw/https://media.zenfs.com/en-US/homerun/people_218/8e0ba76a2825093b18969eca962e8e59"
            alt="Avant après"
            className="w-full"
            loading="lazy"
          />
          <div className="p-3 text-center">
            <p className="text-sm font-bold text-foreground">"J'ai perdu 12kg en 5 semaines!"</p>
            <p className="text-xs text-muted-foreground">Marie, 32 ans - Paris</p>
            <div className="flex justify-center gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        <QuizButton onClick={goNext}>Continuer</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step23BMI;
