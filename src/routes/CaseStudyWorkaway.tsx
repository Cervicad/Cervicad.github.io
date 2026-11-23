import CaseStudyLayout from '../components/CaseStudyLayout'
import workawayChantier from '../assets/case-studies/workaway-04.jpg'
import workawayEpdm from '../assets/case-studies/workaway-03.jpg'
import workawayPlan3d from '../assets/case-studies/workaway-02.jpg'
import workawayPlans from '../assets/case-studies/workaway-01.jpg'

export default function CaseStudyWorkaway() {
  return (
    <CaseStudyLayout
      eyebrow="Étude de cas — Construction durable"
      title="Chantier Bénévole de Construction Durable"
      subtitle="Volontariat international Workaway à Aarschot (Belgique) : moulage ciment, soudure, charpente bois et isolation en paille sur un chantier de rénovation écologique."
      meta={[
        'Workaway — Aarschot, Belgique',
        'Juin — Août 2024',
        'Volontaire en construction durable',
      ]}
      context={[
        "Workaway met en relation des volontaires et des projets du monde entier. Ce chantier belge de construction durable réunit une équipe pluriculturelle autour de la rénovation d'une ferme en briques : structure en ossature bois sur plots en béton, isolation en paille et détails d'étanchéité soignés.",
        "L'objectif du volontariat : pratiquer le travail manuel en équipe internationale et mettre en application des principes d'ingénierie durable et de low-tech dans un contexte réel — le contrepoint terrain d'une formation d'ingénieur.",
      ]}
      constraints="communication quotidienne en anglais · méthodes et outils low-tech · travail manuel sur trois mois"
      sections={[
        {
          heading: 'Des plans au chantier',
          body: "Prise en main des plans techniques de la structure : ossature bois sur plots en béton, cotations et assemblages préparés en amont de chaque pose, avec des vues 3D servant de référence aux équipes.",
          images: [
            {
              src: workawayPlans,
              alt: 'Plans techniques imprimés : structure en poutres et poteaux bois avec cotations, et vues 3D des plots en béton avec fixations',
              caption: 'Étude des plans : ossature bois et plots béton',
            },
            {
              src: workawayPlan3d,
              alt: "Plan 3D de la structure : poteaux et poutres bois sur plots béton, fermeture et chevrons, cote manuscrite des hauteurs de poteaux",
              caption: 'Modèle 3D de la structure ossature bois',
            },
          ],
        },
        {
          heading: 'Gros œuvre et structure',
          body: "Moulage du ciment, soudure et levée de la charpente bois : les techniques structurelles du chantier, avec un soin particulier apporté aux détails d'étanchéité — membrane EPDM autour des points d'appui — qui conditionnent la durabilité de l'ouvrage.",
          images: [
            {
              src: workawayChantier,
              alt: "Chantier en cours : échafaudage et structure bois installés sur la façade d'une ferme en briques, bois empilé dans la cour",
              caption: 'Chantier : échafaudage et structure bois sur la façade',
            },
            {
              src: workawayEpdm,
              alt: "Détail de construction : poteau bois sur équerre métallique posée sur la dalle, étanchéité assurée par une membrane EPDM noire",
              caption: 'Détail d\u2019étanchéité : membrane EPDM au pied d\u2019un poteau',
            },
          ],
        },
        {
          heading: 'Isolation en paille et low-tech',
          body: "Isolation des murs en bottes de paille — technique écologique à forte inertie thermique — et mise en pratique des principes d'ingénierie durable et de low-tech : des solutions simples, réparables et sobres en ressources.",
        },
      ]}
      stats={[
        { value: '3 mois', label: 'de chantier bénévole international en équipe pluriculturelle' },
        { value: '4', label: 'techniques pratiquées : ciment, soudure, charpente bois, isolation paille' },
      ]}
      analysis="Une immersion complète dans la construction durable : lecture de plans, travail manuel exigeant et coordination au quotidien dans une équipe internationale — la mise à l'épreuve terrain des principes d'ingénierie."
    />
  )
}
