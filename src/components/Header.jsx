import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

const links = ['Home', 'Works', 'About', 'Service', 'FAQ'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo}>
        <span className={styles.logoDot} />
        Elementium
      </a>

      <nav className={styles.nav}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className={styles.navLink}>
            {l}
          </a>
        ))}
      </nav>

      <button className={styles.ctaBtn} aria-label="Get in touch">
        Get in touch
      </button>

      <div className={styles.hamburger} aria-label="Menu">
        <span /><span /><span />
      </div>
    </header>
  );
}
