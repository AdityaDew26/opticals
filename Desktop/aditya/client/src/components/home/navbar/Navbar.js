'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/home/navbar/navbar.module.css';

export default function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search:', searchQuery);
      // Optionally redirect to search page
      // router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <header>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div>
          <Link href="#">Store Locator</Link>
          <Link href="#">Lens2cart Blogs</Link>
          <Link href="#">Partner With Us</Link>
        </div>
        <div>
          <Link href="#">Contact Us</Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href="/">👓 OptiVision</Link>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>

        <form
          onSubmit={handleSearch}
          className={`${styles.searchContainer} ${menuOpen ? styles.active : ''}`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>

        <div className={`${styles.actions} ${menuOpen ? styles.active : ''}`}>
          <Link href="/login" className={styles.buthrefn}>Login</Link>
          <Link href="/cart" className={styles.cart}>Cart</Link>
          <Link href="/wishlist" className={styles.cart}>Wishlist</Link>
        </div>
      </div>

      {/* Category Navbar */}
      <nav className={styles.categoryNav}>
        {[
          { name: "EYEGLASSES", category: "Men" },
          { name: "SCREEN GLASSES", category: "Women" },
          { name: "KIDS GLASSES", category: "Kids" },
          { name: "CONTACT LENSES", category: "contact" },
          { name: "SUNGLASSES", category: "sunglasses" },
          { name: "HOME EYE-TEST", category: "home-eye-test" },
          { name: "STORE LOCATOR", category: "locator" }
        ].map((item) => (
          <div
            key={item.name}
            className={styles.navItem}
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <Link href={`/glasses?category=${item.category}`}>
              {item.name}
            </Link>

            {showMegaMenu && (
              <div className={styles.megaMenu}>
                <div className={styles.megaColumn}>
                  <h4>Select Category</h4>
                  <div className={styles.userRow}>
                    <img src="/men.png" alt="Men" />
                    <Link href="/glasses?category=Men">Men</Link>
                  </div>
                  <div className={styles.userRow}>
                    <img src="/women.png" alt="Women" />
                    <Link href="/glasses?category=Women">Women</Link>
                  </div>
                  <div className={styles.userRow}>
                    <img src="/kids.png" alt="Kids" />
                    <Link href="/glasses?category=Kids">Kids</Link>
                  </div>
                </div>

                <div className={styles.megaColumn}>
                  <h4>Our Top Picks</h4>
                  <Link href="#">New Arrivals</Link>
                  <Link href="#">Best Seller</Link>
                  <Link href="#">Progressive Eyeglasses</Link>
                </div>

                <div className={styles.megaColumn}>
                  <h4>Frame Type</h4>
                  <Link href="#">Rectangle Frames</Link>
                  <Link href="#">Round Frames</Link>
                  <Link href="#">Cat Eye Frames</Link>
                  <Link href="#">Wayfarer Frames</Link>
                </div>

                <div className={styles.megaColumn}>
                  <h4>Collection</h4>
                  <Link href="#">Matte Classics</Link>
                  <Link href="#">Youth Trends</Link>
                  <Link href="#">Bold Patterns</Link>
                </div>

                <div className={styles.megaColumn}>
                  <h4>Brands</h4>
                  <Link href="#">Fashionista Classic</Link>
                  <Link href="#">Magneto Kids</Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
