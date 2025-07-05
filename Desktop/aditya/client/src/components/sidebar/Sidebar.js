'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from '@/components/sidebar/sidebar.module.css';
import { FiFilter, FiMoreHorizontal } from 'react-icons/fi';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const isGlassesPage = pathname.includes('/glasses');
  const isLensesPage = pathname.includes('/lenses');

  const glassCategories = ['Men', 'Women', 'Kids', 'Unisex', 'Premium', 'Budget'];
  const lensCategories = ['Contact', 'Color', 'Power'];
  const categories = isGlassesPage ? glassCategories : lensCategories;
  const pageType = isGlassesPage ? 'glasses' : isLensesPage ? 'lenses' : '';

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setOpen(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!pageType) return null;

  return (
    <div className={styles.wrapper}>
      {isMobile && (
        <div className={styles.mobileControls}>
          <button className={styles.iconButton} onClick={() => setOpen(!open)} title="Toggle Filter">
            <FiFilter size={18} />
            <span>Filter</span>
          </button>
          <button className={styles.iconButton} onClick={() => setShowMore(!showMore)} title="More Options">
            <FiMoreHorizontal size={18} />
            <span>More</span>
          </button>
        </div>
      )}

      {open && (
        <div className={styles.sidebarContainer}>
          <h3 className={styles.sidebarTitle}>
            {pageType === 'glasses' ? 'Filter Glasses' : 'Filter Lenses'}
          </h3>
          <ul className={styles.categoryList}>
            <li>
              <Link
                href={`/${pageType}`}
                className={`${styles.categoryItem} ${!selectedCategory ? styles.active : ''}`}
              >
                All
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/${pageType}?category=${cat}`}
                  className={`${styles.categoryItem} ${selectedCategory === cat ? styles.active : ''}`}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showMore && isMobile && (
        <div className={styles.moreOptions}>
          <p>🔄 Sort by Popularity</p>
          <p>🔥 Today's Deals</p>
          <p>✅ Top Rated</p>
        </div>
      )}
    </div>
  );
}
