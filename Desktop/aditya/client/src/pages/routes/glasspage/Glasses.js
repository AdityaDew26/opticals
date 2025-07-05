'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from '@/components/sidebar/Sidebar';
import GlassCard from '@/components/glasses/GlassCard';
import styles from '@/pages/routes/glasspage/glasses.module.css';

export default function Glasses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      {/* Hamburger Icon */}
      <div className={styles.hamburgerIcon} onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarMobileVisible : ''}`}
      >
        <Sidebar selectedCategory={category} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          {category ? `Showing ${category} Glasses` : 'All Glasses'}
        </h2>
        <GlassCard category={category} />
      </div>
    </div>
  );
}
