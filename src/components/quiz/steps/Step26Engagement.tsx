import QuizLayout from "@/components/quiz/QuizLayout";
import OptionCard from "@/components/quiz/OptionCard";
import { useQuiz } from "@/contexts/QuizContext";

const Step26Engagement = () => {
  const { set, goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-6">
        <img src="https://avatars.mds.yandex.net/i?id=384d15f924f4670e5f62372624023eda_l-8255596-images-thumbs&ref=rim&n=13&w=640&h=640" alt="Before After" className="w-full rounded-[22px] shadow-[var(--shadow-card)]" loading="lazy" />
        <h2 className="text-2xl font-bold text-center text-foreground">Vous engagez-vous pour 1 semaine?</h2>
        <div className="space-y-3">
          <OptionCard label="Oui, je m'engage! 💪" onClick={() => { set("engagement", "yes"); goNext(); }} />
          <OptionCard label="J'ai besoin d'y réfléchir" onClick={() => { set("engagement", "maybe"); goNext(); }} />
        </div>
      </div>
    </QuizLayout>
  );
};

export default Step26Engagement;
