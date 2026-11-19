import Reveal from './Reveal'
import SectionHead from './SectionHead'

type SkillLevel = 'avance' | 'intermediaire'

interface Skill {
  name: string
  level: SkillLevel
}

interface SkillGroup {
  title: string
  skills: Skill[]
}

/* Niveaux repris du CV : Avancé / Intermédiaire. */
const advanced = (names: string[]): Skill[] => names.map((name) => ({ name, level: 'avance' }))

const intermediate = (names: string[]): Skill[] =>
  names.map((name) => ({ name, level: 'intermediaire' }))

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Réseau & protocoles',
    skills: advanced([
      'TCP/IP',
      'MPLS/SR-MPLS',
      'TWAMP',
      'STAMP',
      'IOAM',
      'OWAMP',
      'IPSec',
      'Routage',
      'ISIS',
      'QoS (DSCP)',
      'NTP',
      'SR-IOV',
      'ZigBee',
    ]),
  },
  {
    title: 'Équipements & analyse',
    skills: advanced([
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
    ]),
  },
  {
    title: 'Développement',
    skills: [
      ...advanced([
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
        'MATLAB',
      ]),
      ...intermediate(['C', 'C++', 'JavaScript', 'PHP', 'PowerShell']),
    ],
  },
  {
    title: 'DevOps & outils',
    skills: [
      ...advanced([
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
      ]),
      ...intermediate(['VMware ESXi', 'Home Assistant', 'Jeedom']),
    ],
  },
]

/* Classes statiques par niveau (le compilateur Tailwind doit les voir au build). */
const LEVEL_STYLES: Record<SkillLevel, string> = {
  avance:
    'border-line-strong bg-ice-soft text-ink dark:border-ice/40 dark:bg-ice/15 dark:text-ice',
  intermediaire: 'border-line bg-card text-muted',
}

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
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`rounded-full border px-2.5 py-1 font-mono text-[11px] ${LEVEL_STYLES[skill.level]}`}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] text-muted">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-full border border-line-strong bg-ice-soft dark:border-ice/40 dark:bg-ice/15"
            />
            avancé
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] text-muted">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-full border border-line bg-card"
            />
            intermédiaire
          </span>
        </Reveal>
      </div>
    </section>
  )
}
