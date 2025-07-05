'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { dummyGlasses } from '@/components/data/GlassData';
import styles from '@/components/glasses/glass.module.css';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishListContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Filled & Outline Heart
import Link from 'next/link';

export default function GlassCard({ category }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  // Filter data by category
  const filteredGlasses = category
    ? dummyGlasses.filter((glass) => glass.category.toLowerCase() === category.toLowerCase())
    : dummyGlasses;

  // Helpers
  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  const handleAddToCart = (glass) => {
    addToCart({ ...glass, quantity: 1 });
  };

  const handleBuyNow = (glass) => {
    localStorage.setItem('buyItem', JSON.stringify({ ...glass, quantity: 1 }));
    router.push('/buy');
  };

  const toggleWishlist = (glass) => {
    isInWishlist(glass.id) ? removeFromWishlist(glass.id) : addToWishlist(glass);
  };

  return (
    <div className={styles.gridContainer}>
      {filteredGlasses.length > 0 ? (
        filteredGlasses.map((glass) => (
          <div key={glass.id} className={styles.card}>
            <div className={styles.imageWrapper}>
             
              <Link href={`/glass-details/${glass.id}`} className={styles.imageWrapper}>
  <img src={glass.image} alt={glass.name} />
</Link>

              {/* Heart Icon */}
              <div
                className={styles.wishlistIcon}
                onClick={() => toggleWishlist(glass)}
                title={isInWishlist(glass.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                {isInWishlist(glass.id) ? (
                  <FaHeart className={styles.heartFilled} />
                ) : (
                  <FaRegHeart className={styles.heartOutline} />
                )}
              </div>
            </div>

            <div className={styles.productName}>{glass.name}</div>
            <div className={styles.category}>{glass.category}</div>
            <div className={styles.price}>₹{glass.price}</div>

            <div className={styles.buttons}>
              <button className={styles.cartButton} onClick={() => handleAddToCart(glass)}>
                Add to Cart
              </button>
              <button className={styles.buyButton} onClick={() => handleBuyNow(glass)}>
                Buy Now
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.emptyState}>
          No glasses found for category: <strong>{category}</strong>
        </div>
      )}
    </div>
  );
}
