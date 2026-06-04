import React from 'react';
import styles from './InfoSection.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function InfoSection({ title, description, buttonText, imageSrc, reverse, children }) {
  const ref = useScrollReveal();

  return (
    <section
      className={`${styles.section} ${reverse ? styles.reverse : ''} reveal-on-scroll`}
      ref={ref}
    >
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {buttonText && (
          <button className={styles.button} data-cursor-hover>
            {buttonText}
            <span className={styles.arrow}>→</span>
          </button>
        )}
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt="section visual" className={styles.image} loading="lazy" />
          <div className={styles.imageGlow} />
          {children}
        </div>
      </div>
    </section>
  );
}
