'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/components/home/Cards/card.module.css';

const ProductCard = ({ product }) => {
  const { image, title, description, link } = product;

  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.cardImage}
        loading="lazy"
      />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && (
          <p className={styles.cardDescription}>{description}</p>
        )}
        <Link href={link} className={styles.cardButton}>
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
