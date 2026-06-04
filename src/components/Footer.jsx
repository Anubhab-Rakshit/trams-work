import React from 'react';
import styles from './Footer.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LINKS = {
  Company:    ['Home', 'Works', 'Portfolio', 'Blog'],
  'Terms & Policies': ['Privacy Policy', 'Terms & Conditions', 'Return', 'Guidelines'],
  'Follow Us': ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  'Locate Us': ['376A, Town City UK\nRoad 42, CA 95082', '(219) 555-0114', 'elementum.com'],
};

export default function Footer() {
  const ref = useScrollReveal();

  return (
    <footer className={styles.footer}>
      {/* Newsletter */}
      <div className={`${styles.newsletter} reveal-on-scroll`} ref={ref}>
        <div className={styles.nlLeft}>
          <div className={styles.nlDecor}>
            <svg viewBox="0 0 80 40" fill="none" stroke="#FF6B6B" strokeWidth="1.5">
              <path d="M0,15 Q10,-5 20,15 T40,15" />
              <path d="M10,25 Q20,5 30,25 T50,25" />
              <path d="M20,35 Q30,15 40,35 T60,35" />
            </svg>
          </div>
          <h2 className={styles.nlTitle}>
            Subscribe to<br />our newsletter
          </h2>
          <p className={styles.nlSub}>
            Stay inspired with our latest updates and exclusive insights.
          </p>
        </div>
        <div className={styles.nlRight}>
          <div className={styles.inputRow}>
            <input
              type="email"
              placeholder="Your email address"
              className={styles.emailInput}
              aria-label="Email address"
            />
            <button className={styles.subscribeBtn} data-cursor-hover>
              Subscribe →
            </button>
          </div>
          <p className={styles.nlNote}>No spam, ever.</p>
        </div>
        {/* Purple blob decor */}
        <div className={styles.blob} />
      </div>

      {/* Links grid */}
      <div className={styles.links}>
        <div className={styles.brandCol}>
          <div className={styles.footerLogo}>
            <span className={styles.logoDot} />Elementum
          </div>
          <p className={styles.brandTagline}>
            We build digital<br />experiences that matter.
          </p>
          <p className={styles.copy}>© {new Date().getFullYear()} Elementum. All rights reserved.</p>
        </div>

        {Object.entries(LINKS).map(([head, items]) => (
          <div key={head} className={styles.col}>
            <h4 className={styles.colHead}>{head}</h4>
            {items.map((item) => (
              <a key={item} href="#" className={styles.colLink}>{item}</a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
