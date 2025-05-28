'use client'
import styles from '@/styles/login.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика входа
    console.log('Форма входа отправлена:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Вход в аккаунт</h1>
        <p className={styles.subtitle}>Введите свои данные для входа</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ваш email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ваш пароль"
              required
            />
          </div>

          <div className={styles.forgotPassword}>
            <Link href="/forgot-password" className={styles.forgotLink}>
              Забыли пароль?
            </Link>
          </div>
          <Link href="/" className={styles.submitButton}>
            <button type="submit" >
              Войти
            </button>
          </Link>
        </form>

        <p className={styles.registerText}>
          Ещё нет аккаунта?{' '}
          <Link href="/register" className={styles.registerLink}>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}