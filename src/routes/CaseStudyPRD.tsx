import CaseStudyLayout from '../components/CaseStudyLayout'
import prdPoster from '../assets/case-studies/prd-poster.png'

export default function CaseStudyPRD() {
  return (
    <CaseStudyLayout
      eyebrow="Étude de cas — IA Agents"
      title="Automatisation de Rapports Réglementaires par IA Agents"
      subtitle="Workflow n8n d'orchestration d'agents IA pour l'extraction de données financières (DIC, Term Sheets) et la génération de rapports d'adéquation conformes AMF."
      meta={[
        'ECAM Louis de Broglie',
        'Forum PRD mars 2026',
        'Équipe : Kevin Tallagrand & Antoine Jamet',
      ]}
      context={[
        "Les acteurs du secteur financier doivent produire des rapports d'adéquation conformes aux exigences de l'AMF.",
        "Ces documents sont construits manuellement à partir de sources hétérogènes (DIC, Term Sheets, données internes), rendant le processus chronophage, peu évolutif et faiblement automatisé.",
      ]}
      constraints="documents PDF non standardisés · données financières confidentielles (RGPD)"
      sections={[
        {
          heading: 'Extraction hétérogène',
          body: "Parsing de documents financiers non standardisés (DIC, Term Sheets) via OCR : conversion de PDF conçus pour une lecture humaine en texte exploitable par des agents.",
        },
        {
          heading: "Orchestration d'agents IA",
          body: "Coordination d'agents IA spécialisés — un agent par bloc du rapport — pour une extraction structurée et progressive. Garde-fous de cohérence et itérations limitées pour fiabiliser chaque section.",
        },
        {
          heading: 'Génération dynamique',
          body: "Organisation des données extraites en variables structurées, puis injection dynamique dans un template HTML (placeholders) pour produire le rapport réglementaire « Phoenix ».",
          images: [
            {
              src: prdPoster,
              alt: "Poster académique du projet PRD : extraction OCR des documents financiers, orchestration des agents IA et génération du rapport final",
              caption: 'Poster académique du projet — Forum PRD, mars 2026',
            },
          ],
        },
      ]}
      stats={[{ value: '3–4 min', label: 'pour la génération complète d\u2019un rapport, contre plusieurs heures de traitement manuel' }]}
      analysis="Réduction drastique du temps de production. Faisabilité prouvée : extraction fiable pour les documents bien structurés, opérationnelle sur plusieurs émetteurs et formats."
      nextSteps={[
        'Extraction plus fine des informations (tableaux complexes, mises en page hétérogènes)',
        'Ajout de contrôles qualité explicites',
        'Amélioration du rendu final',
        'Industrialisation via une architecture dédiée (scalabilité, nouvelles sources)',
      ]}
    />
  )
}
