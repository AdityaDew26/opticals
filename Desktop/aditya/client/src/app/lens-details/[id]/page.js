'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { lenses } from '@/components/data/lensData';
import styles from '@/pages/routes/lens-details/lensDetails.module.css';

export default function LensDetails() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const [lens, setLens] = useState(null);

  useEffect(() => {
    if (id) {
      const foundLens = lenses.find((l) => l.id === parseInt(id));
      setLens(foundLens);
    }
  }, [id]);

  if (!lens) {
    return <div className={styles.notFound}>Lens not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img
          src={lens.image}
          alt={lens.name}
          className={styles.image}
          onError={(e) => (e.target.src = '/images/placeholder.jpg')}
        />
      </div>

      <div className={styles.detailsBox}>
        <h1 className={styles.name}>{lens.name}</h1>
        <p className={styles.type}>{lens.type} Lens</p>
        <p className={styles.price}>Price: ₹{lens.price}</p>
        <p className={styles.description}>{lens.description}</p>

        <button className={styles.buyBtn} onClick={() => router.push('/buy')}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
