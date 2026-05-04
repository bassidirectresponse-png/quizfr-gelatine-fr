import QuizLayout from "@/components/quiz/QuizLayout";
import { useQuiz } from "@/contexts/QuizContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const checklist = [
  { icon: "✅", text: "Profil métabolique analysé" },
  { icon: "⚙️", text: "Meta de poids calculée" },
  { icon: "📝", text: "Compatibilité vérifiée" },
  { icon: "📋", text: "Protocole de 30 jours monté" },
  { icon: "🎁", text: "Bonus exclusifs sélectionnés" },
  { icon: "✅", text: "Offre spéciale préparée" },
];

const BANNER_URL = "https://i.imgur.com/mdu3SLr.png";

const Step31Loading3 = () => {
  const { goNext } = useQuiz();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => {
        if (c >= checklist.length - 1) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 2000);
    const timeout = setTimeout(goNext, 13000);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [goNext]);

  return (
    <QuizLayout>
      <div className="space-y-6">
        {/* Banner */}
        <div>
          <img
            src={BANNER_URL}
            alt="Votre protocole Gélatine Mounjaro de 30 jours est prêt!"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Checklist */}
        <div className="space-y-4 px-4">
          {checklist.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.35 }}
              animate={{ opacity: i <= current ? 1 : 0.35 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-lg">{i <= current ? item.icon : "⬜"}</span>
              <span className={`text-sm font-medium ${i <= current ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Rainbow progress bar */}
        <div className="px-4">
          <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "#e5e7eb" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f97316, #eab308, #22c55e)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 12, ease: "linear" }}
            />
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-primary font-semibold">
          Veuillez patienter pendant que nous finalisons tout pour vous...
        </p>
      </div>
    </QuizLayout>
  );
};

export default Step31Loading3;
