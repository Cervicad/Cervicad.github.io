import CaseStudyLayout from '../components/CaseStudyLayout'
import synericNetatmo from '../assets/case-studies/syneric-netatmo.png'
import synericMaquette from '../assets/case-studies/syneric-maquette.jpg'
import synericIsurpass from '../assets/case-studies/syneric-isurpass.png'

export default function CaseStudySyneric() {
  return (
    <CaseStudyLayout
      eyebrow="Étude de cas — IoT & supervision"
      title="Supervision d'une PME Industrielle"
      subtitle="Instrumentation Z-Wave d'une PME de 7 personnes sous Jeedom : cuves de solvant, salle serveurs et recharge VE, accessibles à tout le personnel sans formation lourde."
      meta={[
        'BTS SIO (2ᵉ année)',
        'Pôle Sup La Salle, Rennes',
        '3 janv. — 4 févr. 2022',
        '5 semaines',
        'Syneric (groupe Ouest Pack)',
        'Perros-Guirec (22)',
      ]}
      context={[
        "Syneric (branche commerciale d'Ouest Pack, PME de 7 personnes) ne disposait d'aucun outil de supervision : le niveau des cuves de solvant était indiqué par de simples lampes dans l'atelier, la salle serveurs n'était pas surveillée et la recharge des véhicules électriques n'était pas maîtrisée.",
        'Il fallait un système accessible à tout le personnel, sans formation lourde.',
      ]}
      constraints="5 semaines · PME de 7 personnes · équipements hétérogènes (Z-Wave, Netatmo, iSurpass)"
      sections={[
        {
          heading: 'Benchmark de solutions',
          body: "Installation comparative de GLPI (VM Ubuntu) et Jeedom (VM Debian) sur un hôte ESXi : Jeedom retenu pour son ergonomie et son interface de pilotage de modules connectés.",
        },
        {
          heading: 'Instrumentation Z-Wave',
          body: "Suivi des cuves de solvant par Smart-Implant Fibaro : schéma électrique, maquette puis mise en production dans l'atelier, avec alertes mail par niveau. Supervision de la salle serveurs (température, présence, SMTP) et remontée Netatmo.",
          images: [
            {
              src: synericMaquette,
              alt: 'Photo de la maquette du suivi des cuves de solvant avec modules Smart-Implant Fibaro',
              caption: 'Maquette du suivi des cuves de solvant',
            },
            {
              src: synericNetatmo,
              alt: 'Capture du tableau de bord Jeedom : capteurs Netatmo (température, CO₂, humidité, anémomètre, pluviomètre) et pilotage des zones de chauffage',
              caption: 'Tableau de bord des appareils Netatmo sur Jeedom',
            },
          ],
        },
        {
          heading: "Contrôle d'accès & mobilité",
          body: "Pointeuse à badges iSurpass appairée à Jeedom : remontée des identifiants, graphiques d'historique et documentation d'utilisation. Contrôle de la recharge des véhicules électriques par lecteur de badges pour maîtriser les coûts.",
          images: [
            {
              src: synericIsurpass,
              alt: "Photo du boîtier iSurpass avec son bouton d'appairage",
              caption: 'Boîtier iSurpass et son bouton d\u2019appairage',
            },
          ],
        },
      ]}
      stats={[
        { value: 'Cuves', label: 'alertes en production, utilisées au quotidien en remplacement des lampes atelier' },
        { value: 'VE', label: 'recharge sous contrôle par badges, visant la réduction des coûts d\u2019électricité' },
      ]}
      analysis="Le suivi des cuves de solvant est passé d'un système de lampes atelier à des alertes mail par niveau exploitées au quotidien, et la recharge des véhicules électriques est maîtrisée par lecteur de badges piloté Jeedom."
      nextSteps={[
        'Finalisation du contrôle de charge VE par badges',
        'Extension de la supervision à de nouveaux équipements communicants',
        "Historisation des niveaux de cuves pour anticiper les commandes fournisseurs",
        'Tableaux de bord consolidés pour le personnel non technique',
      ]}
    />
  )
}
