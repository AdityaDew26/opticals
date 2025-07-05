'use client';
import React from 'react';
import { useWishlist } from '@/context/WishListContext';
import styles from './wishlist.module.css'; // Use relative path for local CSS module

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <div className={styles.empty}>Your wishlist is empty.</div>
      ) : (
        <div className={styles.grid}>
          {wishlistItems.map((item) => (
            <div className={styles.card} key={item.id}>
              <img
                src={item.image || '/images/placeholder.jpg'}
                alt={item.name || 'Glass'}
                className={styles.image}
              />
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.category}>{item.category}</div>
                <div className={styles.price}>₹{item.price}</div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}