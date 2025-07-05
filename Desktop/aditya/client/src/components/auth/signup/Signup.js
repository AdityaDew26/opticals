'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Heroicons

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirm((prev) => !prev);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Signup successful!');
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <div className={styles.signupTitle}>Create Account</div>
        <form onSubmit={handleSignup} className={styles.signupForm}>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.inputField}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Field with Toggle */}
          <div className={styles.passwordField}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={togglePassword} className={styles.eyeIcon}>
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </span>
          </div>

          {/* Confirm Password Field with Toggle */}
          <div className={styles.passwordField}>
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm Password"
              className={styles.inputField}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span onClick={toggleConfirmPassword} className={styles.eyeIcon}>
              {showConfirm ? <EyeSlashIcon /> : <EyeIcon />}
            </span>
          </div>

          <button type="submit" className={styles.signupButton}>
            Sign Up
          </button>
        </form>
       <Link href="/login" className={styles.loginLink}>
           Already have an account? Log In
          </Link>
      </div>
    </div>
  );
}
