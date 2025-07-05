'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { lenses } from '@/components/data/lensData';
import Sidebar from '@/components/sidebar/Sidebar';
import styles from '@/pages/routes/lensses/lenses.module.css'; // Adjust path
import { useCart } from '@/context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

export default function Lenses() {
  const searchParams = useSearchParams();
  const router = useRouter();
 const { addToCart, cartItems } = useCart();
  const type = searchParams.get('type') || 'All';

  const filteredLenses =
    type === 'All'
      ? lenses
      : lenses.filter(
          (lens) => lens.type.toLowerCase() === type.toLowerCase()
        );

  return (
    <div className={styles.pageLayout}>
      <aside className={styles.sidebar}>
        <Sidebar selectedCategory={type} />
      </aside>
      <Link href="/cart" className={styles.cartFloatingIcon}>
  <FaShoppingCart />
  {cartItems.length > 0 && (
    <span className={styles.cartCount}>{cartItems.length}</span>
  )}
</Link>

      <main className={styles.mainContent}>
        <h2 className={styles.heading}>
          {type !== 'All' ? `${type} Lenses` : 'All Lenses'}
        </h2>

        <div className={styles.grid}>
          {filteredLenses.map((lens) => (
            <div className={styles.card} key={lens.id}>
              <img
                src={lens.image}
                alt={lens.name}
                className={styles.image}
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />
              <div className={styles.info}>
                <div className={styles.name}>{lens.name}</div>
                <div className={styles.type}>{lens.type} Lens</div>
                <div className={styles.price}>₹{lens.price}</div>
                <div className={styles.desc}>{lens.description}</div>

                <div className={styles.buttonGroup}>
                  <button
                    className={styles.buyBtn}
                    onClick={() => router.push(`/lens-details?id=${lens.id}`)}
                  >
                    View Details
                  </button>

                  <button
                    className={styles.cartBtn}
                    onClick={() => addToCart({ ...lens, quantity: 1 })}
                  >
                    <FaShoppingCart style={{ marginRight: '6px' }} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLenses.length === 0 && (
          <div className={styles.empty}>No lenses found for this type.</div>
        )}
      </main>
    </div>
  );
}
