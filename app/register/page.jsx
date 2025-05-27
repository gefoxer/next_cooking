'use client'
import styles from '@/styles/register.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    // Здесь будет логика регистрации
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.registerCard}>
        <h1 className={styles.title}>Создайте аккаунт</h1>
        <p className={styles.subtitle}>Заполните форму, чтобы начать</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="Введите ваше имя"
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Введите ваш email"
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
              placeholder="Создайте пароль"
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Подтвердите пароль</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              placeholder="Повторите пароль"
              required
            />
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Зарегистрироваться
          </button>
        </form>

        <Link href="/login">
        <p className={styles.loginText}>
          Уже есть аккаунт? <a href="#" className={styles.loginLink}>Войти</a>
        </p>
        </Link>
        
        
      </div>
    </div>
  );
}