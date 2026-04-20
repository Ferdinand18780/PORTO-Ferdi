'use client';

import React, { useEffect, useState } from 'react';
import "../component/navbar.css";

const navItems = [
  { label: 'Home',       id: 'home'       },
  { label: 'Projects',   id: 'projects'   },
  { label: 'Skills',     id: 'techstack'  },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact',    id: 'contact'    },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        {
          rootMargin: '-30% 0px -60% 0px', 
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const gotoSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; // sesuai tinggi navbar floating
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="container_navbar">
      <div className="name">FERDI</div>
      <div className="container_rigth">
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            className={`butt ${activeId === id ? 'active' : ''}`}
            onClick={() => gotoSection(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}