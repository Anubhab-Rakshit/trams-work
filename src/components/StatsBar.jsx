import React, { useEffect, useRef, useState } from 'react';
import styles from './StatsBar.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

function useCounter(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

const STATS = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 98,  suffix: '%', label: 'Client satisfaction' },
  { value: 12,  suffix: '+', label: 'Countries reached' },
  { value: 6,   suffix: 'yrs', label: 'Industry experience' },
];

function StatItem({ value, suffix, label, go }) {
  const count = useCounter(value, 1800, go);
  return (
    <div className={`${styles.stat} stagger-child`}>
      <div className={styles.number}>
        {count}<span className={styles.suffix}>{suffix}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useScrollReveal();
  const [go, setGo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setGo(true); observer.unobserve(el); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [ref]);

  return (
    <div className={`${styles.statsBar} reveal-on-scroll`} ref={ref}>
      {STATS.map((s) => (
        <StatItem key={s.label} {...s} go={go} />
      ))}
    </div>
  );
}
