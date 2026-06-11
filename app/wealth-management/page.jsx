import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import RevealOnScroll from '../components/RevealOnScroll';

export const metadata = {
  title: 'Wealth Management | Breeze Financial, LLC',
  description:
    'Open-architecture portfolios, tax-aware planning, and ongoing fiduciary oversight. Advisory services offered through Meridian Wealth Management, LLC.'
};

export default function WealthManagement() {
  return (
    <>
      <RevealOnScroll />
      <SiteHeader />

      {/* =========================================================
          PAGE HERO
          ========================================================= */}
      <section className="page-hero" id="top">
        <div className="wrap">
          <div className="page-hero-copy reveal">
            <span className="eyebrow">Wealth Management</span>
            <h1>
              An investment strategy designed for{' '}
              <span className="accent">your goals,</span> not the market’s mood.
            </h1>
            <p className="lead">
              Open-architecture portfolios built around your risk tolerance,
              your timeline, and your tax picture. Every recommendation is made
              under a fiduciary standard, which means our advice has to put
              your interests ahead of our own. Advisory services are offered
              through Meridian Wealth Management, LLC, an SEC-registered
              investment adviser.
            </p>
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">
                Schedule an introductory meeting
                <span className="arr" aria-hidden="true">→</span>
              </Link>
              <a href="#pillars" className="btn btn-ghost">How we manage money</a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
          ========================================================= */}
      <section className="alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Why this matters</span>
            <h2>The data behind a disciplined approach.</h2>
            <p className="lead">
              These are the numbers we keep in mind while building portfolios.
              They are not promises about future returns. They are reminders
              that costs, behavior, and tax efficiency compound just as
              powerfully as markets do.
            </p>
          </div>

          <div className="stat-grid">
            <div className="stat reveal">
              <span className="stat-num">88%</span>
              <h3>of active U.S. equity funds trail their benchmark over 15 years</h3>
              <p>
                The S&amp;P SPIVA Scorecard has consistently found that the
                vast majority of actively managed large-cap funds underperform
                a simple index over long periods, once fees are included.
              </p>
              <span className="stat-source">Source: S&amp;P Dow Jones SPIVA U.S. Scorecard, 2023 year-end report.</span>
            </div>

            <div className="stat reveal" style={{ '--delay': '.08s' }}>
              <span className="stat-num">~3%</span>
              <h3>annual gap between the average investor and a balanced portfolio</h3>
              <p>
                DALBAR’s long-running behavioral study consistently shows that
                the typical fund investor captures meaningfully less than the
                funds they own, largely because of buying high and selling
                low. Disciplined rebalancing closes part of that gap.
              </p>
              <span className="stat-source">Source: DALBAR Quantitative Analysis of Investor Behavior, 2023.</span>
            </div>

            <div className="stat reveal" style={{ '--delay': '.16s' }}>
              <span className="stat-num">0.75% to 1.5%</span>
              <h3>estimated annual after-tax value of integrated advice</h3>
              <p>
                Vanguard’s Advisor’s Alpha research estimates that a holistic
                advisor can add roughly 3% per year in net value, with about
                half of that coming from tax-aware withdrawal sequencing,
                disciplined rebalancing, and asset location.
              </p>
              <span className="stat-source">Source: Vanguard, “Putting a value on your value: Quantifying Advisor’s Alpha,” 2022.</span>
            </div>

            <div className="stat reveal" style={{ '--delay': '.24s' }}>
              <span className="stat-num">1940</span>
              <h3>the year the fiduciary standard became law for investment advisers</h3>
              <p>
                The Investment Advisers Act of 1940 requires registered
                investment advisers to place client interests first. Brokers
                operating under suitability rules are held to a different,
                lower standard.
              </p>
              <span className="stat-source">Source: U.S. Securities and Exchange Commission.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PILLARS
          ========================================================= */}
      <section id="pillars">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">How we manage money</span>
            <h2>Five disciplines, one written plan.</h2>
            <p className="lead">
              Wealth management at Breeze is not a single product. It is the
              ongoing coordination of five working parts, each of which moves
              when your life moves.
            </p>
          </div>

          <div className="services-grid">
            <article className="service reveal">
              <span className="num">01 / Discipline</span>
              <h3>Portfolio Design</h3>
              <p>
                We start with a written investment policy statement that
                defines your goals, your tolerance for loss, and the time
                horizon for each dollar. Allocations then reflect those
                inputs, not a quarterly market view.
              </p>
              <ul>
                <li>Open-architecture access to mutual funds and ETFs</li>
                <li>Cost-conscious selection of underlying holdings</li>
                <li>Diversification across asset class, geography, and factor</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.08s' }}>
              <span className="num">02 / Discipline</span>
              <h3>Tax-Aware Rebalancing</h3>
              <p>
                Portfolios drift. We rebalance with a tax lens, harvesting
                losses where they help, deferring gains where we can, and
                placing the right asset in the right account so that tax drag
                does not quietly erode long-term return.
              </p>
              <ul>
                <li>Tax-loss harvesting in taxable accounts</li>
                <li>Asset location across taxable, deferred, and Roth</li>
                <li>Coordination with your CPA at year-end</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.16s' }}>
              <span className="num">03 / Discipline</span>
              <h3>Retirement Income Planning</h3>
              <p>
                Accumulating assets is the easy part. The harder question is
                how to turn a balance sheet into a paycheck without running
                out, especially with sequence-of-returns risk in the first
                decade of withdrawals.
              </p>
              <ul>
                <li>Withdrawal sequencing across account types</li>
                <li>Social Security and pension claiming analysis</li>
                <li>Required minimum distribution coordination</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.24s' }}>
              <span className="num">04 / Discipline</span>
              <h3>Estate &amp; Charitable Coordination</h3>
              <p>
                The most tax-efficient gift is rarely the obvious one. We
                work with your estate attorney to align beneficiaries,
                trusts, and charitable vehicles with how you actually want
                wealth to move to the next generation.
              </p>
              <ul>
                <li>Beneficiary review across every account</li>
                <li>Qualified charitable distributions from IRAs</li>
                <li>Donor-advised fund strategy</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.32s' }}>
              <span className="num">05 / Discipline</span>
              <h3>Ongoing Fiduciary Oversight</h3>
              <p>
                Plans are living documents. We meet at least annually, more
                often when life calls for it, to reconfirm what the plan is
                doing and what it should be doing next.
              </p>
              <ul>
                <li>Annual written plan review</li>
                <li>Quarterly performance reporting</li>
                <li>Direct access between scheduled meetings</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
          ========================================================= */}
      <section className="alt-mist">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">What working together looks like</span>
            <h2>A simple, four-step engagement.</h2>
          </div>

          <ol className="process-list">
            <li className="reveal">
              <span className="p-num">01</span>
              <h3>Introductory meeting</h3>
              <p>
                A no-obligation conversation, in person or by video, that
                exists to answer one question: are we the right fit for what
                you are trying to do? If we are, we will tell you. If we are
                not, we will point you toward someone who is.
              </p>
            </li>

            <li className="reveal" style={{ '--delay': '.08s' }}>
              <span className="p-num">02</span>
              <h3>Discovery and analysis</h3>
              <p>
                We gather statements, tax returns, and the answers to a small
                number of important questions. From that, we build a baseline
                of where you stand today and where current trajectory leads.
              </p>
            </li>

            <li className="reveal" style={{ '--delay': '.16s' }}>
              <span className="p-num">03</span>
              <h3>Written plan and implementation</h3>
              <p>
                You receive a written plan that ties together goals, cash
                flow, investments, tax, and risk. If you choose to implement
                with us, we open accounts at an independent custodian and
                manage from there.
              </p>
            </li>

            <li className="reveal" style={{ '--delay': '.24s' }}>
              <span className="p-num">04</span>
              <h3>Ongoing reviews</h3>
              <p>
                We meet at least once a year for a full plan review, and
                quarterly for performance and rebalancing. You also have
                direct access whenever a life event calls for a fresh look.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* =========================================================
          DISCLOSURE
          ========================================================= */}
      <section className="alt">
        <div className="wrap">
          <div className="disclosure-card reveal">
            <span className="eyebrow">Important disclosure</span>
            <p>
              Investment Advisory Services are offered through{' '}
              <a href="https://meridianwealthllc.com" target="_blank" rel="noopener noreferrer">
                Meridian Wealth Management, LLC
              </a>
              , an SEC-registered investment adviser. Registration does not
              imply any level of skill or training. Patty M. Breeze is an
              Investment Adviser Representative of Meridian Wealth Management,
              LLC. Insurance products and services are offered separately
              through Breeze Financial, LLC. Investing involves risk,
              including the possible loss of principal. Past performance is
              not a guarantee of future results. Statistics cited above are
              drawn from publicly available industry research and are
              provided for general educational purposes, not as a forecast of
              any individual portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
          ========================================================= */}
      <section className="page-cta">
        <div className="wrap">
          <div className="cta-card reveal">
            <h2>Ready to put a written plan around it?</h2>
            <p className="lead">
              The first conversation is always free. The hardest part of any
              financial plan is starting one.
            </p>
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">
                Request a meeting
                <span className="arr" aria-hidden="true">→</span>
              </Link>
              <Link href="/insurance" className="btn btn-ghost">
                Insurance programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
