'use client';

import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // redirect or filter logic goes here
      console.log('Search:', searchQuery);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">👓 OptiVision</Link>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li className={styles.dropdown}>
          <span className={styles.dropbtn}>Glasses</span>
          <div className={styles.dropdownContent}>
            <Link href="/glasses?category=Men">Men's Wear</Link>
            <Link href="/glasses?category=Women">Women's Wear</Link>
            <Link href="/glasses?category=Kids">Kids Wear</Link>
          </div>
        </li>
        <li className={styles.dropdown}>
  <span className={styles.dropbtn}>Lenses</span>
  <div className={styles.dropdownContent}>
    <Link href="/lenses?type=contact">Contact Lenses</Link>
    <Link href="/lenses?type=color">Color Lenses</Link>
    <Link href="/lenses?type=power">Powered Lenses</Link>
  </div>
</li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>


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
    </nav>
  );
};

export default Navbar;
