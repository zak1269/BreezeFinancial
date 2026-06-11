'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header${scrolled ? ' scrolled' : ''}`}
      id="siteHeader"
    >
      <div className="wrap nav" role="navigation" aria-label="Primary">
        <Link href="/" className="brand" aria-label="Breeze Financial, LLC home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1f3a4d" strokeWidth="1.6" strokeLinecap="round">
              <path d="M3 9c3-3 6 3 9 0s6-3 9 0" />
              <path d="M3 15c3-3 6 3 9 0s6-3 9 0" />
            </svg>
          </span>
          Breeze Financial
        </Link>

        <nav className="nav-links">
          <Link href="/wealth-management">Wealth Management</Link>
          <Link href="/insurance">Insurance</Link>
          <Link href="/#values">Our Approach</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobilePanel"
        >
          <span /><span /><span />
        </button>
      </div>

      <div
        className={`mobile-panel${menuOpen ? ' open' : ''}`}
        id="mobilePanel"
        aria-hidden={!menuOpen}
      >
        <Link href="/wealth-management" onClick={closeMenu}>Wealth Management</Link>
        <Link href="/insurance" onClick={closeMenu}>Insurance</Link>
        <Link href="/#values" onClick={closeMenu}>Our Approach</Link>
        <Link href="/#contact" onClick={closeMenu}>Contact</Link>
        <a href="tel:+18594071946" className="mobile-phone" onClick={closeMenu}>
          Call (859) 407-1946
        </a>
        <Link href="/#contact" className="btn btn-primary" onClick={closeMenu}>
          Schedule a Meeting
        </Link>
      </div>
    </header>
  );
}
