import QuizLayout from "@/components/quiz/QuizLayout";
import { useQuiz } from "@/contexts/QuizContext";
import { motion } from "framer-motion";
import bodyMoyen from "@/assets/body-moyen.jpg";
import bodyPlus from "@/assets/body-plus.jpg";
import bodySurpoids from "@/assets/body-surpoids.jpg";
import bodyObese from "@/assets/body-obese.jpg";

const options = [
  { label: "Moyen", image: bodyMoyen },
  { label: "Taille Forte", image: bodyPlus },
  { label: "Surpoids", image: bodySurpoids },
  { label: "Obèse", image: bodyObese },
];

const Step4Body = () => {
  const { set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-foreground">
          Comment classez-vous <span className="text-primary">votre corps</span>?
        </h2>
        <p className="text-center text-muted-foreground text-sm">
          Sélectionnez l'option qui vous décrit le mieux
        </p>
        <div className="grid grid-cols-2 gap-3">
          {options.map((o) => (
            <motion.button
              key={o.label}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { set("bodyType", o.label); goNext(); }}
              className="relative rounded-[22px] overflow-hidden shadow-[var(--shadow-card)] border-2 border-border hover:border-primary/40 transition-all aspect-[4/5]"
            >
              <img
                src={o.image}
                alt={o.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex items-end justify-between">
                <span className="text-white font-semibold text-sm">{o.label}</span>
                <span className="w-5 h-5 rounded-full border-2 border-white/70" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step4Body;
