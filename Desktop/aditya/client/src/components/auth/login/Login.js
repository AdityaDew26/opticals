'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './login.module.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Ensure this package is installed

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === '123456') {
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>Login</div>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <input
            type="email"
            placeholder="Email"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password with Eye Icon */}
          <div className={styles.passwordField}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </span>
          </div>

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>

        <div style={{ marginTop: '12px', textAlign: 'center' }}>
          Don't have an account?
          <a href="/signup" className={styles.forgotLink}>
             Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
