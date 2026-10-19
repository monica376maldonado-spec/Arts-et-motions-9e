import { 
  MatchingItem, 
  DefinitionItem, 
  FillBlankItem, 
  VocabCard, 
  GrammaireQuizItem, 
  ConjugationItem, 
  PronounItem, 
  CombineSentenceItem 
} from '../types';

import artDetournementImg from '../assets/images/art_detournement_museum_1792439136141.jpg';
import heroAtelierImg from '../assets/images/hero_atelier_art_bd_1792439136047.jpg';
import versaillesImg from '../assets/images/versailles_patrimoine_art_1792439136289.jpg';
import nuitMuseesImg from '../assets/images/nuit_des_musees_gallery_1792439136703.jpg';

// ==========================================
// PARTIE 1 : COMPRÉHENSION ÉCRITE
// ==========================================

export const matchingWords: MatchingItem[] = [
  { id: 1, word: "1. un dessinateur", correctLetter: "D" },
  { id: 2, word: "2. un tableau", correctLetter: "F" },
  { id: 3, word: "3. une exposition", correctLetter: "B" },
  { id: 4, word: "4. un chef-d’œuvre", correctLetter: "H" },
  { id: 5, word: "5. un détournement artistique", correctLetter: "A" },
  { id: 6, word: "6. projeter", correctLetter: "G" },
  { id: 7, word: "7. un spécialiste", correctLetter: "C" },
  { id: 8, word: "8. accessible", correctLetter: "E" },
  { id: 9, word: "9. Une bande dessinée", correctLetter: "L" },
  { id: 10, word: "10. s’amuser", correctLetter: "M" },
  { id: 11, word: "11. emmener quelqu’un", correctLetter: "I" },
  { id: 12, word: "12. rendre (+ adjectif)", correctLetter: "J" },
  { id: 13, word: "13. faire réfléchir", correctLetter: "K" },
];

export const matchingDefinitions: DefinitionItem[] = [
  { letter: "A", text: "Une création qui reprend une œuvre connue pour lui donner un nouveau sens." },
  { letter: "B", text: "Un événement où l’on présente des œuvres au public." },
  { letter: "C", text: "Une personne qui connaît très bien un domaine." },
  { letter: "D", text: "Une personne qui crée des dessins, par exemple pour une bande dessinée." },
  { letter: "E", text: "Facile à comprendre ou à découvrir pour tout le monde." },
  { letter: "F", text: "Une peinture que l’on peut voir dans un musée." },
  { letter: "G", text: "Montrer une image sur un mur avec la lumière d’un appareil." },
  { letter: "H", text: "Une œuvre d’art très célèbre et de grande qualité." },
  { letter: "I", text: "Conduire une personne avec soi dans un lieu." },
  { letter: "J", text: "Faire devenir : « rendre l’art accessible » = faire en sorte que l’art soit accessible." },
  { letter: "K", text: "Pousser quelqu’un à penser sérieusement à quelque chose." },
  { letter: "L", text: "Une histoire racontée avec des dessins dans des cases." },
  { letter: "M", text: "Passer un moment agréable, rire et jouer." },
];

export const part1FillWords = [
  "détournement",
  "dessinateur",
  "personnages",
  "tableaux",
  "humour",
  "exposition",
  "passion",
  "public"
];

export const part1FillSentences: FillBlankItem[] = [
  {
    id: 1,
    sentenceBefore: "Zep est un",
    sentenceAfter: "suisse qui a créé Titeuf.",
    correctAnswer: "dessinateur",
    hint: "La personne qui dessine des albums et des bandes dessinées."
  },
  {
    id: 2,
    sentenceBefore: "Titeuf et Le Chat sont des",
    sentenceAfter: "de bande dessinée.",
    correctAnswer: "personnages",
    hint: "Les héros ou protagonistes imaginaires de l'histoire."
  },
  {
    id: 3,
    sentenceBefore: "Zep a transformé des",
    sentenceAfter: "des XVIe et XVIIe siècles.",
    correctAnswer: "tableaux",
    hint: "Des peintures classiques exposées au musée."
  },
  {
    id: 4,
    sentenceBefore: "Grâce à son",
    sentenceAfter: ", Zep montre qu’on peut découvrir la peinture en s’amusant.",
    correctAnswer: "humour",
    hint: "La capacité à faire rire et amuser les lecteurs."
  },
  {
    id: 5,
    sentenceBefore: "Philippe Geluck a présenté une",
    sentenceAfter: "à Paris : L’Art et Le Chat.",
    correctAnswer: "exposition",
    hint: "L'événement culturel où les œuvres sont présentées au public."
  },
  {
    id: 6,
    sentenceBefore: "Ses parents lui ont transmis une",
    sentenceAfter: "pour la peinture.",
    correctAnswer: "passion",
    hint: "Un très grand amour ou intérêt enthousiaste pour un art."
  },
  {
    id: 7,
    sentenceBefore: "Philippe Geluck a utilisé son personnage pour rendre l’art accessible à un",
    sentenceAfter: "plus large.",
    correctAnswer: "public",
    hint: "L'ensemble des spectateurs, visiteurs et curieux."
  },
  {
    id: 8,
    sentenceBefore: "Un",
    sentenceAfter: "artistique reprend une œuvre connue pour lui donner un nouveau sens.",
    correctAnswer: "détournement",
    hint: "La réinterprétation humoristique ou décalée d'un chef-d'œuvre."
  }
];

// ==========================================
// PARTIE 2 : COMPRÉHENSION ORALE
// ==========================================

export const audioDoc1Script = `Bienvenue au journal de la culture. Aujourd'hui, grand débat à Versailles ! L'arrivée des sculptures de Jeff Koons au château suscite une vive controverse. Dès ce matin, plusieurs détracteurs de l'artiste américain se sont rassemblés devant la grille d'honneur pour manifester leur colère. Pour ces manifestants, installer du pop art dans les appartements royaux est une insulte au patrimoine français. Ils exigent l'interdiction immédiate de l'exposition et menacent d'intenter une action en justice. Face à cette hostilité, le conservateur du musée rappelle que sous Louis XIV, Versailles a toujours été un formidable laboratoire de la création artistique contemporaine. D'autres visiteurs plus jeunes saluent cette initiative audacieuse qui dépoussière les musées et fait réfléchir.`;

export const audioDoc2Script = `Chers auditeurs, à vos agendas ! Samedi prochain aura lieu la Nuit européenne des musées. Pour l'occasion, l'accès à toutes les collections sera entièrement gratuit à partir de 19 heures. De nombreuses animations et spectacles sont programmés dans chaque galerie. Vous pourrez admirer des guides vêtus en costumes d'époque, des statues et sculptures éclairées de manière féérique, ainsi que des performances musicales. Pour éviter la foule qui se précipite vers les salles les plus célèbres, achetez dès maintenant votre billet de train pour rejoindre la gare centrale. Une auditrice nous écrivait hier : « J'y suis allée l'an dernier avec mes enfants, ça en valait vraiment la peine ! » N'oubliez pas d'immortaliser ces moments. De grosses bises culturelles et à très bientôt !`;

export const doc1Vocab: VocabCard[] = [
  { french: "un scandale", definition: "Un événement qui choque beaucoup de personnes.", spanish: "un escándalo", category: "debat-contemporain" },
  { french: "exposer", definition: "Montrer des œuvres au public.", spanish: "exponer", category: "art-bd" },
  { french: "un détracteur", definition: "Une personne qui critique, qui est contre quelque chose.", spanish: "un detractor", category: "debat-contemporain" },
  { french: "manifester", definition: "Protester dans la rue avec d’autres personnes.", spanish: "manifestarse", category: "debat-contemporain" },
  { french: "exiger", definition: "Demander quelque chose avec force.", spanish: "exigir", category: "debat-contemporain" },
  { french: "une interdiction", definition: "Le fait de ne pas permettre quelque chose.", spanish: "una prohibición", category: "debat-contemporain" },
  { french: "une insulte", definition: "Une parole ou un acte qui manque de respect.", spanish: "un insulto", category: "debat-contemporain" },
  { french: "une action en justice", definition: "Une démarche devant un tribunal.", spanish: "una demanda judicial", category: "debat-contemporain" },
  { french: "l’hostilité", definition: "L’opposition, le refus.", spanish: "la hostilidad", category: "debat-contemporain" },
  { french: "saluer une initiative", definition: "Dire qu’une idée est bonne, la féliciter.", spanish: "valorar positivamente una iniciativa", category: "debat-contemporain" },
  { french: "le patrimoine", definition: "Les bâtiments et les œuvres du passé qu’il faut protéger.", spanish: "el patrimonio", category: "visite-musee" },
  { french: "préserver", definition: "Protéger, garder en bon état.", spanish: "preservar", category: "visite-musee" },
  { french: "un laboratoire", definition: "Un lieu où l’on essaie des idées nouvelles et novatrices.", spanish: "un laboratorio", category: "art-bd" }
];

export const doc2Vocab: VocabCard[] = [
  { french: "un billet", definition: "Le papier ou ticket pour voyager en train ou entrer dans un lieu.", spanish: "un boleto / un tiquete", category: "visite-musee" },
  { french: "la nuit des musées", definition: "Une nuit par an où les musées ouvrent tard et gratuitement.", spanish: "la noche de los museos", category: "visite-musee" },
  { french: "gratuit", definition: "Qui ne coûte rien, sans frais d'entrée.", spanish: "gratis", category: "visite-musee" },
  { french: "une animation", definition: "Une activité ludique pour distraire et intéresser le public.", spanish: "una actividad", category: "visite-musee" },
  { french: "un spectacle", definition: "Une représentation avec des acteurs, des danseurs ou des musiciens.", spanish: "un espectáculo", category: "visite-musee" },
  { french: "un costume d’époque", definition: "Un vêtement historique qui rappelle le passé.", spanish: "un traje de época", category: "visite-musee" },
  { french: "Ça en valait la peine.", definition: "C’était bien, ça méritait l’effort et le temps investi.", spanish: "Valió la pena.", category: "debat-contemporain" },
  { french: "une collection", definition: "Un ensemble cohérent d’œuvres réunies dans un musée.", spanish: "una colección", category: "visite-musee" },
  { french: "se précipiter vers", definition: "Courir ou aller très vite vers un endroit.", spanish: "correr hacia", category: "visite-musee" },
  { french: "un sculpteur / une statue", definition: "L'artiste qui crée des figures en pierre ou bronze / L'œuvre sculptée.", spanish: "un escultor / una estatua", category: "art-bd" },
  { french: "éclairé(e)", definition: "Mis en valeur avec de la lumière.", spanish: "iluminado(a)", category: "visite-musee" },
  { french: "la gare, le quai", definition: "Le lieu où l’on prend le train / la partie où l’on attend.", spanish: "la estación, el andén", category: "visite-musee" },
  { french: "de grosses bises", definition: "Une formule affectueuse et amicale pour dire au revoir.", spanish: "un abrazo fuerte / muchos besos", category: "visite-musee" }
];

export const part2FillWords = [
  "scandale",
  "détracteurs",
  "manifester",
  "interdiction",
  "patrimoine",
  "laboratoire",
  "saluent",
  "insulte"
];

export const part2FillSentences: FillBlankItem[] = [
  {
    id: 1,
    sentenceBefore: "Les",
    sentenceAfter: "de Jeff Koons sont venus devant la grille du château.",
    correctAnswer: "détracteurs",
    hint: "Ceux qui critiquent et refusent son art."
  },
  {
    id: 2,
    sentenceBefore: "Ils veulent",
    sentenceAfter: "leur colère.",
    correctAnswer: "manifester",
    hint: "Protester publiquement dans la rue."
  },
  {
    id: 3,
    sentenceBefore: "Ils demandent l’",
    sentenceAfter: "de l’exposition.",
    correctAnswer: "interdiction",
    hint: "Le fait d'empêcher légalement l'exposition d'avoir lieu."
  },
  {
    id: 4,
    sentenceBefore: "Pour eux, cette exposition est une",
    sentenceAfter: "pour le château.",
    correctAnswer: "insulte",
    hint: "Un acte profondément irrespectueux envers le lieu historique."
  },
  {
    id: 5,
    sentenceBefore: "Ils veulent faire cesser le",
    sentenceAfter: ".",
    correctAnswer: "scandale",
    hint: "L'affaire qui choque l'opinion publique."
  },
  {
    id: 6,
    sentenceBefore: "D’autres visiteurs",
    sentenceAfter: "cette initiative.",
    correctAnswer: "saluent",
    hint: "Ils félicitent et encouragent cette idée audacieuse."
  },
  {
    id: 7,
    sentenceBefore: "Sous Louis XIV, le château a été un formidable",
    sentenceAfter: "de l’art.",
    correctAnswer: "laboratoire",
    hint: "Un espace privilégié d'expérimentation et d'innovation artistique."
  },
  {
    id: 8,
    sentenceBefore: "Il faut préserver le",
    sentenceAfter: "du château.",
    correctAnswer: "patrimoine",
    hint: "L'héritage architectural et historique à transmettre aux générations futures."
  }
];

// ==========================================
// PARTIE 3 : PRODUCTION ÉCRITE
// ==========================================

export interface ForumSectionGuide {
  id: string;
  name: string;
  role: string;
  expressions: string[];
  placeholder: string;
}

export const forumStructureGuide: ForumSectionGuide[] = [
  {
    id: "titre",
    name: "Titre",
    role: "Annoncer le sujet avec une question ou une phrase courte percutante.",
    expressions: ["Et si… ?", "Faut-il… ?", "Pour ou contre… ?", "L'art doit-il rester intouchable ?"],
    placeholder: "Ex: Faut-il transformer les œuvres d'art pour les rendre plus amusantes ?"
  },
  {
    id: "salutation",
    name: "Formule d’appel informelle",
    role: "Saluer les lecteurs et les camarades de façon amicale.",
    expressions: ["Salut à tous !", "Coucou les amis !", "Bonjour tout le monde !"],
    placeholder: "Ex: Salut à tous les passionnés d'art et de BD !"
  },
  {
    id: "lancerDebat",
    name: "Lancer un débat",
    role: "Présenter le sujet et poser clairement la question de controverse.",
    expressions: [
      "Aujourd’hui, je voudrais parler de…",
      "Que pensez-vous de… ?",
      "Est-ce une bonne idée de… ?",
      "Depuis quelques jours, je me demande si…"
    ],
    placeholder: "Ex: Aujourd'hui, je voudrais vous parler des détournements de tableaux de maîtres par des dessinateurs de BD. Est-ce vraiment une bonne idée ?"
  },
  {
    id: "arg1",
    name: "Argument 1 + exemple",
    role: "Donner une première raison convaincante, puis illustrer par un exemple précis.",
    expressions: [
      "D’abord,",
      "Premièrement,",
      "Par exemple,",
      "Comme le montre l'exposition de Geluck...",
      "En effet,"
    ],
    placeholder: "Ex: D'abord, ces détournements permettent de rendre l'art classique accessible aux jeunes. Par exemple, quand Philippe Geluck associe Le Chat à des toiles de maîtres, cela donne envie d'aller au musée sans intimidation."
  },
  {
    id: "arg2",
    name: "Argument 2 + exemple",
    role: "Donner une deuxième raison, enrichie d'une nuance ou d'un autre exemple.",
    expressions: [
      "Ensuite,",
      "De plus,",
      "En effet,",
      "Par ailleurs,",
      "D'un autre côté,"
    ],
    placeholder: "Ex: De plus, l'humour ne détruit pas le patrimoine, il lui donne une seconde vie. En voyant les parodies de Zep, on apprend à observer les détails des tableaux des XVIe et XVIIe siècles."
  },
  {
    id: "exemplePerso",
    name: "Exemple personnel",
    role: "Raconter une expérience vécue en utilisant le passé composé et l’imparfait.",
    expressions: [
      "Personnellement,",
      "Moi, l’année dernière,",
      "Un jour, j’ai visité...",
      "Il y avait beaucoup de monde quand j'ai découvert..."
    ],
    placeholder: "Ex: Personnellement, l'an dernier, j'ai visité le musée avec ma classe. Avant cette visite, je n'aimais pas beaucoup les vieux tableaux, mais grâce à ces versions revisitées, j'ai passé un super moment !"
  },
  {
    id: "reagir",
    name: "Encouragement à réagir",
    role: "Inviter chaleureusement les lecteurs à exprimer leur avis sur le forum.",
    expressions: [
      "Qu’est-ce que vous en pensez ?",
      "Et vous, quel est votre avis ?",
      "Pensez-vous que c'est un scandale ou du génie ?"
    ],
    placeholder: "Ex: Et vous, qu'en pensez-vous ? Êtes-vous plutôt pour ou contre ces transformations d'œuvres ?"
  },
  {
    id: "remerciements",
    name: "Remerciements & Signature",
    role: "Terminer poliment et signer avec son prénom.",
    expressions: ["Merci pour votre attention.", "J'attends vos réponses !", "À bientôt !"],
    placeholder: "Ex: Merci pour votre lecture et vos commentaires !\nCamille"
  }
];

export const examSampleCamille = {
  title: "Un musée qui m’a vraiment marqué(e) !",
  salutation: "Salut à tous !",
  body: `Est-ce que visiter un musée peut changer votre journée ? Pour moi, oui, et je voudrais vous en parler !

Un musée est un lieu où l’on découvre de très belles œuvres. Par exemple, au Musée d’Orsay, à Paris, j’ai vu « La Nuit étoilée sur le Rhône » de Van Gogh, un tableau que je voulais voir depuis longtemps. Les couleurs étaient vraiment magnifiques et je suis resté(e) dix minutes devant !

On apprend aussi énormément de choses. Par exemple, j’ai appris que Van Gogh avait peint cette œuvre dehors, pendant la nuit, ce qui m’a beaucoup surpris(e).

Le mois dernier, j’ai visité ce musée avec ma sœur. Il y avait beaucoup de monde, mais nous étions très contents. J’étais profondément ému(e), et c’est pour ça que je recommande cette visite. Allez-y, c’est vraiment génial !

Qu’est-ce que vous en pensez ?

Merci pour votre attention.
Camille`,
  wordCount: 154,
  breakdown: [
    { label: "Titre", text: "Un musée qui m’a vraiment marqué(e) !" },
    { label: "Formule d'appel", text: "Salut à tous !" },
    { label: "Lancer le sujet", text: "Est-ce que visiter un musée peut changer votre journée ? Pour moi, oui, et je voudrais vous en parler !" },
    { label: "Argument 1 + exemple", text: "Un musée est un lieu où l’on découvre de très belles œuvres. Par exemple, au Musée d’Orsay, à Paris, j’ai vu « La Nuit étoilée sur le Rhône »..." },
    { label: "Argument 2 + exemple", text: "On apprend aussi énormément de choses. Par exemple, j’ai appris que Van Gogh avait peint cette œuvre dehors, pendant la nuit..." },
    { label: "Expérience personnelle (PC & IMP)", text: "Le mois dernier, j’ai visité ce musée avec ma sœur. Il y avait beaucoup de monde, mais nous étions très contents..." },
    { label: "Appel à réagir", text: "Qu’est-ce que vous en pensez ?" },
    { label: "Remerciements & Signature", text: "Merci pour votre attention. \nCamille" }
  ]
};

// ==========================================
// PARTIE 4 : GRAMMAIRE
// ==========================================

export const grammaireQuiz41: GrammaireQuizItem[] = [
  {
    id: 1,
    phrase: "Zep a créé Titeuf.",
    correct: "PC",
    explanation: "Passé composé : action ponctuelle, délimitée dans le temps et accomplie dans le passé."
  },
  {
    id: 2,
    phrase: "Enfant, il n’aimait pas les musées.",
    correct: "IMP",
    explanation: "Imparfait : description d'un état d'esprit continu ou d'un sentiment sur une période passée indéfinie."
  },
  {
    id: 3,
    phrase: "Sa mère l’emmenait souvent au musée.",
    correct: "IMP",
    explanation: "Imparfait : habitude répétée dans le passé, soulignée par le mot clé « souvent »."
  },
  {
    id: 4,
    phrase: "Hier, nous avons visité l’exposition.",
    correct: "PC",
    explanation: "Passé composé : action précise et ponctuelle située précisément dans le temps par « Hier »."
  },
  {
    id: 5,
    phrase: "Il faisait beau et le musée était plein de monde.",
    correct: "IMP",
    explanation: "Imparfait : description du décor, des circonstances météo et de l'atmosphère d'arrière-plan."
  },
  {
    id: 6,
    phrase: "Soudain, un visiteur a crié.",
    correct: "PC",
    explanation: "Passé composé : action soudaine et inattendue qui fait rupture (« Soudain »)."
  }
];

export const conjugationItems42: ConjugationItem[] = [
  {
    id: 1,
    verb: "visiter",
    correct: "ai visité",
    explanation: "Hier + action ponctuelle = Passé composé avec l'auxiliaire avoir."
  },
  {
    id: 2,
    verb: "faire",
    correct: "faisait",
    explanation: "Description météo d'arrière-plan = Imparfait (racine fais- + terminaison -ait)."
  },
  {
    id: 3,
    verb: "y avoir",
    correct: "y avait",
    explanation: "Description du contexte et de l'atmosphère générale = Imparfait (« il y avait »)."
  },
  {
    id: 4,
    verb: "regarder",
    correct: "regardions",
    explanation: "Action continue et en cours de déroulement interrompue par l'arrivée du guide = Imparfait."
  },
  {
    id: 5,
    verb: "arriver",
    correct: "est arrivé",
    explanation: "Action ponctuelle et soudaine qui survient pendant la contemplation = Passé composé avec auxiliaire être."
  },
  {
    id: 6,
    verb: "expliquer",
    correct: "a expliqué",
    altCorrect: ["expliquait"],
    explanation: "Action principale accomplie par le guide lors de son intervention = Passé composé (« a expliqué »)."
  },
  {
    id: 7,
    verb: "acheter",
    correct: "avons acheté",
    explanation: "Action ponctuelle et successive (« Après la visite ») = Passé composé."
  }
];

export const relativePronounsQuiz44: PronounItem[] = [
  {
    id: 1,
    sentenceBefore: "Zep est un dessinateur",
    sentenceAfter: "a créé Titeuf.",
    correct: "qui",
    explanation: "« qui » remplace le sujet du verbe « a créé » (qui a créé ? Le dessinateur)."
  },
  {
    id: 2,
    sentenceBefore: "Titeuf est le personnage",
    sentenceAfter: "Zep a dessiné.",
    correct: "que",
    explanation: "« que » remplace le Complément d'Objet Direct (COD) : Zep a dessiné quoi ? Le personnage."
  },
  {
    id: 3,
    sentenceBefore: "Le Palais des Beaux-Arts est le musée",
    sentenceAfter: "Zep a présenté ses dessins.",
    correct: "où",
    explanation: "« où » indique le lieu dans lequel l'exposition s'est tenue."
  },
  {
    id: 4,
    sentenceBefore: "Voici l’exposition",
    sentenceAfter: "je t’ai parlé.",
    correct: "dont",
    explanation: "« dont » remplace un complément introduit par « de » : on dit « parler DE quelque chose »."
  },
  {
    id: 5,
    sentenceBefore: "J’ai un ami",
    sentenceAfter: "adore la bande dessinée.",
    correct: "qui",
    explanation: "« qui » est le sujet du verbe « adore » (mon ami adore la BD)."
  },
  {
    id: 6,
    sentenceBefore: "Le musée",
    sentenceAfter: "nous avons visité hier était gratuit.",
    correct: "que",
    explanation: "« que » remplace le COD du verbe « avons visité » (nous avons visité le musée)."
  },
  {
    id: 7,
    sentenceBefore: "C’est la ville",
    sentenceAfter: "j’ai vu ma première exposition.",
    correct: "où",
    explanation: "« où » exprime le complément circonstanciel de lieu (dans cette ville)."
  },
  {
    id: 8,
    sentenceBefore: "Le Chat est un personnage",
    sentenceAfter: "beaucoup de gens se souviennent.",
    correct: "dont",
    explanation: "« dont » remplace le complément du verbe « se souvenir DE » (se souvenir du personnage)."
  }
];

export const combineSentences45: CombineSentenceItem[] = [
  {
    id: 1,
    sentence1: "J’ai vu un tableau.",
    sentence2: "Ce tableau est très célèbre.",
    targetPronoun: "qui",
    expectedSolution: "J'ai vu un tableau qui est très célèbre.",
    alternativeSolutions: [
      "J’ai vu un tableau qui est très célèbre.",
      "J'ai vu un tableau qui est très célèbre",
      "J’ai vu un tableau qui est très célèbre"
    ],
    hint: "Le mot répété « Ce tableau » est le sujet du second verbe. Utilise le pronom sujet « qui »."
  },
  {
    id: 2,
    sentence1: "Zep a créé un personnage.",
    sentence2: "Tout le monde connaît ce personnage.",
    targetPronoun: "que",
    expectedSolution: "Zep a créé un personnage que tout le monde connaît.",
    alternativeSolutions: [
      "Zep a créé un personnage que tout le monde connaît.",
      "Zep a créé un personnage que tout le monde connaît",
      "Zep a créé un personnage qu'on connaît tous."
    ],
    hint: "« Ce personnage » est COD du verbe « connaît ». Utilise le pronom relatif « que »."
  },
  {
    id: 3,
    sentence1: "Nous visitons un musée.",
    sentence2: "Dans ce musée, il y a une exposition de BD.",
    targetPronoun: "où",
    expectedSolution: "Nous visitons un musée où il y a une exposition de BD.",
    alternativeSolutions: [
      "Nous visitons un musée où il y a une exposition de BD.",
      "Nous visitons un musée où il y a une exposition de BD",
      "Nous visitons un musée dans lequel il y a une exposition de BD."
    ],
    hint: "« Dans ce musée » indique le lieu. Remplace-le par le pronom relatif « où »."
  },
  {
    id: 4,
    sentence1: "Voici un artiste.",
    sentence2: "Je parle souvent de cet artiste.",
    targetPronoun: "dont",
    expectedSolution: "Voici un artiste dont je parle souvent.",
    alternativeSolutions: [
      "Voici un artiste dont je parle souvent.",
      "Voici un artiste dont je parle souvent"
    ],
    hint: "On dit « parler DE cet artiste ». Le pronom à employer pour remplacer un complément en « de » est « dont »."
  }
];

// ==========================================
// RESSOURCES COMPLÉMENTAIRES
// ==========================================

export const grammarMemoCards = [
  {
    title: "Passé Composé vs Imparfait : Le guide infaillible",
    concept: "Deux temps du passé aux rôles bien distincts",
    points: [
      {
        tag: "Passé Composé (PC)",
        desc: "Actions ponctuelles, achevées, limitées dans le temps ou successives.",
        triggers: "Hier, soudain, tout à coup, ensuite, un jour, à 14h, le mois dernier.",
        example: "Soudain, la cloche a sonné. Nous avons visité le musée."
      },
      {
        tag: "Imparfait (IMP)",
        desc: "Descriptions, décors, météo, sentiments, habitudes répétées ou actions en cours.",
        triggers: "Chaque jour, souvent, tous les soirs, il faisait beau, quand j'étais petit.",
        example: "Il faisait froid et les rues étaient désertes. Il aimait peindre."
      }
    ],
    tip: "Astuce mnémotechnique : Imagine un film de cinéma ! L'imparfait, c'est le décor et la musique d'ambiance. Le passé composé, c'est l'acteur qui surgit et fait une action."
  },
  {
    title: "Pronoms Relatifs : Qui, Que, Où, Dont",
    concept: "Comment remplacer un groupe nominal pour éviter les répétitions",
    points: [
      {
        tag: "QUI",
        desc: "Remplace le SUJET du verbe suivant. (qui + verbe)",
        triggers: "Pose la question : « Qui fait l'action ? »",
        example: "Le peintre QUI a réalisé cette fresque est réputé."
      },
      {
        tag: "QUE / QU'",
        desc: "Remplace le COD (Complément d'Objet Direct). (que + sujet + verbe)",
        triggers: "Pose la question : « Le sujet fait QUOI ? »",
        example: "Le tableau QUE j'admire est au Louvre."
      },
      {
        tag: "OÙ",
        desc: "Remplace un complément de LIEU ou de TEMPS.",
        triggers: "Où ? Quand ?",
        example: "Le musée OÙ nous sommes allés. Le jour OÙ l'artiste est né."
      },
      {
        tag: "DONT",
        desc: "Remplace un complément introduit par la préposition « DE ».",
        triggers: "Verbes avec DE : parler de, se souvenir de, avoir besoin de, avoir peur de.",
        example: "L'œuvre DONT je parle (parler de). L'artiste DONT je me souviens."
      }
    ],
    tip: "Règle d'or : Regarde toujours la nature de ce qui suit le trou. Si c'est un verbe conjugué direct, c'est généralement QUI. Si c'est un pronom ou sujet suivi du verbe, teste QUE ou DONT !"
  }
];

export const realArtworksGallery = [
  {
    title: "Zep & Les Beaux-Arts de Lille",
    subtitle: "Quand Titeuf réveille les chefs-d'œuvre classiques",
    author: "Zep (Philippe Chappuis)",
    imageSrc: artDetournementImg,
    description: "Le créateur de Titeuf a investi le Palais des Beaux-Arts pour insérer ses personnages espiègles au cœur de toiles flamandes et de la Renaissance. Un détournement artistique bienveillant conçu pour désacraliser les musées et donner envie aux jeunes d'observer les chefs-d'œuvre avec curiosité.",
    examLink: "Document central de la Partie 1 (Compréhension écrite)."
  },
  {
    title: "L'Art et Le Chat",
    subtitle: "Philippe Geluck rend hommage aux géants de la peinture",
    author: "Philippe Geluck",
    imageSrc: heroAtelierImg,
    description: "Une rétrospective majeure où Le Chat de Geluck dialogue avec des toiles inspirées de Keith Haring, Andy Warhol, Picasso ou Munch. L'artiste belge utilise son félin philosophe et plein d'autodérision pour rendre l'art moderne et classique accessible au plus grand nombre.",
    examLink: "Cité dans l'Activité 1.2 (Philippe Geluck a présenté une exposition à Paris)."
  },
  {
    title: "Jeff Koons à Versailles",
    subtitle: "Le choc entre Pop Art contemporain et patrimoine royal",
    author: "Jeff Koons (Château de Versailles)",
    imageSrc: versaillesImg,
    description: "En installant des homards géants gonflables et des fleurs monumentales dans les salons baroques du Roi-Soleil, l'artiste a déclenché une vague de protestations de détracteurs criant au scandale, tandis que d'autres y voyaient la suite logique de Versailles comme grand laboratoire de l'avant-garde.",
    examLink: "Support audio de la Partie 2 (Document 1 : scandale, détracteurs, préserver le patrimoine)."
  },
  {
    title: "La Nuit des Musées & Orsay",
    subtitle: "L'immersion nocturne et l'émotion face à Van Gogh",
    author: "Vincent Van Gogh (Musée d'Orsay, Paris)",
    imageSrc: nuitMuseesImg,
    description: "Un événement européen festif et gratuit qui métamorphose les galeries en espaces vivants avec musique et lumières douces. Le modèle d'examen de Camille s'en inspire pour décrire son coup de cœur devant « La Nuit étoilée sur le Rhône » peinte en plein air par Van Gogh.",
    examLink: "Support audio Document 2 et sujet modèle rédigé (Activité 3.3)."
  }
];
