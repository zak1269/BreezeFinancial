'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* =========================================================
          HEADER / NAVIGATION
          ========================================================= */}
      <header
        className={`site-header${scrolled ? ' scrolled' : ''}`}
        id="siteHeader"
      >
        <div className="wrap nav" role="navigation" aria-label="Primary">
          <a href="#top" className="brand" aria-label="Breeze Financial, LLC home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1f3a4d" strokeWidth="1.6" strokeLinecap="round">
                <path d="M3 9c3-3 6 3 9 0s6-3 9 0" />
                <path d="M3 15c3-3 6 3 9 0s6-3 9 0" />
              </svg>
            </span>
            Breeze Financial
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#values">Our Approach</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-cta">
            <div className="phone">
              Call <strong>(859) 252-0225</strong>
            </div>
            <a href="#contact" className="btn btn-primary">
              Schedule a Meeting
            </a>
            <button
              className={`menu-toggle${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className={`mobile-panel${menuOpen ? ' open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#values" onClick={closeMenu}>Our Approach</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
            Schedule a Meeting
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
          ========================================================= */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Independent. Fiduciary. Since 2002.</span>
            <h1>
              Clear-headed advice for{' '}
              <span className="accent">the life you’re building.</span>
            </h1>
            <p className="lead">
              Breeze Financial is a boutique advisory practice in Lexington,
              Kentucky, guiding individuals, families, and business owners
              through every season of planning, investing, and protecting what
              matters most.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Schedule an introductory meeting
                <span className="arr" aria-hidden="true">→</span>
              </a>
              <a href="#values" className="btn btn-ghost">Our approach</a>
            </div>

            <div className="hero-meta">
              <div><strong>20+ yrs</strong>Independent practice</div>
              <div><strong>KY &amp; FL</strong>Two-state footprint</div>
              <div><strong>CFP® · CLU</strong>Fiduciary credentials</div>
            </div>
          </div>

          <figure className="hero-figure reveal" style={{ '--delay': '.15s' }}>
            <div className="hero-visual">
              {/* HERO IMAGE: Sourced from BizLex Q&A feature (smileypete.com).
                  Replace with a licensed, high-resolution headshot of Patty for the final site. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://smileypete.com/downloads/17924/download/Q%26A_PattyMBreeze.jpg?cb=ff84609eae59d728f849733d10e50713&w=600"
                alt="Patty M. Breeze, CFP®, CLU. Founder and President of Breeze Financial, LLC."
              />
            </div>
            <figcaption className="hero-figcaption">
              <span className="dot" aria-hidden="true" />
              <span>
                <strong>Patty M. Breeze</strong>, Founder &amp; President
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================
          SERVICES
          ========================================================= */}
      <section id="services" className="alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Four pillars, one coordinated plan.</h2>
            <p className="lead">
              Most clients come to us with one question, and stay because we
              help them see how the rest of their financial life fits together.
              Every engagement is independent, fiduciary, and built around your
              goals first.
            </p>
          </div>

          <div className="services-grid">
            <article className="service reveal">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l5-5 4 4 8-8" />
                  <path d="M14 8h6v6" />
                </svg>
              </div>
              <span className="num">01 / Pillar</span>
              <h3>Investment Programs</h3>
              <p>
                Open-architecture portfolios designed to match your risk, your
                timeline, and your tax picture, not a model off a shelf.
              </p>
              <ul>
                <li>Personalized portfolio design</li>
                <li>Tax-aware rebalancing</li>
                <li>Ongoing fiduciary oversight</li>
              </ul>
              <p className="fine-print">
                Investment Advisory Services are offered through{' '}
                <a href="https://meridianwealthllc.com" target="_blank" rel="noopener noreferrer">
                  Meridian Wealth Management, LLC
                </a>
                , an SEC-registered investment adviser. Registration does not
                imply any level of skill or training. Patty M. Breeze is an
                Investment Adviser Representative of Meridian Wealth Management,
                LLC. Insurance products and services are offered separately
                through Breeze Financial, LLC.
              </p>
            </article>

            <article className="service reveal" style={{ '--delay': '.08s' }}>
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="10" r="2.4" />
                  <path d="M3 19c.8-3.2 3.3-5 6-5s5.2 1.8 6 5" />
                  <path d="M14.5 17.5c.6-2 2-3 3.5-3s2.7 1 3 2.5" />
                </svg>
              </div>
              <span className="num">02 / Pillar</span>
              <h3>Employee Benefits</h3>
              <p>
                Benefits packages that help small and mid-sized businesses
                recruit, retain, and reward the people who drive them forward.
              </p>
              <ul>
                <li>Group health, dental, vision &amp; disability</li>
                <li>Retirement plan design &amp; review</li>
                <li>Executive carve-out strategies</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.16s' }}>
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21V8l8-5 8 5v13" />
                  <path d="M9 21v-7h6v7" />
                </svg>
              </div>
              <span className="num">03 / Pillar</span>
              <h3>Financial Planning</h3>
              <p>
                A single, written plan that ties together everything you’re
                working toward, and shows you exactly where you stand.
              </p>
              <ul>
                <li>Retirement &amp; income planning</li>
                <li>College funding</li>
                <li>Estate &amp; charitable giving</li>
                <li>Business succession</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.24s' }}>
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="num">04 / Pillar</span>
              <h3>Insurance Programs</h3>
              <p>
                As an independent broker, we shop the carriers, so the
                protection you put in place actually fits the risk you’re
                protecting against.
              </p>
              <ul>
                <li>Life, disability &amp; long-term care</li>
                <li>Key-person &amp; buy-sell funding</li>
                <li>Deferred compensation</li>
                <li>Workers’ compensation</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES / WHY BREEZE
          ========================================================= */}
      <section id="values" className="alt-mist">
        <div className="wrap">
          <div className="values-hero reveal">
            <span className="eyebrow">Our approach</span>
            <h2>
              “People First, <em>Money Second.</em>”
            </h2>
            <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              It’s the line we open with, because the right financial decision
              almost always starts with a real conversation about the people
              behind the numbers.
            </p>
          </div>

          <div className="values-grid">
            <div className="value reveal">
              <span className="v-num">01</span>
              <h3>People First</h3>
              <p>
                We start by understanding your family, your business, and what
                you actually want a plan to do for you, before any product
                enters the conversation.
              </p>
            </div>

            <div className="value reveal" style={{ '--delay': '.1s' }}>
              <span className="v-num">02</span>
              <h3>Independent &amp; Fiduciary</h3>
              <p>
                No sales quotas, no proprietary products, no hidden incentives.
                As a fiduciary, our recommendations have to put your interests
                ahead of our own, and we wouldn’t have it any other way.
              </p>
            </div>

            <div className="value reveal" style={{ '--delay': '.2s' }}>
              <span className="v-num">03</span>
              <h3>Built to last</h3>
              <p>
                The relationships we’re proudest of are the ones now in their
                second decade, and, increasingly, their second generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
          ========================================================= */}
      <section id="contact">
        <div className="wrap contact-grid">
          <div className="reveal">
            <span className="eyebrow">Let’s talk</span>
            <h2>An introductory meeting, no obligation.</h2>
            <p className="lead">
              The first conversation is always free, in person or by video, and
              exists for one reason: to see whether we’re the right fit for what
              you’re trying to do. If we are, we’ll tell you. If we’re not,
              we’ll point you toward someone who is.
            </p>

            <div className="offices">
              <div className="office">
                <span className="pin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <div>
                  <h4>Lexington, Kentucky</h4>
                  <address className="addr">
                    219 E High Street<br />
                    Lexington, KY 40507
                  </address>
                </div>
              </div>

              <div className="office">
                <span className="pin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <div>
                  <h4>Ft. Myers, Florida</h4>
                  <address className="addr">
                    15172 Fiddlesticks Blvd<br />
                    Ft. Myers, FL 39912
                  </address>
                </div>
              </div>
            </div>

            <div className="direct">
              <a href="tel:+18592520225">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.7 19.7 0 01-8.6-3.1 19.3 19.3 0 01-6-6A19.7 19.7 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                </svg>
                (859) 252-0225
              </a>
              <a href="mailto:patty@breezefinancialllc.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                patty@breezefinancialllc.com
              </a>
            </div>
          </div>

          {/* Appointment form: non-functional placeholder */}
          <form
            className="form-card reveal"
            style={{ '--delay': '.1s' }}
            onSubmit={handleSubmit}
          >
            <h3>Request an appointment</h3>
            <p className="sub">
              Tell us a little about you and we’ll be in touch within one
              business day.
            </p>

            <div className="field-row">
              <div className="field">
                <label htmlFor="fn">First name</label>
                <input id="fn" type="text" autoComplete="given-name" required />
              </div>
              <div className="field">
                <label htmlFor="ln">Last name</label>
                <input id="ln" type="text" autoComplete="family-name" required />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="em">Email</label>
                <input id="em" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="ph">Phone</label>
                <input id="ph" type="tel" autoComplete="tel" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="topic">I’d like to discuss</label>
              <select id="topic" defaultValue="Financial planning &amp; retirement">
                <option>Financial planning &amp; retirement</option>
                <option>Investment management</option>
                <option>Insurance review</option>
                <option>Business owner / employee benefits</option>
                <option>Estate or charitable giving</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="msg">Anything we should know? (optional)</label>
              <textarea id="msg" placeholder="A sentence or two is plenty." />
            </div>

            <button type="submit" className="btn btn-primary" disabled={submitted}>
              Request introductory meeting
              <span className="arr" aria-hidden="true">→</span>
            </button>
            <p className="form-note">
              By submitting this form you consent to be contacted by Breeze
              Financial. No financial information is required at this stage.
            </p>

            {submitted && (
              <p className="form-success">
                Thank you. Patty will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* =========================================================
          FOOTER
          ========================================================= */}
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#top" className="brand">
                <span className="brand-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M3 9c3-3 6 3 9 0s6-3 9 0" />
                    <path d="M3 15c3-3 6 3 9 0s6-3 9 0" />
                  </svg>
                </span>
                Breeze Financial, LLC
              </a>
              <p>
                Independent financial planning, investments &amp; insurance,
                serving Kentucky and Florida since 2002.
              </p>
            </div>

            <div>
              <h5>Practice</h5>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#values">Our Approach</a></li>
                <li><a href="#contact">Schedule a Meeting</a></li>
              </ul>
            </div>

            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:+18592520225">(859) 252-0225</a></li>
                <li><a href="mailto:patty@breezefinancialllc.com">patty@breezefinancialllc.com</a></li>
                <li>219 E High St, Lexington, KY 40507</li>
                <li>15172 Fiddlesticks Blvd, Ft. Myers, FL 39912</li>
              </ul>
            </div>
          </div>

          {/* COMPLIANCE DISCLOSURE: Meridian Wealth Management, LLC (confirmed RIA affiliation). */}
          <div className="disclosure">
            Investment Advisory Services are offered through{' '}
            <a href="https://meridianwealthllc.com" target="_blank" rel="noopener noreferrer">
              Meridian Wealth Management, LLC
            </a>
            , an SEC-registered investment adviser. Registration does not imply
            any level of skill or training. Patty M. Breeze is an Investment
            Adviser Representative of Meridian Wealth Management, LLC. Insurance
            products and services are offered separately through Breeze
            Financial, LLC.
          </div>

          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} Breeze Financial, LLC. All rights reserved.</div>
            <div>Concept design, not for public release.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
