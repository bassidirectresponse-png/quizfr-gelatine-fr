import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const PLAYER_ID = "69d0af6a344c9fd8ce9cf4ac";
const DELAY = 146; // seconds

const Step30bVSL2 = () => {
  const { state, goNext } = useQuiz();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = `https://scripts.converteai.net/b3a8e032-a485-4422-ae3b-d3823b0a8869/players/${PLAYER_ID}/v4/player.js`;
    s.async = true;
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowButton(true), DELAY * 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <QuizLayout>
      <div className="space-y-5 text-center">
        <div className="flex justify-center">
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-primary">
          {state.userName || "Vous"}, votre protocole a été créé avec succès !
        </h2>

        <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3">
          <p className="text-sm text-foreground">
            ✅ Regardez la vidéo de 2 minutes pour recevoir votre Protocole Personnalisé
          </p>
        </div>

        <div className="flex justify-center">
          <span className="bg-foreground text-background text-sm font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-2">
            Cliquez sur la vidéo pour Regarder 🔊
          </span>
        </div>

        <div
          className="w-full max-w-[400px] mx-auto"
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-${PLAYER_ID}" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`,
          }}
        />

        {showButton && (
          <QuizButton onClick={goNext}>Obtenir mon plan</QuizButton>
        )}
      </div>
    </QuizLayout>
  );
};

export default Step30bVSL2;
