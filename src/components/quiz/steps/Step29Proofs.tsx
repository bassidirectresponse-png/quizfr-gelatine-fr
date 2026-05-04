import QuizLayout from "@/components/quiz/QuizLayout";
import QuizButton from "@/components/quiz/QuizButton";
import { useQuiz } from "@/contexts/QuizContext";
import { Star } from "lucide-react";

const proofs = [
  {
    name: "Céline",
    age: "34 ans - Paris",
    text: "Bizarre… Perdu 9kg en 3 semaines!",
    img: "https://www.shutterstock.com/image-photo/50-year-old-woman-weight-600nw-2519627017.jpg",
  },
  {
    name: "Isabelle",
    age: "31 ans - Lyon",
    text: "Mon ventre a fondu! Je n'y crois pas!",
    img: "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2019_16/1426632/woman-loses-117-pounds-today-main-190417-004.jpg",
  },
  {
    name: "Nathalie",
    age: "45 ans - Marseille",
    text: "J'ai remis mes anciennes robes!",
    img: "https://avatars.mds.yandex.net/i?id=53e01d5cb59ec77e33434f933cfe2f30_l-5220947-images-thumbs&ref=rim&n=13&w=1080&h=1080",
  },
  {
    name: "Valérie",
    age: "39 ans - Bordeaux",
    text: "Quel bon résultat 😍🔥",
    img: "https://avatars.mds.yandex.net/i?id=39154eb17bb66d4f15d74b5527afe071_l-5869499-images-thumbs&ref=rim&n=13&w=1080&h=1080",
  },
];

const Step29Proofs = () => {
  const { goNext } = useQuiz();
  return (
    <QuizLayout>
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center text-foreground">Ce que disent nos clientes</h2>
        <p className="text-center text-xs text-muted-foreground">
          Voyez qui a déjà transformé son corps avec la Gélatine Mounjaro
        </p>

        <div className="space-y-4">
          {proofs.map(p => (
            <div key={p.name} className="bg-card rounded-[22px] overflow-hidden shadow-[var(--shadow-card)] border border-border">
              <img
                src={p.img}
                alt={p.name}
                className="w-full"
                loading="lazy"
              />
              <div className="px-4 py-3 text-center">
                <p className="text-sm font-bold text-foreground">"{p.text}"</p>
                <p className="text-xs text-muted-foreground mt-0.5">{p.name}, {p.age}</p>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <QuizButton onClick={goNext}>Continuer</QuizButton>
      </div>
    </QuizLayout>
  );
};

export default Step29Proofs;
