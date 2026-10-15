import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { PhotoCarousel } from "../components/PhotoCarousel";
import { Chip } from "../components/ui/Chip";
import { ArrowLink } from "../components/ui/ArrowLink";
import { education, orgRoles } from "../data/content";
import styles from "./Education.module.css";

export function Education() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={["shell", styles.heroTop].join(" ")}>
          <div>
            <span className={styles.eyebrow}>Background — 2024 → now</span>
            <h1 className={styles.heading}>
              Education
              <br />
              &amp;
              <br />
              Organization
            </h1>
          </div>
          <p className={styles.description}>
            What I study in class, and what I do for the campus tech community outside it.
          </p>
        </div>
      </section>

      <section className={["shell", styles.academic].join(" ")}>
        <div className={styles.timelineCol}>
          <span className={styles.sectionEyebrow}>{education.eyebrow}</span>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} aria-hidden="true" />

            <div className={styles.timelineItem}>
              <span className={[styles.timelineDot, styles.dotCurrent].join(" ")} aria-hidden="true" />
              <span className={styles.timelinePeriod}>{education.period}</span>
              <h3 className={styles.timelineTitle}>{education.degree}</h3>
              <p className={styles.timelineSchool}>{education.school}</p>
              <p className={styles.timelineDescription}>{education.description}</p>

              <span className={styles.courseworkLabel}>Key coursework</span>
              <div className={styles.coursework}>
                {education.coursework.map((course) => (
                  <Chip key={course}>{course}</Chip>
                ))}
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={[styles.timelineDot, styles.dotPast].join(" ")} aria-hidden="true" />
              <span className={[styles.timelinePeriod, styles.periodMuted].join(" ")}>
                {education.before.period}
              </span>
              <h3 className={styles.timelineTitle}>{education.before.school}</h3>
              <p className={styles.timelineSchool}>{education.before.detail}</p>
            </div>
          </div>
        </div>

        {/* academic photo + quote hidden for now
        <div className={styles.mediaCol}>
          <div className={styles.photoSlot}>
            {education.photos.length > 0 ? (
              <PhotoCarousel photos={education.photos} sizes="(max-width: 1024px) 100vw, 50vw" />
            ) : (
              <ImagePlaceholder caption="Drop a campus or graduation photo" />
            )}
          </div>
          <blockquote className={styles.quoteCard}>
            <p>&ldquo;{education.quote.text}&rdquo;</p>
            <cite>— {education.quote.author}</cite>
          </blockquote>
        </div>
        */}
      </section>

      <section className={["shell", styles.org].join(" ")}>
        <div className={styles.orgHead}>
          <div>
            <span className={styles.sectionEyebrow}>02 — Organizational</span>
            <h2 className={styles.orgHeading}>BNCC Public Relations</h2>
          </div>
          <p className={styles.orgDescription}>
            Bina Nusantara Computer Club is the campus tech community. I&apos;m on its public
            relations team.
          </p>
        </div>

        <div className={styles.orgBody}>
          <div className={styles.timelineCol}>
            <div className={styles.timeline}>
              <div className={styles.timelineLine} aria-hidden="true" />

              {orgRoles.map((role, i) => (
                <div key={role.index} className={styles.timelineItem}>
                  <span
                    className={[styles.timelineDot, i === 0 ? styles.dotCurrent : styles.dotPast].join(" ")}
                    aria-hidden="true"
                  />
                  <span className={i === 0 ? styles.timelinePeriod : [styles.timelinePeriod, styles.periodMuted].join(" ")}>
                    {role.period}
                  </span>
                  <h3 className={styles.timelineTitle}>{role.title}</h3>
                  <ul className={styles.orgPoints}>
                    {role.points.map((point) => (
                      <li key={point}>
                        <span aria-hidden="true">→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <ArrowLink to="/certificates" className={styles.orgLink}>
              Certificates &amp; courses →
            </ArrowLink>
          </div>

          <div className={styles.orgPhotos}>
            {orgRoles.map((role) => (
              <div key={role.index} className={styles.orgPhotoSlot}>
                {role.photos.length > 0 ? (
                  <>
                    <PhotoCarousel photos={role.photos} sizes="(max-width: 1024px) 50vw, 25vw" />
                    <span className={styles.orgPhotoBadge}>{role.period}</span>
                  </>
                ) : (
                  <ImagePlaceholder caption={`Drop a ${role.title} photo`} badge={role.period} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
