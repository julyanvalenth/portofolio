import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiC,
  SiDart,
  SiExpress,
  SiFigma,
  SiFlutter,
  SiHtml5,
  SiKotlin,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscCode, VscVscode } from "react-icons/vsc";
import { Pill } from "../components/ui/Pill";
import { ArrowLink } from "../components/ui/ArrowLink";
import { Chip } from "../components/ui/Chip";
import { ProjectTeaserCard } from "../components/ProjectTeaserCard";
import { BackToTop } from "../components/BackToTop";
import { JakartaClock } from "../components/JakartaClock";
import {
  contact,
  education,
  projects,
  orgRoles,
  skillGroups,
  techStack,
} from "../data/content";
import portrait from "../../public/images/foto.png";
import styles from "./Home.module.css";

const techIcons: Record<string, IconType> = {
  Flutter: SiFlutter,
  Dart: SiDart,
  Kotlin: SiKotlin,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  ReactJS: SiReact,
  TypeScript: SiTypescript,
  Python: SiPython,
  Figma: SiFigma,
  C: SiC,
  "HTML/CSS": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  VSCode: VscVscode,
};

export function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={["shell", styles.heroInner].join(" ")}>
          <div className={styles.metaRow}>
            <span>Portfolio — 2026</span>
            <span className={styles.available}>
              <span className={styles.availableDot} aria-hidden="true" />
              Available for work
            </span>
            <span>
              Jakarta, ID · <JakartaClock className={styles.metaClock} /> WIB
            </span>
          </div>

          <div className={styles.nameStage}>
            <h1 className={[styles.nameLine, styles.outline].join(" ")}>Julyan</h1>
            <Image src={portrait} alt="Portrait of Julyan Valenth" className={styles.portrait} priority />
            <h1 className={[styles.nameLine, styles.solid].join(" ")}>Valenth</h1>
          </div>

          <div className={styles.introRow}>
            <div className={styles.introLead}>
              <p className={styles.helloText}>Hello, I&apos;m</p>
              <div className={styles.roleTag}>
                <span className={styles.roleBar} aria-hidden="true" />
                Software Engineer
                <span className={styles.roleCaret} aria-hidden="true" />
              </div>
            </div>
            <p className={styles.introText}>
              Computer Science student at BINUS, majoring in Software Engineering. I mostly build
              mobile apps with Flutter, with Node.js on the back end.
            </p>
            <div className={styles.introActions}>
              <Pill as="link" to="/projects" tone="light">
                View my work →
              </Pill>
              <Pill
                as="a"
                href="/CV/Julyan-Valenth-Jonathan-Sambouw-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                tone="glass"
              >
                View CV ↗
              </Pill>
            </div>
          </div>
        </div>
      </section>

      <section className={["shell", styles.techStrip].join(" ")}>
        <span className={styles.techLabel}>Tech stack</span>
        <div className={styles.techMarquee}>
          <div className={styles.techTrack}>
            {[false, true].map((duplicate) => (
              <ul
                key={String(duplicate)}
                className={duplicate ? [styles.techGroup, styles.techGroupClone].join(" ") : styles.techGroup}
                aria-hidden={duplicate || undefined}
              >
                {techStack.map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <li key={tech} className={styles.techItem}>
                      {Icon && <Icon className={styles.techIcon} aria-hidden="true" />}
                      {tech}
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={["shell", styles.about].join(" ")}>
        <div className={styles.aboutLeft}>
          <span className={styles.sectionEyebrow}>01 — About me</span>
          <h2 className={styles.aboutHeading}>Turning ideas into real mobile products</h2>
          <p className={styles.tagline}>clean code, sharp solutions</p>
          <blockquote className={styles.quoteCard}>
            <p>&ldquo;{education.quote.text}&rdquo;</p>
          </blockquote>
        </div>

        <div className={styles.aboutRight}>
          <p className={styles.aboutParagraph}>
            Hi, I&apos;m Julyan Valenth Jonathan Sambouw, a Computer Science student in Jakarta
            majoring in Software Engineering. Most of what I build is mobile: Flutter apps, usually
            with an API I wrote myself behind them.
          </p>
          <p className={styles.aboutParagraphMuted}>
            I work on both sides, the app and the server, so I can take a feature from the database
            to the screen on my own.
          </p>

          <div className={styles.skillPanel}>
            <span className={styles.skillPanelLabel}>Skills &amp; tools</span>
            <dl className={styles.skillGroups}>
              {skillGroups.map((group) => (
                <div key={group.label} className={styles.skillGroup}>
                  <dt className={styles.skillGroupLabel}>{group.label}</dt>
                  <dd className={styles.skillChips}>
                    {group.items.map((item) => {
                      const Icon = techIcons[item] ?? VscCode;
                      return (
                        <Chip key={item} className={styles.skillChip}>
                          <Icon className={styles.skillIcon} aria-hidden="true" />
                          {item}
                        </Chip>
                      );
                    })}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={["shell", styles.projects].join(" ")}>
        <div className={styles.projectsHead}>
          <span className={styles.sectionEyebrowLight}>02 — Selected projects</span>
          <ArrowLink to="/projects">View all projects →</ArrowLink>
        </div>
        <div className={styles.projectsGrid}>
          {projects.slice(0, 3).map((project) => (
            <ProjectTeaserCard
              key={project.index}
              index={project.index}
              title={project.title}
              meta={project.meta}
              photo={project.photos[0]}
              to="/projects"
            />
          ))}
        </div>
      </section>

      <section className={["shell", styles.background].join(" ")}>
        <div className={styles.eduCol}>
          <span className={styles.sectionEyebrow}>03 — Education</span>
          <div className={styles.eduItem}>
            <span className={styles.eduDot} aria-hidden="true" />
            <div>
              <h3 className={styles.eduDegree}>{education.degree}</h3>
              <p className={styles.eduSchool}>{education.school}</p>
            </div>
          </div>
          <ArrowLink to="/education">Full academic background →</ArrowLink>
        </div>

        <div className={styles.orgCol}>
          <span className={styles.sectionEyebrow}>04 — Organizational</span>
          {orgRoles.map((role) => (
            <div key={role.index} className={styles.orgItem}>
              <span className={styles.orgIndex}>{role.index}</span>
              <div className={styles.orgBody}>
                <h3 className={styles.orgTitle}>{role.title}</h3>
                <p className={styles.orgDetail}>{role.points.join(" · ")}</p>
              </div>
              <span className={styles.orgPeriod}>{role.period}</span>
            </div>
          ))}
          <ArrowLink to="/certificates">Certificates &amp; courses →</ArrowLink>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactGlow} aria-hidden="true" />
        <div className={["shell", styles.contactInner].join(" ")}>
          <div>
            <h2 className={styles.contactHeading}>
              Let&apos;s work together <span className={styles.plus}>✚</span>
            </h2>
            <p className={styles.contactText}>
              I&apos;m open to internships and freelance work. If you have something in mind, send
              me an email.
            </p>
            <Pill as="a" href={`mailto:${contact.email}`} tone="cyan">
              Say hello ✚
            </Pill>
          </div>

          <div className={styles.contactList}>
            <a className={styles.contactRow} href={`mailto:${contact.email}`}>
              <span>Email</span>
              <span>{contact.email}</span>
            </a>
            <a className={styles.contactRow} href={contact.linkedin}>
              <span>LinkedIn</span>
              <span>Connect</span>
            </a>
            <a className={styles.contactRow} href={contact.github}>
              <span>GitHub</span>
              <span>View code</span>
            </a>
            <div className={styles.contactRow}>
              <span>Location</span>
              <span>{contact.location}</span>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
