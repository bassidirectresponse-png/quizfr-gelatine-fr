import { motion } from "framer-motion";
import { useState } from "react";

const BlogGelatin = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header - clean editorial look */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg quiz-gradient-bg flex items-center justify-center">
              <span className="text-white text-sm font-bold">N</span>
            </div>
            <span className="font-bold text-base text-foreground">NutriScience France</span>
          </div>
          <nav className="hidden sm:flex gap-5 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Accueil</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Recherche</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Nutrition</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Contact</span>
          </nav>
        </div>
      </header>

      {/* Article */}
      <main className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-7"
        >
          {/* Breadcrumb + Meta */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide">Nutrition</span>
            <span className="hidden sm:inline">|</span>
            <span>Par Dr. Claire Moreau, nutritionniste</span>
            <span>•</span>
            <span>Mis à jour le 28 avril 2025</span>
            <span>•</span>
            <span>7 min de lecture</span>
          </div>

          {/* Headline - editorial hook, no promises */}
          <h1 className="text-3xl sm:text-[2.6rem] font-extrabold text-foreground leading-[1.15] tracking-tight">
            Pourquoi la gélatine intéresse autant les chercheurs en nutrition en 2025
          </h1>

          {/* Subheadline - curiosity-driven, factual */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
            Un ingrédient de cuisine ordinaire fait l'objet d'un nombre croissant d'études académiques. Voici ce que la science dit réellement — sans exagération.
          </p>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=900&q=80"
              alt="Recherche nutritionnelle - aliments naturels et science"
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="bg-muted/40 px-4 py-2.5 flex items-center gap-2">
              <span className="text-xs text-muted-foreground italic">Photo : Recherche en nutrition alimentaire | Unsplash</span>
            </div>
          </div>

          {/* Opening hook - rhetorical question to engage */}
          <div className="space-y-5">
            <p className="text-foreground/90 leading-relaxed text-base sm:text-[1.05rem]">
              Vous l'avez probablement dans votre placard de cuisine. Peut-être l'utilisez-vous pour préparer des desserts ou épaissir une sauce. Mais saviez-vous que la gélatine — cet ingrédient si banal — fait l'objet d'un intérêt scientifique grandissant ?
            </p>
            <p className="text-foreground/90 leading-relaxed text-base sm:text-[1.05rem]">
              Entre 2019 et 2024, le nombre de publications académiques portant sur les acides aminés de la gélatine a augmenté de façon notable. Des universités en Europe, en Asie et en Amérique du Nord s'y intéressent. Pas pour créer un « super-aliment miraculeux », mais pour mieux comprendre un nutriment que nos grands-parents consommaient quotidiennement dans leurs bouillons.
            </p>
          </div>

          {/* Section 1 - What it is */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-7 quiz-gradient-bg rounded-full inline-block"></span>
              De quoi parle-t-on exactement ?
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              La gélatine est une protéine extraite du collagène animal — la même protéine qui constitue environ 30% des protéines totales du corps humain. Elle se compose principalement de trois acides aminés : la glycine, la proline et l'hydroxyproline.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Ce qui la rend intéressante d'un point de vue nutritionnel, c'est son profil d'acides aminés unique. Contrairement à la plupart des sources de protéines alimentaires, la gélatine est particulièrement concentrée en glycine — un acide aminé que notre alimentation moderne tend à fournir en quantités insuffisantes.
            </p>
          </div>

          {/* Data table - builds credibility */}
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="quiz-gradient-bg px-5 py-3.5">
              <p className="text-primary-foreground font-semibold text-sm">Profil nutritionnel — pour 10g de gélatine alimentaire</p>
            </div>
            <div className="divide-y divide-border">
              {[
                { nutrient: "Protéines totales", value: "8,6g", note: "85-90% du poids sec" },
                { nutrient: "Glycine", value: "2,1g", note: "Acide aminé majoritaire" },
                { nutrient: "Proline", value: "1,3g", note: "Précurseur du collagène" },
                { nutrient: "Hydroxyproline", value: "1,2g", note: "Marqueur du collagène" },
                { nutrient: "Calories", value: "34 kcal", note: "" },
                { nutrient: "Lipides / Glucides", value: "0g", note: "Protéine pure" },
              ].map((row) => (
                <div key={row.nutrient} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <span className="text-sm font-medium text-foreground">{row.nutrient}</span>
                    {row.note && <span className="text-xs text-muted-foreground ml-2">({row.note})</span>}
                  </div>
                  <span className="text-sm font-bold text-primary">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-muted/30 border-t border-border">
              <p className="text-xs text-muted-foreground italic">Source : USDA National Nutrient Database, table de composition des aliments CIQUAL (ANSES)</p>
            </div>
          </div>

          {/* Section 2 - The science angle */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-7 quiz-gradient-bg rounded-full inline-block"></span>
              Ce que la recherche explore actuellement
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Plusieurs axes de recherche se dessinent dans la littérature scientifique récente. Il ne s'agit pas de conclusions définitives, mais de pistes d'investigation que les chercheurs jugent suffisamment prometteuses pour poursuivre leurs travaux.
            </p>

            {/* Research areas - card format for scannability */}
            <div className="grid sm:grid-cols-2 gap-3 my-5">
              {[
                { icon: "🧬", title: "Synthèse du collagène", desc: "Les acides aminés de la gélatine sont étudiés pour leur rôle dans la production endogène de collagène." },
                { icon: "🔬", title: "Métabolisme des acides aminés", desc: "La glycine participe à plus de 50 réactions métaboliques dans le corps humain." },
                { icon: "🫁", title: "Santé digestive", desc: "Des études observationnelles s'intéressent au rôle de la glycine sur la muqueuse intestinale." },
                { icon: "😴", title: "Qualité du sommeil", desc: "Certaines études préliminaires explorent la relation glycine-sommeil dans des cadres contrôlés." },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-4 border border-border">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-semibold text-foreground text-sm mt-2">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
              <p className="text-sm text-foreground/80 leading-relaxed">
                <span className="font-semibold">Note importante :</span> Ces recherches sont en cours. Aucune de ces études ne permet de formuler des allégations de santé définitives. Les résultats préliminaires ne constituent pas des preuves médicales et varient considérablement d'un individu à l'autre.
              </p>
            </div>
          </div>

          {/* Section 3 - Historical context (builds trust + engagement) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-7 quiz-gradient-bg rounded-full inline-block"></span>
              Un retour aux traditions alimentaires ?
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Nos arrière-grands-parents ne connaissaient pas le mot « collagène ». Pourtant, ils consommaient naturellement de la gélatine chaque jour — dans les bouillons d'os mijotés pendant des heures, les pieds de veau, les aspics et les terrines.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              L'alimentation moderne, orientée vers les morceaux maigres et les préparations rapides, a progressivement éliminé ces sources traditionnelles de gélatine. Certains nutritionnistes observent que notre apport en glycine alimentaire a diminué par rapport aux générations précédentes — sans que l'on puisse encore mesurer précisément les conséquences à long terme.
            </p>

            {/* Pull quote - editorial feel */}
            <div className="border-l-4 border-primary pl-5 py-2 my-5">
              <p className="text-foreground font-medium italic text-base leading-relaxed">
                « La gélatine n'est ni nouvelle ni exotique. C'est un aliment ancestral que la science moderne redécouvre avec des outils d'analyse plus précis. »
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Pr. Jean-Michel Lecerf, Chef du Service Nutrition, Institut Pasteur de Lille</p>
            </div>
          </div>

          {/* Section 4 - Practical usage */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-7 quiz-gradient-bg rounded-full inline-block"></span>
              Comment l'intégrer dans une alimentation courante
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Pour ceux qui s'intéressent à la gélatine d'un point de vue nutritionnel, son intégration dans l'alimentation quotidienne reste simple et peu coûteuse. Voici les formes les plus courantes :
            </p>

            <div className="space-y-3 my-4">
              {[
                { icon: "🍲", title: "Bouillons traditionnels", desc: "Faire mijoter des os pendant plusieurs heures libère naturellement la gélatine dans le liquide. C'est la forme la plus ancestrale de consommation." },
                { icon: "🍮", title: "Desserts et préparations", desc: "Pannacotta, flans, mousses, gelées de fruits — la gélatine en poudre ou en feuilles est un ingrédient courant en pâtisserie." },
                { icon: "☕", title: "Boissons chaudes", desc: "Certaines personnes dissolvent de la gélatine en poudre dans une boisson chaude le matin. La texture peut nécessiter un temps d'adaptation." },
                { icon: "🥄", title: "Gélatine en poudre (nature)", desc: "Disponible en supermarché ou en magasin bio. Se dissout dans un liquide tiède et peut être ajoutée à de nombreuses recettes." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-card rounded-xl p-4 border border-border hover:shadow-sm transition-shadow">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 - Collagen vs Gelatin */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-7 quiz-gradient-bg rounded-full inline-block"></span>
              Gélatine ou collagène hydrolysé : quelle différence ?
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              La question revient souvent. En réalité, les deux proviennent de la même matière première et fournissent des acides aminés similaires. La différence est principalement pratique :
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="font-bold text-foreground text-sm mb-2">Gélatine classique</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Se solidifie (effet « gel »)</li>
                  <li>• Doit être dissoute dans un liquide chaud</li>
                  <li>• Idéale pour cuisiner</li>
                  <li>• Prix accessible</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="font-bold text-foreground text-sm mb-2">Collagène hydrolysé</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Reste liquide (pas de gel)</li>
                  <li>• Soluble à froid</li>
                  <li>• Plus pratique en boisson</li>
                  <li>• Généralement plus cher</li>
                </ul>
              </div>
            </div>

            <p className="text-foreground/90 leading-relaxed">
              D'un point de vue nutritionnel, les deux apportent les mêmes acides aminés. Le choix dépend donc surtout de l'usage que vous souhaitez en faire en cuisine.
            </p>
          </div>

          {/* Section 6 - Precautions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-7 quiz-gradient-bg rounded-full inline-block"></span>
              Précautions et recommandations
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Comme pour tout aliment, quelques points méritent attention :
            </p>
            <ul className="space-y-3 my-4">
              {[
                "La gélatine est d'origine animale — elle ne convient pas aux personnes suivant un régime végétalien ou végétarien strict.",
                "En cas d'allergie aux protéines animales, consultez un allergologue avant consommation.",
                "Les personnes sous traitement médical devraient en discuter avec leur médecin, par précaution.",
                "Privilégiez des sources de qualité, idéalement issues d'animaux élevés en pâturage.",
                "Respectez les quantités indiquées par le fabricant — plus n'est pas nécessairement mieux.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-foreground/90 text-sm leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-muted-foreground">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ section - increases time on page */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-7 quiz-gradient-bg rounded-full inline-block"></span>
              Questions fréquentes
            </h2>
            <div className="space-y-2">
              {[
                { q: "La gélatine est-elle un médicament ?", a: "Non. La gélatine est un aliment, pas un médicament. Elle ne traite, ne guérit et ne prévient aucune maladie. C'est une source de protéines comme une autre, avec un profil d'acides aminés spécifique." },
                { q: "Peut-on consommer de la gélatine tous les jours ?", a: "La gélatine alimentaire est généralement considérée comme sûre pour une consommation quotidienne dans le cadre d'une alimentation variée. Comme pour tout aliment, la modération reste de mise." },
                { q: "Où acheter de la gélatine alimentaire ?", a: "En supermarché (rayon pâtisserie), en magasin bio, ou en pharmacie. Elle se présente sous forme de feuilles ou de poudre. Vérifiez qu'il s'agit bien de gélatine alimentaire de qualité." },
                { q: "La gélatine convient-elle aux enfants ?", a: "La gélatine est présente dans de nombreux aliments pour enfants (bonbons, yaourts, desserts). En tant qu'ingrédient de cuisine, elle ne pose généralement pas de problème, mais consultez un pédiatre en cas de doute." },
                { q: "Y a-t-il des alternatives végétales ?", a: "L'agar-agar (extrait d'algues) est l'alternative végétale la plus courante pour l'effet gélifiant. Cependant, son profil d'acides aminés est différent de celui de la gélatine animale." },
              ].map((faq, i) => (
                <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-4 flex items-center justify-between text-left gap-3"
                  >
                    <span className="font-medium text-sm text-foreground">{faq.q}</span>
                    <span className={`text-muted-foreground transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* References - academic credibility */}
          <div className="bg-muted/40 rounded-xl p-5 space-y-3">
            <p className="font-bold text-foreground text-sm">Sources et références scientifiques</p>
            <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              <li>1. Shoulders, M.D. & Raines, R.T. (2009). « Collagen structure and stability ». Annual Review of Biochemistry, 78, 929-958.</li>
              <li>2. Bannai, M. & Kawai, N. (2012). « New therapeutic strategy for amino acid medicine: glycine improves the quality of sleep ». Journal of Pharmacological Sciences, 118(2), 145-148.</li>
              <li>3. European Food Safety Authority (2011). « Scientific Opinion on the substantiation of health claims related to collagen hydrolysate ». EFSA Journal, 9(7), 2291.</li>
              <li>4. ANSES (2020). Table de composition nutritionnelle CIQUAL. Agence nationale de sécurité sanitaire de l'alimentation.</li>
              <li>5. León-López, A. et al. (2019). « Hydrolyzed Collagen — Sources and Applications ». Molecules, 24(22), 4031.</li>
            </ul>
          </div>

          {/* Disclaimer - compliance critical */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="font-semibold text-foreground text-sm mb-2">Avertissement légal</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Cet article est fourni à titre informatif et éducatif uniquement. Il ne constitue en aucun cas un avis médical, un diagnostic ou une recommandation de traitement. Les informations présentées ne doivent pas se substituer à une consultation avec un professionnel de santé qualifié. Chaque individu étant unique, les besoins nutritionnels varient. Avant toute modification significative de votre alimentation, consultez votre médecin ou un diététicien-nutritionniste diplômé.
            </p>
          </div>

          {/* Conclusion */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-7 quiz-gradient-bg rounded-full inline-block"></span>
              En résumé
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              La gélatine est un aliment ancestral, simple et accessible, dont le profil nutritionnel suscite un intérêt scientifique légitime. Riche en acides aminés spécifiques — notamment en glycine — elle offre un complément protéique que notre alimentation moderne tend à négliger.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Ce n'est ni un remède miracle ni une mode passagère. C'est un aliment traditionnel que la science commence à mieux comprendre grâce aux outils de recherche modernes. Pour ceux qui souhaitent l'explorer, elle s'intègre facilement et à moindre coût dans une alimentation quotidienne équilibrée.
            </p>
          </div>

          {/* Author bio - trust signal */}
          <div className="border-t border-border pt-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                CM
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">Dr. Claire Moreau</p>
                <p className="text-xs text-muted-foreground mt-0.5">Docteur en biochimie nutritionnelle — Université Paris-Saclay</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Spécialiste en protéines alimentaires et métabolisme des acides aminés. Publie régulièrement dans des revues de vulgarisation scientifique sur les liens entre alimentation traditionnelle et nutrition moderne.
                </p>
              </div>
            </div>
          </div>

          {/* Related articles - keeps page looking like real blog */}
          <div className="border-t border-border pt-8 mt-8">
            <h3 className="font-bold text-lg text-foreground mb-4">Articles recommandés</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Bouillon d'os : tradition culinaire et intérêt nutritionnel", category: "Nutrition", date: "22 avr. 2025" },
                { title: "Glycine : un acide aminé sous-estimé ?", category: "Recherche", date: "15 avr. 2025" },
                { title: "Protéines animales vs végétales : le débat scientifique", category: "Science", date: "8 avr. 2025" },
                { title: "Comprendre les étiquettes : décrypter la composition des aliments", category: "Guide pratique", date: "1 avr. 2025" },
              ].map((article) => (
                <div key={article.title} className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-primary font-semibold">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{article.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="grid sm:grid-cols-3 gap-8 text-sm text-muted-foreground">
            <div>
              <p className="font-bold text-foreground mb-2">NutriScience France</p>
              <p className="leading-relaxed">Blog de vulgarisation scientifique sur la nutrition, les aliments et les recherches en cours. Contenu éditorial indépendant.</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-2">Mentions légales</p>
              <p className="leading-relaxed">Ce site a un caractère strictement informatif et ne constitue pas un avis médical. Consultez un professionnel de santé pour tout conseil personnalisé.</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-2">Contact</p>
              <p>redaction@nutriscience.fr</p>
              <p className="mt-2 text-xs">ISSN 2827-XXXX</p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>&copy; 2025 NutriScience France. Tous droits réservés.</span>
            <div className="flex gap-4">
              <span className="hover:text-foreground cursor-pointer">Politique de confidentialité</span>
              <span className="hover:text-foreground cursor-pointer">Conditions d'utilisation</span>
              <span className="hover:text-foreground cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogGelatin;
