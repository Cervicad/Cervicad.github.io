import Reveal from './Reveal'
import SectionHead from './SectionHead'

const SKILL_GROUPS = [
  {
    title: 'Réseau & protocoles',
    items: [
      'TCP/IP',
      'MPLS/SR-MPLS',
      'TWAMP',
      'STAMP',
      'IOAM',
      'OWAMP',
      'IPSec',
      'ISIS',
      'Routage',
      'QoS (DSCP)',
      'NTP',
      'SR-IOV',
      'ZigBee',
    ],
  },
  {
    title: 'Équipements & analyse',
    items: [
      'Cisco',
      'Juniper',
      'Nokia',
      'Arista',
      'Stormshield',
      'Anue (simulateur)',
      'Wireshark',
      'Tcpdump',
      'Tshark',
      'Perfsonar',
    ],
  },
  {
    title: 'Développement',
    items: [
      'Shell',
      'AWK',
      'Bash',
      'Python',
      'TypeScript',
      'Java',
      'SQL',
      'Angular',
      'React',
      'Spring',
      'HTML/CSS',
      'C',
      'C++',
      'JavaScript',
      'PHP',
      'PowerShell',
      'MATLAB',
    ],
  },
  {
    title: 'DevOps & outils',
    items: [
      'Docker',
      'Kubernetes',
      'Linux',
      'Ansible',
      'GitLab',
      'n8n',
      'PyTorch',
      'Gerrit',
      'Jira',
      'VS Code',
      'VMware ESXi',
      'Home Assistant',
      'Jeedom',
    ],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead index="02" title="Compétences" />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <Reveal
              key={group.title}
              className="rounded-xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(22,56,83,0.05)]"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-ice-soft px-2.5 py-1 font-mono text-[11px] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
