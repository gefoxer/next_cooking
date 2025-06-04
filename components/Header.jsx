"use client"
import React, { useState } from 'react';
import styles from '@/styles/header.module.css';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src="./img/logo.svg" alt="logo" />
        </div>
        
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/recipe">Recipes</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>
          </ul>
        </nav>
    
        <div className={styles.burger} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
            <path d="M 2 9 L 2 11 L 48 11 L 48 9 L 2 9 z M 2 24 L 2 26 L 48 26 L 48 24 L 2 24 z M 2 39 L 2 41 L 48 41 L 48 39 L 2 39 z"/>
          </svg>
          
          <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
            <ul>
              <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/recipe" onClick={toggleMenu}>Recipes</Link></li>
              <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
              <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
              <li><Link href="/aboutus" onClick={toggleMenu}>About Us</Link></li>
              <li><Link href="/login" onClick={toggleMenu}>Войти</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.social}>
            <img src="./img/facebook.svg" alt="facebook" />
            <img src="./img/x.svg" alt="x" />
            <img src="./img/inst.svg" alt="inst" />
          </div>
          <Link href="/login" className={styles.loginButton}>
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
}