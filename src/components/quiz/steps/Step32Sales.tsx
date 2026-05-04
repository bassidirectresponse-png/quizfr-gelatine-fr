import { useQuiz } from "@/contexts/QuizContext";
import { useEffect, useState } from "react";
import { getInitialSearchParams } from "@/lib/initialParams";
import { trackStandardEvent } from "@/lib/metaPixel";
import { motion } from "framer-motion";
import { ChevronDown, CheckCircle } from "lucide-react";

const faqs = [
  { q: "La Gélatine Mounjaro fonctionne-t-elle vraiment?", a: "Oui! Elle active le GLP-1 naturellement, réduisant l'appétit et accélérant le métabolisme." },
  { q: "Combien de temps pour voir des résultats?", a: "La plupart des utilisatrices voient des résultats dès la première semaine." },
  { q: "C'est sûr? Y a-t-il des effets secondaires?", a: "Oui, c'est 100% naturel et sans effets secondaires." },
  { q: "Comment vais-je recevoir le protocole?", a: "Vous recevrez un accès immédiat à l'application et au protocole complet par e-mail." },
  { q: "Et si ça ne marche pas pour moi?", a: "Vous avez une garantie de 60 jours. Si vous n'êtes pas satisfaite, nous vous remboursons." },
  { q: "Le paiement est-il sécurisé?", a: "Oui, nous utilisons une plateforme de paiement sécurisée et cryptée." },
  { q: "Faut-il acheter des ingrédients chers?", a: "Non! Les ingrédients sont simples et abordables, disponibles dans n'importe quel supermarché." },
];

const timeline = [
  { week: "SEMAINE 1", desc: "Dégonflement et premiers résultats", icon: "🌱" },
  { week: "SEMAINE 2", desc: "Perte jusqu'à 3 kg", icon: "📋" },
  { week: "SEMAINE 3", desc: "Perte de 5 à 7 kg", icon: "⚡" },
  { week: "SEMAINE 4", desc: "Perte de 9 à 12 kg", icon: "🔥", meta: true },
];

const includes = [
  "Recette complète de la Gélatine Mounjaro",
  "Protocole de 30 jours étape par étape",
  "Accès à l'Application Exclusive",
  "Liste complète des ingrédients",
  "Conseils pour accélérer les résultats",
  "Accès à vie à l'application",
];

const bonuses = [
  "BONUS: Régimes complets",
  "BONUS: Recettes de desserts sains",
  "BONUS: Cours vidéo de pilates au mur",
];

const Step32Sales = () => {
  const { state } = useQuiz();
  const [timeLeft, setTimeLeft] = useState(480);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(t => Math.max(0, t - 1)), 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  const buildCtaUrl = () => {
    const base = "https://checkout.vendepay.com/cb65d1ec-3c7f-41f0-a5ea-3f78e6cc5792";
    const currentParams = new URLSearchParams(getInitialSearchParams());
    currentParams.delete("country");
    const extra = currentParams.toString();
    return extra ? `${base}${base.includes("?") ? "&" : "?"}${extra}` : base;
  };

  const [ctaUrl, setCtaUrl] = useState(() => buildCtaUrl());

  const handleCheckoutClick = () => {
    trackStandardEvent("InitiateCheckout", {
      content_name: "Gélatine Mounjaro",
      currency: "EUR",
      value: 8,
    });
  };

  // Atualiza a URL após o pixel ter tempo de injetar os params
  useEffect(() => {
    const timer = setTimeout(() => setCtaUrl(buildCtaUrl()), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Timer */}
      <div className="sticky top-0 z-50 quiz-gradient-bg py-2.5 text-center">
        <span className="text-primary-foreground font-bold text-sm">
          ⏰ Votre protocole expire dans: {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </span>
      </div>

      <div className="max-w-lg mx-auto px-4 py-8 space-y-8">
        {/* Green check */}
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full border-2 border-green-500 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold text-primary">
            {state.userName || "Vous"}, votre
          </h1>
          <div className="bg-purple-100 border border-purple-300 rounded-xl px-4 py-3 inline-block">
            <p className="text-lg font-bold text-primary">
              Plan de Gélatine de 30 jours a été<br />Généré avec Succès!
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Il est exclusif et généré une seule fois, ne quittez pas cette page pour ne pas le perdre
          </p>
        </div>

        {/* Before/After Image */}
        <div className="relative w-full max-w-[300px] mx-auto">
          <img
            src="https://i.imgur.com/n6db8Ix.png"
            alt="Avant et Après"
            className="w-full rounded-xl"
            loading="lazy"
          />
          {/* Pulsing arrow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[pulse_1.5s_ease-in-out_infinite]">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <span className="text-xl">→</span>
            </div>
          </div>
          {/* Labels */}
          <div className="flex justify-between mt-2 px-4">
            <span className="text-sm font-bold text-red-500 uppercase">Avant</span>
            <span className="text-sm font-bold text-green-500 uppercase">Après</span>
          </div>
        </div>

        {/* Plan Timeline */}
        <div className="space-y-1">
          <div className="quiz-gradient-bg rounded-t-xl py-3 text-center">
            <p className="text-xs text-primary-foreground font-semibold uppercase tracking-wide">VOTRE PLAN EXCLUSIF</p>
            <p className="text-lg font-bold text-primary-foreground">1 Mois de Traitement 🍬</p>
          </div>

          <div className="bg-card border border-border rounded-b-xl p-4 space-y-4">
            <p className="text-sm text-center text-muted-foreground">
              <span className="text-primary font-semibold">{state.userName || "Vous"}</span>, en suivant le protocole correctement, voici ce qui va se passer:
            </p>

            {timeline.map((t, i) => (
              <div key={i} className="flex items-center gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="text-2xl">{t.icon}</span>
                <div className="flex-1">
                  <p className="text-xs font-bold text-primary uppercase">{t.week}</p>
                  <p className="text-sm font-semibold text-foreground">{t.desc}</p>
                </div>
                {t.meta && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">OBJECTIF</span>
                )}
              </div>
            ))}

            {/* Expected result */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 flex items-center gap-2">
              <span className="text-lg">🏃‍♀️</span>
              <p className="text-sm">
                <span className="font-semibold text-foreground">Résultat attendu:</span>{" "}
                <span className="text-primary font-bold">-9 à 12 kg</span>{" "}
                <span className="text-muted-foreground">en 30 jours</span>
              </p>
            </div>
          </div>
        </div>

        {/* Value Stack */}
        <div className="space-y-1">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-xl py-3 text-center">
            <p className="text-primary-foreground font-bold text-base">Gélatine Mounjaro + APP Protocole Complet</p>
            <p className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-wide">ACCÈS À VIE</p>
          </div>

          <div className="bg-card border border-border rounded-b-xl p-5 space-y-4">
            {/* Gelatin image */}
            <div className="flex justify-center">
              <img src="https://i.imgur.com/rXmw1zd.png" alt="Gélatine Mounjaro" className="w-[65%] object-contain rounded-xl" />
            </div>

            {/* Includes */}
            <div className="space-y-2">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Bonuses */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 space-y-1">
              {bonuses.map((b, i) => (
                <p key={i} className="text-sm text-primary font-semibold">🎁 {b}</p>
              ))}
            </div>

            {/* Pricing */}
            <div className="text-center space-y-1 pt-2">
              <p className="text-sm text-muted-foreground line-through">TOUT CELA POUR 97 €</p>
              <p className="text-xs text-green-600 font-semibold uppercase">SEULEMENT</p>
              <p className="text-5xl font-extrabold text-green-600">8 €</p>
              <p className="text-sm text-muted-foreground">Paiement unique et sécurisé</p>
            </div>

            {/* CTA */}
            <motion.a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCheckoutClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-4 px-6 rounded-xl font-extrabold text-lg text-white bg-green-500 hover:bg-green-600 transition-colors shadow-lg text-center"
            >
              JE VEUX COMMENCER 🤩
            </motion.a>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-card border border-border rounded-xl p-6 text-center space-y-3">
          <div className="flex justify-center">
          <img src="https://i.imgur.com/pZ4nkJ4.png" alt="Garantia" className="w-36 h-36 object-contain" />
          </div>
          <h3 className="font-bold text-lg text-foreground">Garantie de Remboursement de 60 Jours</h3>
          <p className="text-sm text-muted-foreground">
            Tout produit est obligé d'offrir au minimum 7 jours de garantie, mais nous avons tellement confiance en notre formule que nous offrons 60 jours complets.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Autrement dit, si vous n'aimez pas ou si cela ne fonctionne pas pour vous, nous rembourserons chaque centime que vous avez payé, sans poser de questions.
          </p>
        </div>

        {/* CTA 2 */}
        <motion.a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCheckoutClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full py-4 px-6 rounded-xl font-extrabold text-lg text-white bg-green-500 hover:bg-green-600 transition-colors shadow-lg text-center"
        >
          JE VEUX COMMENCER 🤩
        </motion.a>

        {/* FAQ */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-center text-foreground">❓ Questions Fréquentes</h3>
          {faqs.map((f, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-sm text-foreground">{f.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4">
                  <p className="text-muted-foreground text-sm">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCheckoutClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full py-4 px-6 rounded-xl font-extrabold text-lg text-white bg-green-500 hover:bg-green-600 transition-colors shadow-lg text-center"
        >
          JE VEUX COMMENCER 🤩
        </motion.a>

        <p className="text-center text-xs text-muted-foreground">
          🔒 Achat 100% sécurisé • Garantie de 60 jours
        </p>
      </div>
    </div>
  );
};

export default Step32Sales;
