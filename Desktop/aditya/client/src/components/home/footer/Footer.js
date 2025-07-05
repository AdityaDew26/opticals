'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import styles from '@/components/home/footer/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h2 className={styles.logo}>👓 OptiVision</h2>
        <p>Your trusted destination for stylish eyewear & lenses.</p>
        <div className={styles.socials}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className={styles.column}>
        <h3>Quick Links</h3>
        <ul className={styles.linkList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/glasses">Glasses</Link></li>
          <li><Link href="/lenses">Lenses</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div className={styles.column}>
        <h3>Contact Us</h3>
        <address className={styles.contactInfo}>
          <p><FaPhone style={{ marginRight: '8px' }} /> +91 98765 43210</p>
          <p><FaEnvelope style={{ marginRight: '8px' }} /> support@optivision.com</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
