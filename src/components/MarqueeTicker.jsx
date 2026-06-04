import React from 'react';
import styles from './MarqueeTicker.module.css';

const ITEMS = [
  'Brand Strategy', '✦', 'UI / UX Design', '✦',
  'Web Development', '✦', 'Motion Design', '✦',
  'Digital Marketing', '✦', 'Product Thinking', '✦',
  'Brand Strategy', '✦', 'UI / UX Design', '✦',
  'Web Development', '✦', 'Motion Design', '✦',
  'Digital Marketing', '✦', 'Product Thinking', '✦',
];

export default function MarqueeTicker() {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className={item === '✦' ? styles.dot : styles.item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
