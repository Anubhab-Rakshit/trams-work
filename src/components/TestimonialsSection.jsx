import React from 'react';
import styles from './TestimonialsSection.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PORTRAITS = [
  { src: '/images/p1.png', cls: 'img1', anim: 'animate-float',           alt: 'Customer' },
  { src: '/images/p2.png', cls: 'img2', anim: 'animate-float-delayed',   alt: 'Customer' },
  { src: '/images/p3.png', cls: 'img3', anim: 'animate-float',           alt: 'Customer' },
  { src: '/images/p1.png', cls: 'img4', anim: 'animate-float-delayed-2', alt: 'Customer' },
  { src: '/images/p2.png', cls: 'img5', anim: 'animate-float-delayed',   alt: 'Customer' },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className={`${styles.section} reveal-on-scroll`} ref={ref}>
      <div className={styles.badge}>
        <div className={styles.badgeIcon}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
        <span>Testimonials</span>
      </div>

      <h2 className={`${styles.title} animate-draw`}>
        <span className="text-highlight-green">What</span> our customers
        <br />
        say <span className="text-underline-orange">About Us</span>
      </h2>

      <div className={styles.quoteOuter}>
        {/* Floating heads */}
        {PORTRAITS.map(({ src, cls, anim, alt }) => (
          <img key={cls} src={src} alt={alt}
               className={`${styles[cls]} ${anim} ${styles.float}`}
               loading="lazy" />
        ))}

        {/* Card */}
        <div className={styles.card}>
          <div className={styles.quoteMarkLeft}>“</div>
          <div className={styles.stars}>★ ★ ★ ★ ★</div>
          <blockquote className={styles.quoteText}>
            "Elementium delivered the site on time and within our required parameters.
            In the end, the client hit a{' '}
            <strong className={styles.highlight}>120% increase in traffic</strong>
            {' '}in his first month since its launch. They also have an impressive ability
            to create a custom page — which proved to be easy to use and reliable."
          </blockquote>
          <div className={styles.quoteMarkRight}>”</div>
          <img src="/images/p1.png" alt="Happy Customer" className={styles.breakoutImg} />
          <div className={styles.author}>
            <img src="/images/p3.png" alt="Author" className={styles.authorImg} />
            <div>
              <div className={styles.authorName}>Sarah Johnson</div>
              <div className={styles.authorRole}>CEO, DesignWorks Studio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
