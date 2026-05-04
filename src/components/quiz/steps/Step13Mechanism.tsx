import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import { CheckCircle, ArrowDown } from "lucide-react";
import mechStep1 from "@/assets/mech-step1.png";
import mechStep2 from "@/assets/mech-step2.png";
import mechStep3 from "@/assets/mech-step3.png";
import mechStep4 from "@/assets/mech-step4.png";

const timeline = [
  {
    num: 1,
    image: mechStep1,
    title: "Avant",
    desc: "Graisse accumulée et métabolisme lent",
    color: "bg-purple-500",
  },
  {
    num: 2,
    image: mechStep2,
    title: "🍮 Gélatine Mounjaro",
    desc: "Recette maison simple et puissante",
    color: "bg-pink-500",
  },
  {
    num: 3,
    image: mechStep3,
    title: "Brûlage naturel activé 🔥",
    desc: "Métabolisme accéléré sans régimes",
    color: "bg-orange-500",
  },
  {
    num: 4,
    image: mechStep4,
    title: "Corps de rêve!",
    desc: "Résultat visible en quelques semaines",
    color: "bg-green-500",
    highlight: true,
  },
];

const Step13Mechanism = () => {
  const { state, goNext } = useQuiz();

  return (
    <QuizLayout>
      <div className="space-y-5">
        <h2 className="text-2xl font-bold text-center text-foreground">
          Parfait, <span className="text-primary">{state.userName || "vous"}</span>! Voyez comment ça fonctionne 🎉
        </h2>
        <p className="text-center text-sm text-primary font-semibold">
          La Gélatine Mounjaro active la combustion naturelle des graisses
          <span className="block text-muted-foreground font-normal">avec des ingrédients maison que vous préparez en minutes.</span>
        </p>

        {/* Bullet points */}
        <div className="space-y-2">
          {["Facile à préparer", "2 fois par jour", "Recette 100% Naturelle"].map((t) => (
            <div key={t} className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{t}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-card rounded-[22px] border border-border p-5 space-y-1">
          {timeline.map((step, i) => (
            <div key={step.num}>
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-full ${step.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                  {step.highlight ? "✨" : step.num}
                </span>
                <img src={step.image} alt={step.title} className="w-12 h-12 object-contain rounded-lg" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold ${step.highlight ? "text-primary" : "text-foreground"}`}>{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
              {i < timeline.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 text-center">
          <p className="text-sm text-foreground">
            💡 <span className="font-semibold text-primary">Recette maison</span> qui active le <strong>GLP-1</strong>, la même hormone du Mounjaro, de façon <span className="text-primary font-semibold">100% naturelle!</span>
          </p>
        </div>

        <QuizButton onClick={goNext}>J'ai compris! Continuer 🚀</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step13Mechanism;
