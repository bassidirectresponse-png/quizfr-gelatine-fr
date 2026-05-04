import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import { useState } from "react";

const Step7Name = () => {
  const { set, goNext } = useQuiz();
  const [name, setName] = useState("");
  const handleContinue = () => {
    if (name.trim()) { set("userName", name.trim()); goNext(); }
  };
  return (
    <QuizLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">Quel est votre nom?</h2>
        <input
          type="text"
          placeholder="Votre prénom"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleContinue()}
          className="w-full p-4 rounded-[22px] border-2 border-border bg-card text-foreground text-lg focus:outline-none focus:border-primary transition-colors"
        />
        {name.trim() && <QuizButton onClick={handleContinue}>Continuer</QuizButton>}
      </div>
    </QuizLayout>
  );
};

export default Step7Name;
