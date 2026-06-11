'use client';

import Link from 'next/link';
import { useState } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import RevealOnScroll from './components/RevealOnScroll';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <RevealOnScroll />
      <SiteHeader />

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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/patty.png"
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
      <section id="services" className="alt practices">
        <div className="wrap">
          <div className="section-head practices-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Two practices, one coordinated plan.</h2>
            <p className="lead">
              Independent, fiduciary, and built around your goals first.
              Explore the practice that brought you here.
            </p>
          </div>

          <div className="practice-buttons reveal">
            <Link href="/wealth-management" className="btn btn-primary practice-btn">
              Wealth Management
              <span className="arr" aria-hidden="true">→</span>
            </Link>
            <Link href="/insurance" className="btn btn-primary practice-btn">
              Insurance
              <span className="arr" aria-hidden="true">→</span>
            </Link>
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
                    2365 Harrodsburg Rd, Suite A240<br />
                    Lexington, KY 40504
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
              <a href="tel:+18594071946">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.7 19.7 0 01-8.6-3.1 19.3 19.3 0 01-6-6A19.7 19.7 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                </svg>
                (859) 407-1946
              </a>
              <a href="mailto:pbreeze@meridianwealthllc.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                pbreeze@meridianwealthllc.com
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

      <SiteFooter />
    </>
  );
}
