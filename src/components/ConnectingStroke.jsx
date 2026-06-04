import React from 'react';
import styles from './ConnectingStroke.module.css';

/**
 * The big sweeping red stroke that connects the two InfoSections —
 * flows from top-right, loops around the left circle image,
 * then swings down and curves below the "What we can offer" heading.
 * Matches the Figma reference precisely.
 */
export default function ConnectingStroke() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1200 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Main sweeping red stroke */}
        <path
          d="M 1100,30
             C 900,40 750,120 600,180
             C 450,240 280,200 200,260
             C 100,330 120,420 220,460
             C 320,500 500,480 650,530
             C 800,580 900,650 1050,680"
          stroke="#FF6B6B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={styles.path}
        />
      </svg>
    </div>
  );
}
