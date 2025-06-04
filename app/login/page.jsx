'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/login.module.css';
import Header from '@/components/Header';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <>
      <Header />
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <h2>Вход в аккаунт</h2>
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
            <button type="submit" className={styles.submitButton}>
              Войти
            </button>
          </form>
          <p className={styles.registerLink}>
            Нет аккаунта?{' '}
            <Link href="/register">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </>
  );
} 