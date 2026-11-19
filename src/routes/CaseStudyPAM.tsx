import CaseStudyLayout from '../components/CaseStudyLayout'

export default function CaseStudyPAM() {
  return (
    <CaseStudyLayout
      eyebrow="Case study — IA · Smart Farming"
      title="Classification du Comportement de Vaches Laitières"
      subtitle="Analyse multimodale du dataset MMCOWS : classification de 7 comportements par LSTM/CNN-LSTM et détection de profils atypiques."
      meta={[
        'ECAM Louis de Broglie',
        'Janv. — Mars 2026',
        'Équipe : K. Tallagrand, A. Jamet, B. Girard, B. Ithorotz',
        'Dataset MMCOWS',
        '16 vaches Holstein',
        'Université du Wisconsin',
      ]}
      context={[
        'Le projet cherche à objectiver le bien-être animal grâce aux capteurs.',
        "Le dataset MMCOWS (14 jours d'acquisition sur une ferme expérimentale de l'Université du Wisconsin) fournit des flux massifs et hétérogènes : localisation 3D UWB, capteurs inertiels, posture, production laitière.",
        "Des fréquences allant de 10 Hz à une mesure par jour et des annotations comportementales incomplètes rendent l'exploitation directe impossible : harmonisation et modélisation s'imposent.",
      ]}
      constraints="synchronisation temporelle multi-capteurs · ~2 % de valeurs manquantes · labels « Unknown » (~18 %)"
      sections={[
        {
          heading: 'Exploration & corrélations',
          body: "Étude exploratoire complète : matrices de corrélation (Pearson), ANOVA et eta², et heatmaps spatiales révélant les « hotspots » comportementaux de l'étable. Quatre itérations de datasets : synchronisation multi-capteurs à 1 Hz, distances aux zones d'intérêt, fenêtres glissantes de 10 s (vitesse lissée, Motion Score). Split par vaches pour garantir la généralisation.",
        },
        {
          heading: 'Modélisation comparative',
          body: "De la baseline Random Forest à l'hybride CNN-LSTM : le module CNN extrait le « rythme » des signaux d'accélération, le LSTM assure la cohérence temporelle. Sept comportements classifiés.",
        },
        {
          heading: 'Analyse comportementale',
          body: "Au-delà de la classification, exploitation des labels pour une première approche de surveillance individuelle : le budget-temps de chaque vache est comparé à la moyenne du troupeau via un z-score, pour identifier les écarts notables (∣z∣ ≥ 1) et forts (∣z∣ ≥ 2).",
        },
      ]}
      stats={[
        { value: '0.74', label: 'Macro F1 — meilleur score CNN-LSTM sur le dataset le plus enrichi' },
        { value: '0.15 → 0.71', label: 'rappel marche entre la baseline Random Forest et le CNN-LSTM (fenêtres de 10 s)' },
        { value: '7', label: 'comportements classifiés' },
      ]}
      analysis="Repos dominant (42 %), activité locomotrice (23 %), alimentation (15 %). Rappel de 0.93 sur l'abreuvement pour une détection quasi exhaustive des événements critiques. Profils atypiques détectés — comme la vache C06 (↓ repos, ↑ activité, compatible avec une phase de vêlage)."
      nextSteps={[
        'Analyse multi-jours pour consolider la détection d\u2019atypismes',
        'Croisement avec des données physiologiques (température fine, suivis vétérinaires)',
        "Exploitation de la modalité caméra (visual_data), restée hors périmètre",
        "Vers un outil de surveillance comportementale du troupeau en temps réel",
      ]}
    />
  )
}
