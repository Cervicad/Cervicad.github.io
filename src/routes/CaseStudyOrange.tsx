import CaseStudyLayout from '../components/CaseStudyLayout'
import orangeCarto from '../assets/case-studies/orange-carto.png'
import orangeDatagram from '../assets/case-studies/orange-datagram.png'
import orangeKalman from '../assets/case-studies/orange-kalman.png'
import orangeMirroring from '../assets/case-studies/orange-mirroring.png'
import orangePerfsonarFix from '../assets/case-studies/orange-perfsonar-fix.png'
import orangeSandwich from '../assets/case-studies/orange-sandwich.png'
import orangeTransit from '../assets/case-studies/orange-transit.png'

export default function CaseStudyOrange() {
  return (
    <CaseStudyLayout
      eyebrow="Étude de cas — Réseau & mesure de performance"
      title="Mesure de Performance Réseau en Environnement MPLS"
      subtitle="Conception d'une chaîne de mesure complète — latence, gigue et pertes — sur le banc multi-fournisseurs du laboratoire d'Orange Innovation à Lannion."
      meta={[
        "Stage de fin d'études ECAM5e",
        'Orange Innovation — Lannion',
        '23 mars — 22 sept. 2026',
        '26 semaines',
        'Équipe réseau du laboratoire',
      ]}
      context={[
        'La qualité de service exigée par la téléphonie sur IP, la vidéo temps réel et les applications industrielles connectées fait de la mesure de performance un enjeu stratégique pour un opérateur : savoir mesurer finement la latence, la gigue et les pertes d\u2019une infrastructure MPLS, c\u2019est pouvoir garantir contractuellement sa qualité de service.',
        'La fiabilité de ces mesures dépend de trois facteurs : la qualité des protocoles de mesure, la précision de la synchronisation temporelle des équipements, et la capacité à isoler les artefacts de l\u2019environnement de test. La mission : concevoir et développer une solution fiable, reproductible et déployable, en trois phases — validation des instruments, instrumentation du paquet MPLS, puis calibration et automatisation.',
      ]}
      constraints="horloges de routeurs désynchronisées (pentes de 5 à 27 ppm) · comportements non standard de certains équipements multi-constructeurs · validation confinée au banc de laboratoire"
      sections={[
        {
          heading: 'Validation des instruments : TWAMP, Perfsonar, tcpdump',
          body: "Conteneurisation de l'outillage sous Alpine Linux — image 40 fois plus légère que Debian (31 Mo contre 1,24 Go) — puis tests avec le simulateur de réseau Anue. Les limites de Perfsonar sont documentées : non-détection de la corruption DSCP, pertes TWAMP dès 1 ms d'intervalle, bug du payload aléatoire corrigé via force-payload-0. La bascule vers tcpdump et l'extraction AWK repousse le seuil de perte à 24 µs — 100 000 paquets émis à 1 ms puis 100 µs d'intervalle sans impact — avec priorité temps réel chrt -f 99 pour twping.",
          images: [
            {
              src: orangePerfsonarFix,
              alt: "Diagramme de séquence des appels système de twping : ajustements d'horloge à chaque paquet avant modification, simple émission/réception après correction du code source",
              caption: 'Suppression des ajustements d\u2019horloge de twping — avant / après correction',
            },
          ],
        },
        {
          heading: 'Instrumentation du paquet MPLS',
          body: "Développement d'un générateur de paquets bruts paramétrable (mpls.sh) : adresses MAC, IP, TTL, pile de labels, champ DSCP, protocole embarqué (253, UDP ou ICMP) avec checksums recalculés. Exploitation de l'option IP Timestamp — avec la découverte de la limite des quatre blocs adresse+timestamp — et de l'ICMP Timestamp (types 13/14), jusqu'au paquet rebond multi-routeurs avec horodatages embarqués, validé en laboratoire.",
          images: [
            {
              src: orangeDatagram,
              alt: "Diagramme annoté d'un paquet : trame Ethernet, en-têtes de labels MPLS, en-tête IPv4 et option IP Timestamp (adresse + horodatage par routeur traversé)",
              caption: 'Structure d\u2019un paquet MPLS avec option IP Timestamp',
            },
          ],
        },
        {
          heading: 'Cartographie ISIS du laboratoire',
          body: "Script isis2net.awk : à partir de la base d'état de liens ISIS, placement automatique des constellations de routeurs par l'algorithme Fruchterman-Reingold (Force-Directed Placement), métriques des liens pondérées par médiane, rendu via la bibliothèque interne edgar. Évolution proposée avec l'équipe : un service d'écoute alimentant la cartographie en continu, pour suivre en temps réel les chemins empruntés par les paquets.",
          images: [
            {
              src: orangeMirroring,
              alt: "Pipeline de cartographie : génération de paquets par scripts, émission via rawsend, capture par port mirroring tcpdump, traitement AWK et rendu du graphe dans edgra",
              caption: 'Chaîne de cartographie : port mirroring, traitement AWK et rendu edgra',
            },
            {
              src: orangeCarto,
              alt: 'Cartographie du réseau de laboratoire : routeurs interconnectés avec le trajet mis en évidence du paquet utilisant un label MPLS',
              caption: 'Cartographie du réseau de laboratoire — trajet d\u2019un paquet par label MPLS',
            },
          ],
        },
        {
          heading: 'Calibration Kalman et campagnes automatisées',
          body: "L'outil de campagne measures.sh pilote les mesures par simple liste de routeurs, avec émission par pipe vers rawsend (suppression des écritures disque). Un filtre de Kalman estime pente et offset de chaque horloge, neutralise les sauts d'horloge (wrap-around du compteur 32 bits détecté sur Nokia : 49 jours) et calcule délais aller, retour et RTT. Les paquets « transit » isolent enfin le délai réseau réel — RTT de l'ordre de 100 µs contre 1,3 ms pour les paquets horodatés.",
          images: [
            {
              src: orangeKalman,
              alt: "Courbes de dérive d'horloge d'un routeur avant et après correction par le filtre de Kalman",
              caption: 'Dérive d\u2019horloge corrigée par le filtre de Kalman (ts_kalman.awk)',
            },
            {
              src: orangeTransit,
              alt: "Comparaison avant/après : paquet horodaté MPLS ICMPTS ou OPTIP (RTT 1,3 ms) contre paquet transit (RTT 100 µs), avec relevés min_transit et graphe de délais et d'horloge",
              caption: 'Paquets transit vs paquets horodatés — délai réseau réel (100 µs contre 1,3 ms)',
            },
            {
              src: orangeSandwich,
              alt: "Représentation en échelle logarithmique des délais et horodatages des paquets sandwich : horloge brute, temps retour réseau pur et horloge synchronisée",
              caption: 'Délais et timestamps des paquets sandwich en échelle logarithmique (Nokia SR7)',
            },
          ],
        },
      ]}
      stats={[
	    { value: '5', label: 'Marques de routeurs testées (Nokia, Cisco, Juniper, Arista et Alcatel)' },
		{ value: '10', label: 'Modèles de routeurs analysées et testées (PTX10004, MX2010, SR2S, ASR9900, SR-7 ...)' },
        { value: '40:1', label: 'ratio de conteneurisation Alpine — 31 Mo contre 1,24 Go Debian' },
        { value: '24 µs', label: 'seuil de perte de la chaîne tcpdump + AWK' },
        { value: '49 j', label: 'saut d\u2019horloge parasite détecté et annulé dans la calibration (compteur 32 bits)' },
      ]}
      analysis="Sept scripts livrés et documentés sur GitLab, dont measures.sh, adopté par les ingénieurs de l'équipe pour leurs campagnes de mesure. La calibration multi-constructeurs (Juniper, Arista, Cisco, Nokia, Alcatel) caractérise les dérives de 5 à 27 ppm et leur corrélation thermique, et distingue le délai réseau réel du coût d'horodatage des équipements."
      nextSteps={[
        'Service dynamique edgar : monitoring temps réel de la cartographie',
        'Généralisation de la détection de sauts d\u2019horloge à d\u2019autres compteurs (16 et 64 bits) et constructeurs',
        'Validation de la méthode MPLS-IP/UDP pour le troubleshooting de segments réseau',
      ]}
    />
  )
}
