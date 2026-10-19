import React, { useState } from 'react';
import { 
  audioDoc1Script, 
  audioDoc2Script, 
  doc1Vocab, 
  doc2Vocab, 
  part2FillWords, 
  part2FillSentences 
} from '../data/workshopData';
import { AudioPlayer } from './AudioPlayer';
import { Volume2, CheckCircle2, XCircle, RotateCcw, HelpCircle, BookOpen } from 'lucide-react';
import { speakFrenchText } from '../utils/speech';

interface ComprehensionOraleProps {
  onScoreUpdate: (activityKey: string, score: number, total: number) => void;
}

export const ComprehensionOrale: React.FC<ComprehensionOraleProps> = ({ onScoreUpdate }) => {
  const [fillAnswers21, setFillAnswers21] = useState<Record<number, string>>({});
  const [submitted21, setSubmitted21] = useState(false);
  const [selectedBlank21, setSelectedBlank21] = useState<number | null>(null);

  const handleWordBankClick = (word: string) => {
    if (selectedBlank21 !== null) {
      setFillAnswers21((prev) => ({ ...prev, [selectedBlank21]: word }));
      const nextEmpty = part2FillSentences.find(s => s.id > selectedBlank21 && !fillAnswers21[s.id]);
      if (nextEmpty) {
        setSelectedBlank21(nextEmpty.id);
      } else {
        setSelectedBlank21(null);
      }
    }
  };

  const calculateScore21 = () => {
    let score = 0;
    part2FillSentences.forEach((item) => {
      if (fillAnswers21[item.id]?.toLowerCase().trim() === item.correctAnswer.toLowerCase()) {
        score += 1;
      }
    });
    return score;
  };

  const handleValidate21 = () => {
    setSubmitted21(true);
    const score = calculateScore21();
    onScoreUpdate('part2_1', score, part2FillSentences.length);
  };

  const handleReset21 = () => {
    setFillAnswers21({});
    setSubmitted21(false);
    setSelectedBlank21(null);
    onScoreUpdate('part2_1', 0, part2FillSentences.length);
  };

  const score21 = calculateScore21();

  return (
    <div className="space-y-12">
      {/* Editorial Header */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-medium uppercase tracking-wider mb-2">
            <span>Partie 2</span>
            <span aria-hidden="true">·</span>
            <span>Compréhension orale</span>
            <span aria-hidden="true">·</span>
            <span>Le vocabulaire des enregistrements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Écoute, Débats & Sorties Culturelles
          </h2>
          <p className="text-sm sm:text-base text-stone-300 mt-2 leading-relaxed">
            Travaillez votre compréhension à l'audition sur deux thèmes majeurs de l'examen : la polémique
            autour de l'exposition d'art contemporain au château de Versailles, et l'invitation à la Nuit européenne des musées.
          </p>
        </div>
      </div>

      {/* DOCUMENT 1 SECTION */}
      <div className="space-y-8">
        <div className="border-b border-stone-200 pb-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Document 1
          </div>
          <h3 className="text-xl font-bold font-serif text-stone-900">
            Le scandale Jeff Koons au Château de Versailles
          </h3>
        </div>

        {/* Audio Player Document 1 */}
        <AudioPlayer
          docLabel="Document Audio 1 · Débat culturel"
          title="Radio Culture : Controverse à la grille d'honneur du château"
          subtitle="Écoutez l'enregistrement à vitesse normale ou ralentie avant de travailler le vocabulaire."
          scriptText={audioDoc1Script}
        />

        {/* Vocabulary Table Document 1 (French / Definition / Spanish) */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-lg mb-4">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <h4>Lexique clé du Document 1 (avec traduction en espagnol)</h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider font-semibold text-[11px]">
                  <th className="py-2.5 px-3">Mot ou expression</th>
                  <th className="py-2.5 px-3">Définition simple</th>
                  <th className="py-2.5 px-3 text-stone-600">En español</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {doc1Vocab.map((item, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/70 transition-colors">
                    <td className="py-3 px-3 font-semibold text-stone-900 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => speakFrenchText(item.french)}
                          title="Écouter le mot"
                          className="p-1 text-stone-400 hover:text-amber-600 transition-colors"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <span>{item.french}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-stone-700 leading-relaxed">
                      {item.definition}
                    </td>
                    <td className="py-3 px-3 font-serif italic text-amber-800 whitespace-nowrap">
                      {item.spanish}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activité 2.1 : Complète avec le bon mot */}
        <section className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Activité 2.1
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900 mt-0.5">
                Complète les phrases avec le bon mot
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Utilise les mots du vocabulaire du Document 1 pour compléter le compte-rendu.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {submitted21 && (
                <span className="text-xs font-mono font-bold px-3 py-1.5 bg-stone-100 rounded-lg text-stone-800 border border-stone-200">
                  Score : {score21} / {part2FillSentences.length}
                </span>
              )}
              <button
                onClick={handleReset21}
                title="Réinitialiser l'exercice"
                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Word Bank 2.1 */}
          <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                Mots à placer :
              </span>
              <span className="text-xs text-stone-400">
                {selectedBlank21 ? `Placement dans la phrase n°${selectedBlank21}` : 'Sélectionne un trou'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {part2FillWords.map((word) => {
                const isUsed = Object.values(fillAnswers21).includes(word);
                return (
                  <button
                    key={word}
                    onClick={() => handleWordBankClick(word)}
                    disabled={submitted21}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                      isUsed
                        ? 'bg-stone-200 text-stone-400 border-stone-200 line-through'
                        : selectedBlank21 !== null
                        ? 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200 font-semibold'
                        : 'bg-white text-stone-800 border-stone-300 hover:border-stone-400'
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sentences 2.1 */}
          <div className="space-y-4 mt-6">
            {part2FillSentences.map((sentence) => {
              const currentAnswer = fillAnswers21[sentence.id] || '';
              const isSelected = selectedBlank21 === sentence.id;
              const isCorrect = submitted21 && currentAnswer.toLowerCase() === sentence.correctAnswer.toLowerCase();
              const isWrong = submitted21 && currentAnswer && currentAnswer.toLowerCase() !== sentence.correctAnswer.toLowerCase();

              return (
                <div
                  key={sentence.id}
                  className={`p-4 rounded-lg border text-sm sm:text-base leading-relaxed transition-all ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50/30'
                      : 'border-stone-200 bg-white'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-stone-400 mr-1">
                      {sentence.id}.
                    </span>
                    <span>{sentence.sentenceBefore}</span>

                    <button
                      onClick={() => !submitted21 && setSelectedBlank21(sentence.id)}
                      className={`inline-flex items-center justify-center min-w-[130px] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold border transition-all ${
                        isSelected
                          ? 'border-amber-600 bg-amber-100 text-amber-950 ring-2 ring-amber-400/40'
                          : currentAnswer
                          ? isCorrect
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                            : isWrong
                            ? 'border-rose-300 bg-rose-50 text-rose-800'
                            : 'border-stone-300 bg-stone-100 text-stone-900'
                          : 'border-dashed border-stone-300 bg-stone-50 text-stone-400 hover:border-amber-400'
                      }`}
                    >
                      {currentAnswer || 'Clique ici'}
                    </button>

                    <span>{sentence.sentenceAfter}</span>

                    {submitted21 && (
                      <span className="ml-auto flex items-center gap-1">
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <div className="flex items-center gap-1 text-xs text-rose-600 font-medium">
                            <XCircle className="w-4 h-4 text-rose-600" />
                            <span>Réponse : <strong>{sentence.correctAnswer}</strong></span>
                          </div>
                        )}
                      </span>
                    )}
                  </div>

                  {isSelected && sentence.hint && !submitted21 && (
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-amber-700 bg-amber-50/80 p-2 rounded">
                      <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Indice : {sentence.hint}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Actions 2.1 */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-500">
              {Object.keys(fillAnswers21).length} sur {part2FillSentences.length} phrases complétées.
            </p>

            <div className="flex items-center gap-3">
              {!submitted21 ? (
                <button
                  onClick={handleValidate21}
                  disabled={Object.keys(fillAnswers21).length === 0}
                  className="px-5 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 disabled:opacity-40 transition-colors"
                >
                  Vérifier mes réponses
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-xs text-stone-600">
                    Score : <strong>{score21}/{part2FillSentences.length}</strong>
                  </span>
                  <button
                    onClick={handleReset21}
                    className="px-4 py-2 bg-stone-100 text-stone-800 rounded-lg text-xs font-semibold hover:bg-stone-200 transition-colors"
                  >
                    Recommencer
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* DOCUMENT 2 SECTION */}
      <div className="space-y-8 pt-6 border-t border-stone-200">
        <div className="border-b border-stone-200 pb-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Document 2
          </div>
          <h3 className="text-xl font-bold font-serif text-stone-900">
            La Nuit européenne des Musées
          </h3>
        </div>

        {/* Audio Player Document 2 */}
        <AudioPlayer
          docLabel="Document Audio 2 · Reportage & Invitation"
          title="Radio Culture : Sortir la nuit au musée !"
          subtitle="Écoutez ce reportage pour mémoriser les expressions pratiques de la visite culturelle."
          scriptText={audioDoc2Script}
        />

        {/* Vocabulary Table Document 2 */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-lg mb-4">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <h4>Lexique clé du Document 2 (avec traduction en espagnol)</h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider font-semibold text-[11px]">
                  <th className="py-2.5 px-3">Mot ou expression</th>
                  <th className="py-2.5 px-3">Définition simple</th>
                  <th className="py-2.5 px-3 text-stone-600">En español</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {doc2Vocab.map((item, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/70 transition-colors">
                    <td className="py-3 px-3 font-semibold text-stone-900 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => speakFrenchText(item.french)}
                          title="Écouter l'expression"
                          className="p-1 text-stone-400 hover:text-amber-600 transition-colors"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <span>{item.french}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-stone-700 leading-relaxed">
                      {item.definition}
                    </td>
                    <td className="py-3 px-3 font-serif italic text-amber-800 whitespace-nowrap">
                      {item.spanish}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
