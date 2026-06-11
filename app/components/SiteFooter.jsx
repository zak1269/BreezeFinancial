import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M3 9c3-3 6 3 9 0s6-3 9 0" />
                  <path d="M3 15c3-3 6 3 9 0s6-3 9 0" />
                </svg>
              </span>
              Breeze Financial, LLC
            </Link>
            <p>
              Independent financial planning, investments &amp; insurance,
              serving Kentucky and Florida since 2002.
            </p>
          </div>

          <div>
            <h5>Practice</h5>
            <ul>
              <li><Link href="/wealth-management">Wealth Management</Link></li>
              <li><Link href="/insurance">Insurance</Link></li>
              <li><Link href="/#values">Our Approach</Link></li>
              <li><Link href="/#contact">Schedule a Meeting</Link></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+18594071946">(859) 407-1946</a></li>
              <li><a href="mailto:pbreeze@meridianwealthllc.com">pbreeze@meridianwealthllc.com</a></li>
              <li>2365 Harrodsburg Rd, Suite A240, Lexington, KY 40504</li>
              <li>15172 Fiddlesticks Blvd, Ft. Myers, FL 39912</li>
            </ul>
          </div>
        </div>

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
        </div>
      </div>
    </footer>
  );
}
