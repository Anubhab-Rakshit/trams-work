import React, { useState } from 'react';
import styles from './OfferingsSection.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ITEMS = [
  {
    index: '01',
    tag: 'Office of multiple human resource',
    title: 'Colaborative & partnership',
    description: 'We form deep, lasting partnerships — aligning with your goals from day one.',
  },
  {
    index: '02',
    tag: 'The foreign US Air force digital environmental',
    title: 'We talk about our weight',
    description: 'Direct, honest conversations that lead to meaningful, measurable outcomes.',
  },
  {
    index: '03',
    tag: 'De-facto and current under... digital',
    title: 'Piloting digital confidence',
    description: 'We help you navigate the digital landscape with clarity and confidence.',
  },
];

export default function OfferingsSection() {
  const ref = useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="service" className={`${styles.section} reveal-on-scroll`} ref={ref}>
      <div className={styles.header}>
        <h2 className={`${styles.title} animate-draw`}>
          What we{' '}
          <span className="text-highlight-green">can</span>
          <br />
          <span className="text-underline-orange">offer</span> you!
        </h2>
        <p className={styles.subtitle}>
          Three core pillars that drive every project we take on.
        </p>
      </div>

      <div className={styles.list}>
        {ITEMS.map(({ index, tag, title, description }, i) => (
          <div
            key={i}
            className={`${styles.item} stagger-child`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-cursor-hover
          >
            <span className={styles.index}>{index}</span>

            <div className={styles.itemLeft}>
              <span className={styles.tag}>{tag}</span>
            </div>

            <div className={styles.itemCenter}>
              <span className={`${styles.itemTitle} ${hoveredIndex === i ? styles.filled : 'text-outline'}`}>
                {title}
              </span>
              <p className={`${styles.desc} ${hoveredIndex === i ? styles.descVisible : ''}`}>
                {description}
              </p>
            </div>

            {i === 2 && (
              <div className={styles.offerBlob}>
                {/* Small purple ring — separate circle to the left of the sphere */}
                <div className={styles.orbitCircle} />
                {/* Typography collage sphere — the actual Figma image */}
                <img
                  src="/images/typography_sphere.png"
                  alt="digital confidence"
                  className={styles.sphere}
                />
              </div>
            )}

            <div className={`${styles.arrowCircle} ${hoveredIndex === i ? styles.arrowActive : ''}`}>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
