'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/register.module.css';
import Header from '@/components/Header';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    console.log('Registration attempt:', { email, password });
  };

  return (
    <>
      <Header />
      <div className={styles.registerContainer}>
        <div className={styles.registerForm}>
          <h2>Регистрация</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Электронная почта</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Пароль</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirm-password">Подтвердите пароль</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Зарегистрироваться
            </button>
          </form>
          <p className={styles.loginLink}>
            Уже есть аккаунт?{' '}
            <Link href="/login">Войти</Link>
          </p>
        </div>
      </div>
    </>
  );
} 