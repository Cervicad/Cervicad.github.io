import Reveal from './Reveal'
import SectionHead from './SectionHead'

type SkillLevel = 'avance' | 'intermediaire'

interface Skill {
  name: string
  level: SkillLevel
  /* Page où la compétence a été acquise : étude de cas (#/…) ou section Projets. */
  href: string
}

/* Niveaux repris du CV : Avancé / Intermédiaire. */
const advanced = (entries: Array<[string, string]>): Skill[] =>
  entries.map(([name, href]) => ({ name, href, level: 'avance' }))

const intermediate = (entries: Array<[string, string]>): Skill[] =>
  entries.map(([name, href]) => ({ name, href, level: 'intermediaire' }))

const SKILL_GROUPS = [
  {
    title: 'Réseau & protocoles',
    skills: advanced([
      ['TCP/IP', '#/orange'],
      ['MPLS/SR-MPLS', '#/orange'],
      ['TWAMP', '#/orange'],
      ['STAMP', '#/orange'],
      ['IOAM', '#/orange'],
      ['OWAMP', '#/orange'],
      ['IPSec', '#/orange'],
      ['Routage', '#/orange'],
      ['ISIS', '#/orange'],
      ['QoS (DSCP)', '#/orange'],
      ['NTP', '#/orange'],
      ['SR-IOV', '#/orange'],
      ['ZigBee', '#/famoco'],
    ]),
  },
  {
    title: 'Équipements & analyse',
    skills: advanced([
      ['Cisco', '#/orange'],
      ['Juniper', '#/orange'],
      ['Nokia', '#/orange'],
      ['Arista', '#/orange'],
      ['Stormshield', '#/ouestpack'],
      ['Anue (simulateur)', '#/orange'],
      ['Wireshark', '#/ouestpack'],
      ['Tcpdump', '#/orange'],
      ['Tshark', '#/orange'],
      ['Perfsonar', '#/orange'],
    ]),
  },
  {
    title: 'Développement',
    skills: [
      ...advanced([
        ['Shell', '#/orange'],
        ['AWK', '#/orange'],
        ['Bash', '#/orange'],
        ['C', '#projets'],
        ['Python', '#/pam'],
        ['TypeScript', '#/famoco'],
        ['Java', '#/famoco'],
        ['SQL', '#/famoco'],
        ['Angular', '#/famoco'],
        ['React', '#projets'],
        ['JavaSpring', '#/famoco'],
        ['HTML/CSS', '#/famoco'],
        ['MATLAB', '#projets'],
      ]),
      ...intermediate([
        ['C++', '#projets'],
        ['JavaScript', '#projets'],
        ['PHP', '#projets'],
        ['PowerShell', '#projets'],
      ]),
    ],
  },
  {
    title: 'DevOps & outils',
    skills: [
      ...advanced([
        ['Docker', '#/famoco'],
        ['Kubernetes', '#projets'],
        ['Linux', '#/orange'],
        ['Ansible', '#projets'],
        ['GitLab', '#/orange'],
        ['n8n', '#/prd'],
        ['PyTorch', '#/pam'],
        ['Gerrit', '#/famoco'],
        ['Jira', '#/famoco'],
        ['VS Code', '#projets'],
      ]),
      ...intermediate([
        ['VMware ESXi', '#/m2l'],
        ['Home Assistant', '#projets'],
        ['Jeedom', '#/syneric'],
      ]),
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
                  <li key={skill.name}>
                    <a
                      href={skill.href}
                      className={`rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 hover:border-accent hover:text-accent ${LEVEL_STYLES[skill.level]}`}
                    >
                      {skill.name}
                    </a>
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
          <span className="font-mono text-[11px] text-muted">
            — cliquer sur une compétence pour ouvrir le projet où elle a été acquise
          </span>
        </Reveal>
      </div>
    </section>
  )
}
