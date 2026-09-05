type Accent = 'green' | 'cyan'
type Level = 'advanced' | 'intermediate'

interface Skill {
  name: string
  level: Level
}

interface SkillCategory {
  section: string
  title: string
  accent: Accent
  skills: Skill[]
}

const CATEGORIES: SkillCategory[] = [
  {
    section: 'réseau',
    title: 'Réseau & protocoles',
    accent: 'green',
    skills: [
      { name: 'TCP/IP', level: 'advanced' },
      { name: 'MPLS', level: 'advanced' },
      { name: 'TWAMP', level: 'advanced' },
      { name: 'STAMP', level: 'advanced' },
      { name: 'IOAM', level: 'advanced' },
      { name: 'OWAMP', level: 'advanced' },
      { name: 'IPSec', level: 'advanced' },
      { name: 'ISIS', level: 'advanced' },
      { name: 'Routage', level: 'advanced' },
      { name: 'QoS (DSCP)', level: 'advanced' },
      { name: 'NTP', level: 'advanced' },
      { name: 'SR-IOV', level: 'advanced' },
      { name: 'ZigBee', level: 'advanced' },
    ],
  },
  {
    section: 'analyse',
    title: 'Équipements & analyse',
    accent: 'cyan',
    skills: [
      { name: 'Cisco', level: 'advanced' },
      { name: 'Juniper', level: 'advanced' },
      { name: 'Nokia', level: 'advanced' },
      { name: 'Arista', level: 'advanced' },
      { name: 'Stormshield', level: 'advanced' },
      { name: 'Anue (simulateur)', level: 'advanced' },
      { name: 'Wireshark', level: 'advanced' },
      { name: 'Tcpdump', level: 'advanced' },
      { name: 'Tshark', level: 'advanced' },
      { name: 'Perfsonar', level: 'advanced' },
    ],
  },
  {
    section: 'dev',
    title: 'Développement',
    accent: 'cyan',
    skills: [
      { name: 'Shell', level: 'advanced' },
      { name: 'AWK', level: 'advanced' },
      { name: 'Bash', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'Java', level: 'advanced' },
      { name: 'SQL', level: 'advanced' },
      { name: 'Angular', level: 'advanced' },
      { name: 'React', level: 'advanced' },
      { name: 'Spring', level: 'advanced' },
      { name: 'HTML/CSS', level: 'advanced' },
      { name: 'C', level: 'intermediate' },
      { name: 'C++', level: 'intermediate' },
      { name: 'JavaScript', level: 'intermediate' },
      { name: 'PHP', level: 'intermediate' },
      { name: 'PowerShell', level: 'intermediate' },
      { name: 'MATLAB', level: 'intermediate' },
    ],
  },
  {
    section: 'devops',
    title: 'DevOps & outils',
    accent: 'green',
    skills: [
      { name: 'Docker', level: 'advanced' },
      { name: 'Kubernetes', level: 'advanced' },
      { name: 'Linux', level: 'advanced' },
      { name: 'Ansible', level: 'advanced' },
      { name: 'GitLab', level: 'advanced' },
      { name: 'n8n', level: 'advanced' },
      { name: 'PyTorch', level: 'advanced' },
      { name: 'Gerrit', level: 'advanced' },
      { name: 'Jira', level: 'advanced' },
      { name: 'VS Code', level: 'advanced' },
      { name: 'VMware ESXi', level: 'intermediate' },
      { name: 'Home Assistant', level: 'intermediate' },
      { name: 'Jeedom', level: 'intermediate' },
    ],
  },
]

// Classes statiques par accent (requis par Tailwind pour ne pas rater les classes au build)
const SECTION_STYLES: Record<Accent, string> = {
  green: 'text-neon-green',
  cyan: 'text-neon-cyan',
}

// Niveaux de maîtrise : avancé mis en avant, intermédiaire plus discret
const LEVEL_STYLES: Record<Level, string> = {
  advanced: 'border-line-strong text-fg hover:border-neon-green/50 hover:text-neon-green',
  intermediate: 'border-line text-muted hover:border-neon-cyan/50 hover:text-neon-cyan',
}

export default function Skills() {
  return (
    <section id="competences" className="scroll-mt-24 py-20">
      {/* Titre de section façon invite de commande */}
      <div className="mb-4 flex items-center gap-4">
        <h2 className="font-mono text-xl font-bold text-white sm:text-2xl">
          <span className="text-neon-green">$</span> cat ./skills.conf
        </h2>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent"
        />
      </div>

      {/* Légende des niveaux, façon commentaires de fichier de configuration */}
      <p className="mb-10 font-mono text-[11px] text-muted">
        <span className="text-muted/60"># niveau :</span>{' '}
        <span className="rounded border border-line-strong px-1.5 py-0.5 text-fg">
          avancé
        </span>{' '}
        <span className="rounded border border-line px-1.5 py-0.5 text-muted">
          intermédiaire
        </span>
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CATEGORIES.map((category) => (
          <article
            key={category.section}
            className="rounded-lg border border-line bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-line-strong"
          >
            <h3 className="font-mono text-sm font-bold text-white">
              <span className={SECTION_STYLES[category.accent]}>
                [{category.section}]
              </span>{' '}
              {category.title}
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={`rounded border bg-base/80 px-2 py-1 font-mono text-[11px] transition-colors duration-200 ${LEVEL_STYLES[skill.level]}`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
