'use client';

import React from 'react';
import ProductCard from '@/components/home/Cards/productCard/ProductCard';
import { products } from '@/components/data/products';
import styles from '@/components/home/Cards/card.module.css';

const Card = () => {
  return (
    <section className={styles.cardSection}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  );
};

export default Card;
