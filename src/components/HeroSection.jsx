import React from 'react';
import styles from './HeroSection.module.css';

const portraits = [
  { src: '/images/p1.png', cls: styles.img1, anim: 'animate-float',           alt: 'Team member' },
  { src: '/images/p2.png', cls: styles.img2, anim: 'animate-float-delayed',   alt: 'Team member' },
  { src: '/images/p3.png', cls: styles.img3, anim: 'animate-float-delayed-2', alt: 'Team member' },
  { src: '/images/p2.png', cls: styles.img4, anim: 'animate-float',           alt: 'Team member' },
  { src: '/images/p1.png', cls: styles.img5, anim: 'animate-float-delayed',   alt: 'Team member' },
];

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorations */}
      <div className={styles.lineLeft}>
        <svg viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Thick black wavy line */}
          <path d="M20,20 Q100,100 30,200 T50,380" stroke="#1d1d1d" strokeWidth="4" strokeLinecap="round" />
          {/* Red wavy line weaving through */}
          <path d="M100,50 Q-20,150 90,250 T20,400" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Small black accent line */}
          <path d="M110,120 Q80,150 120,180 T100,240" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className={styles.blobRight} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Creative Agency · Est. 2020
        </div>

        <h1 className={`${styles.title} text-gradient`}>
          The <span className="text-underline-orange">thinkers</span> and<br />
          doers were{' '}
          <span className="text-highlight-pink">changing</span>
          <br />
          the <span className="text-highlight-green">status Quo</span> with
        </h1>

        <p className={styles.subtitle}>
          We are a team of creative designers &amp; developers globally. We craft
          beautiful websites and progressive web apps for modern agencies and brands.
        </p>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} data-cursor-hover>
            Explore our work
          </button>
          <button className={styles.btnSecondary} data-cursor-hover>
            <div className={styles.playIconOuter}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playSvg}>
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </div>
            Watch showreel
          </button>
        </div>
      </div>

      {/* Floating portraits */}
      <div className={styles.imgGallery}>
        {portraits.map(({ src, cls, anim, alt }, i) => (
          <img key={i} src={src} alt={alt} className={`${cls} ${anim}`} />
        ))}
      </div>
    </section>
  );
}
