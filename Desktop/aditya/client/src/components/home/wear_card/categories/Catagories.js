'use client';

import Link from 'next/link';
import styles from '@/components/home/wear_card/wear.module.css';

const categories = [
  {
    title: "Men's Wear",
    description: "Stylish and comfortable eyewear for men.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyDrhi5SgY7c2TMpPkIV-WPwk-SS6r9JyfA&s",
    link: "/glasses?category=Men",
  },
  {
    title: "Women's Wear",
    description: "Elegant designs for fashionable women.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoc7oeFPSDfEwpy69LdCzGNTO4ae3Jnp-wGA&s",
    link: "/glasses?category=Women",
  },
  {
    title: "Kids' Wear",
    description: "Durable and fun glasses for kids.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqDreYIWzZVLSLM2hbKKLYfbx9Gzwlmf6Zw&s",
    link: "/glasses?category=Kids",
  },
];

export default function Categories() {
  return (
    <div className={styles.wrapper}>
      {categories.map((cat, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img src={cat.image} alt={cat.title} className={styles.cardImage} />
            <div className={styles.cardOverlay}>
              <Link href={cat.link} className={styles.cardButton}><h3 className={styles.cardTitle}>{cat.title}</h3></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
