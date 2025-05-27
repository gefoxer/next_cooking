"use client";

import { useState } from "react";
import styles from "@/styles/register.module.css";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push("/api/auth/signin");
    } else {
      alert("Ошибка регистрации");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Регистрация</h2>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Адрес"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
          required
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
