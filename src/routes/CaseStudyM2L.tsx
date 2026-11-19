import CaseStudyLayout from '../components/CaseStudyLayout'
import m2lEsxi from '../assets/case-studies/m2l-esxi.png'
import m2lPrtg from '../assets/case-studies/m2l-prtg.png'

export default function CaseStudyM2L() {
  return (
    <CaseStudyLayout
      eyebrow="Étude de cas — Infrastructure & supervision"
      title="Virtualisation et supervision de la ferme de serveurs de la M2L"
      subtitle="Projet BTS SIO en mode service : remplacer les serveurs physiques vieillissants de la Maison des Ligues de Lorraine par une ferme virtualisée (hyperviseur de type 1) et la superviser par sondes PRTG."
      meta={['BTS SIO 2ᵉ année (AP3)', 'Pôle Sup La Salle — Rennes', 'M2L · Maison des Ligues de Lorraine', '2022']}
      context={[
        'La Maison des Ligues de Lorraine, financée par le Conseil Régional et administrée par le CROSL, héberge 24 structures — ligues sportives régionales et comités départementaux — dans quatre bâtiments : 80 bureaux, un amphithéâtre de 200 places, 8 salles de réunion et une salle multimédia de 24 postes.',
        "L'infrastructure repose sur des serveurs physiques vieillissants : annuaire et fichiers (également DHCP/DNS), impression, stockage sans redondance, gestion d'actifs — plus un serveur web en DMZ. Les objectifs du projet : remplacer le parc obsolète, optimiser les ressources, centraliser l'administration, renforcer la sécurité et le plan de reprise d'activité, réduire coûts et consommation.",
      ]}
      constraints="hyperviseur de type 1 imposé · serveurs physiques tolérants aux pannes · administration centralisée · libre choix de l'outil de supervision"
      sections={[
        {
          heading: 'Analyse et conduite en mode projet',
          body: "Analyse du cahier des charges et de l'impact sur le système d'information, dossier de choix de solution, maquettage, installation, mise en production et recette : le projet déroule les étapes du mode projet — planification, suivi, documentation — jusqu'à la fiche de recette validée par le client.",
        },
        {
          heading: 'Maquette de virtualisation ESXi',
          body: "Maquettage de la ferme de serveurs sur hyperviseur VMware ESXi (type 1) : serveurs Windows Server 2016, passerelle pfSense pour la segmentation (LAN clients, DMZ, WAN) et maquette réseau Packet Tracer pour valider adressage et routement avant déploiement.",
          images: [
            {
              src: m2lEsxi,
              alt: "Client vSphere : inventaire des machines virtuelles de la maquette — routeur, serveur web/FTP et serveur de messagerie",
              caption: 'Maquette ESXi : machines virtuelles (routeur, web/FTP, messagerie)',
            },
          ],
        },
        {
          heading: 'Supervision PRTG par sondes',
          body: "Installation et configuration du serveur de supervision PRTG : disponibilité en temps réel des serveurs et services, métrologie des éléments de base — espace disque, consommation CPU et RAM — via le service SNMP des Windows Server. Extinction puis surcharge d'un service constatées en direct pour la fiche de test ; procédures d'installation et de configuration documentées.",
          images: [
            {
              src: m2lPrtg,
              alt: 'Tableau de bord PRTG : sonde locale, passerelles, switch DMZ, poste client et serveur web supervisés avec états et temps de réponse',
              caption: 'Tableau de bord PRTG : passerelles, DMZ, client et serveur web',
            },
          ],
        },
      ]}
      stats={[
        { value: '24', label: 'structures hébergées dans 4 bâtiments (80 bureaux)' },
        { value: 'Type 1', label: 'hyperviseur retenu (bare-metal ESXi)' },
        { value: 'PRTG', label: 'supervision par sondes : disque, CPU, RAM, disponibilité' },
      ]}
      analysis="Une chaîne complète en mode service : analyse de l'existant, maquette de virtualisation tolérante aux pannes, supervision métrologique et documentation. Les serveurs critiques — web/FTP, messagerie — sont rejoués en machines virtuelles derrière une passerelle pfSense qui segmente LAN, DMZ et WAN."
      nextSteps={[
        'Hébergement interne de la messagerie m2l-sport.net (actuellement chez un prestataire externe)',
        'Annuaire central intégrant les postes des ligues (aujourd\u2019hui indépendants)',
        'Étude d\u2019un service de VoIP avec comptage poste par poste',
      ]}
    />
  )
}
