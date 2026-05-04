import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import { useEffect, useState } from "react";

const PLAYER_ID = "69d0af3daca25859120d8e96";
const DELAY = 80; // seconds

const Step25VSL1 = () => {
  const { goNext } = useQuiz();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = `https://scripts.converteai.net/b3a8e032-a485-4422-ae3b-d3823b0a8869/players/${PLAYER_ID}/v4/player.js`;
    s.async = true;
    document.head.appendChild(s);
    return () => { try { document.head.removeChild(s); } catch {} };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowButton(true), DELAY * 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <QuizLayout>
      <div className="space-y-5 text-center">
        <div>
          <h2 className="text-xl font-bold text-foreground leading-snug">
            Regardez maintenant l'explication rapide de{" "}
            <span className="text-primary">1 Minute</span>
            <br />
            et comprenez pourquoi cette méthode
            <br />
            attire l'attention 👀
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2 rounded-full mx-auto">
          Cliquez sur la vidéo pour Regarder 🔊
        </div>

        <div
          className="w-full max-w-[400px] mx-auto"
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-${PLAYER_ID}" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`,
          }}
        />

        {showButton && (
          <QuizButton onClick={goNext}>Continuer</QuizButton>
        )}
      </div>
    </QuizLayout>
  );
};

export default Step25VSL1;
