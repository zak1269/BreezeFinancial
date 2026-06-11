import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import RevealOnScroll from '../components/RevealOnScroll';

export const metadata = {
  title: 'Insurance Programs | Breeze Financial, LLC',
  description:
    'Independent insurance brokerage covering life, disability, long-term care, key-person, buy-sell, deferred compensation, and workers’ compensation.'
};

export default function Insurance() {
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
            <span className="eyebrow">Insurance Programs</span>
            <h1>
              Protection built around{' '}
              <span className="accent">the risk,</span> not the brochure.
            </h1>
            <p className="lead">
              As independent brokers, we shop the carriers on your behalf, so
              the policies you put in place actually fit the life or business
              they are protecting. No proprietary products. No sales quotas.
              We work with dozens of A-rated carriers, and we are paid the
              same regardless of which one wins your business.
            </p>
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">
                Request a coverage review
                <span className="arr" aria-hidden="true">→</span>
              </Link>
              <a href="#coverage" className="btn btn-ghost">What we cover</a>
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
            <h2>The numbers most households underestimate.</h2>
            <p className="lead">
              Insurance is the quiet foundation under every financial plan.
              When it is sized correctly, you rarely think about it. When it
              is not, a single event can undo a decade of saving. A few
              figures we keep in front of clients.
            </p>
          </div>

          <div className="stat-grid">
            <div className="stat reveal">
              <span className="stat-num">41%</span>
              <h3>of American adults say they need more life insurance, or any at all</h3>
              <p>
                LIMRA’s Insurance Barometer Study has found a persistent gap
                between the coverage households say they need and what they
                actually own. The most common reason given is cost, even
                though most respondents overestimate the premium by a factor
                of three.
              </p>
              <span className="stat-source">Source: LIMRA &amp; Life Happens, 2023 Insurance Barometer Study.</span>
            </div>

            <div className="stat reveal" style={{ '--delay': '.08s' }}>
              <span className="stat-num">1 in 4</span>
              <h3>of today’s 20-year-olds will become disabled before retirement</h3>
              <p>
                The Social Security Administration estimates that roughly a
                quarter of workers entering the labor force today will
                experience a disability lasting 90 days or more before age 67.
                Private long-term disability coverage exists precisely for
                this gap.
              </p>
              <span className="stat-source">Source: U.S. Social Security Administration, Fact Sheet.</span>
            </div>

            <div className="stat reveal" style={{ '--delay': '.16s' }}>
              <span className="stat-num">70%</span>
              <h3>of Americans turning 65 will need long-term care of some kind</h3>
              <p>
                The U.S. Department of Health and Human Services projects
                that about seven in ten adults reaching age 65 will need
                long-term services and supports during their lifetime, with
                roughly 20% needing care for longer than five years.
              </p>
              <span className="stat-source">Source: U.S. Department of Health and Human Services, longtermcare.gov.</span>
            </div>

            <div className="stat reveal" style={{ '--delay': '.24s' }}>
              <span className="stat-num">~70%</span>
              <h3>of small businesses operate without a fully funded buy-sell agreement</h3>
              <p>
                Industry surveys of closely held businesses consistently
                report that the majority of owners either have no buy-sell
                agreement or have one that is not funded with a dedicated
                policy. The result is forced sales, family conflict, and
                value left on the table.
              </p>
              <span className="stat-source">Source: Aggregated industry surveys, including MassMutual Business Owner Perspectives.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COVERAGE
          ========================================================= */}
      <section id="coverage">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">What we cover</span>
            <h2>Seven kinds of risk, one independent broker.</h2>
            <p className="lead">
              Each line below is shopped across multiple carriers. We
              underwrite for the strongest available rating class first, then
              compare pricing, contract language, and rider availability.
              Premium is rarely the whole story.
            </p>
          </div>

          <div className="services-grid">
            <article className="service reveal">
              <span className="num">01 / Coverage</span>
              <h3>Life Insurance</h3>
              <p>
                Term, permanent, and survivorship policies sized to actual
                income replacement, debt, and legacy needs, not to a generic
                multiple of salary. Most coverage is meaningfully cheaper
                than households assume.
              </p>
              <ul>
                <li>10, 20, and 30-year level term</li>
                <li>Whole life and universal life</li>
                <li>Second-to-die for estate liquidity</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.06s' }}>
              <span className="num">02 / Coverage</span>
              <h3>Disability Income Insurance</h3>
              <p>
                Income protection is often the single largest gap on a
                household balance sheet. We focus on own-occupation
                definitions, non-cancelable contracts, and benefit periods
                that actually reach retirement.
              </p>
              <ul>
                <li>Individual and group long-term disability</li>
                <li>Own-occupation, non-cancelable contracts</li>
                <li>Specialty coverage for physicians and dentists</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.12s' }}>
              <span className="num">03 / Coverage</span>
              <h3>Long-Term Care</h3>
              <p>
                Traditional long-term care, hybrid life with care riders, and
                annuity-based options. The right structure depends on health
                history, premium tolerance, and how you want the unused
                benefit treated at death.
              </p>
              <ul>
                <li>Stand-alone long-term care policies</li>
                <li>Hybrid life and LTC contracts</li>
                <li>Partnership-qualified plans in eligible states</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.18s' }}>
              <span className="num">04 / Coverage</span>
              <h3>Key-Person Insurance</h3>
              <p>
                For closely held businesses, key-person coverage funds the
                cost of recruiting, lost revenue, and creditor confidence if
                a founder, lead salesperson, or technical leader is suddenly
                unavailable.
              </p>
              <ul>
                <li>Life and disability on key employees</li>
                <li>Coverage sized to revenue contribution and replacement cost</li>
                <li>Tax-efficient policy ownership structures</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.24s' }}>
              <span className="num">05 / Coverage</span>
              <h3>Buy-Sell Funding</h3>
              <p>
                A buy-sell agreement on paper is not the same as a buy-sell
                agreement with cash behind it. We coordinate with your
                attorney and CPA to make sure the funding mechanism actually
                triggers when it needs to.
              </p>
              <ul>
                <li>Cross-purchase and entity-redemption structures</li>
                <li>Insurance-funded triggers at death or disability</li>
                <li>Annual review as company value changes</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.30s' }}>
              <span className="num">06 / Coverage</span>
              <h3>Deferred Compensation</h3>
              <p>
                Nonqualified deferred compensation plans help business owners
                reward, retain, and selectively benefit key executives
                without the contribution caps of qualified plans. Insurance
                often serves as the informal funding vehicle.
              </p>
              <ul>
                <li>Section 162 bonus arrangements</li>
                <li>Nonqualified deferred compensation plan design</li>
                <li>Executive carve-out disability and life</li>
              </ul>
            </article>

            <article className="service reveal" style={{ '--delay': '.36s' }}>
              <span className="num">07 / Coverage</span>
              <h3>Workers’ Compensation</h3>
              <p>
                Workers’ compensation is mandatory in nearly every state, but
                premiums and class codes vary widely between carriers. We
                shop the market and audit classifications so you are not
                paying for risk you do not carry.
              </p>
              <ul>
                <li>Multi-carrier premium comparisons</li>
                <li>Class code and experience modifier reviews</li>
                <li>Coordination with payroll and HR</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDEPENDENT BROKER
          ========================================================= */}
      <section className="alt-mist">
        <div className="wrap">
          <div className="values-hero reveal">
            <span className="eyebrow">Why independent matters</span>
            <h2>
              Captive agents sell one shelf. <em>We shop the whole store.</em>
            </h2>
            <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              A captive agent represents one carrier. We represent you, and
              place coverage with the carrier whose underwriting, pricing,
              and contract language best fits your situation today. That
              independence is the most underrated source of value in this
              line of work.
            </p>
          </div>

          <div className="values-grid">
            <div className="value reveal">
              <span className="v-num">01</span>
              <h3>Underwriting strategy first</h3>
              <p>
                Two applicants with identical health histories can pay
                materially different premiums depending on how the case is
                presented. We pre-underwrite informally before any
                application is submitted.
              </p>
            </div>

            <div className="value reveal" style={{ '--delay': '.1s' }}>
              <span className="v-num">02</span>
              <h3>Multiple carrier quotes</h3>
              <p>
                Every recommendation is benchmarked against at least three
                A-rated carriers. The cheapest premium is not always the
                right answer, but you should always see what it is.
              </p>
            </div>

            <div className="value reveal" style={{ '--delay': '.2s' }}>
              <span className="v-num">03</span>
              <h3>Annual review</h3>
              <p>
                Life changes. Health changes. The market changes. Each year
                we revisit coverage in force to make sure it still maps to
                the household or business it was designed to protect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
          ========================================================= */}
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">How we work</span>
            <h2>A four-step coverage review.</h2>
          </div>

          <ol className="process-list">
            <li className="reveal">
              <span className="p-num">01</span>
              <h3>Risk audit</h3>
              <p>
                We start with what could go wrong, sized in dollars. Income
                loss, medical events, business continuity, estate liquidity.
                Coverage decisions follow from that audit, not the other way
                around.
              </p>
            </li>

            <li className="reveal" style={{ '--delay': '.08s' }}>
              <span className="p-num">02</span>
              <h3>Carrier comparison</h3>
              <p>
                We pull illustrations from multiple A-rated carriers, normalize
                contract language, and review riders and exclusions side by
                side. You see the math before you sign anything.
              </p>
            </li>

            <li className="reveal" style={{ '--delay': '.16s' }}>
              <span className="p-num">03</span>
              <h3>Underwriting and placement</h3>
              <p>
                We manage the application, the medical underwriting, and any
                follow-up the carrier requests. Final placement only happens
                once the offer matches the assumption we built the plan
                around.
              </p>
            </li>

            <li className="reveal" style={{ '--delay': '.24s' }}>
              <span className="p-num">04</span>
              <h3>Annual review</h3>
              <p>
                Each year we confirm beneficiaries, reconfirm coverage
                amounts, and check whether new products or better pricing
                have come to market.
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
              Insurance products and services are offered through Breeze
              Financial, LLC. Investment Advisory Services are offered
              separately through{' '}
              <a href="https://meridianwealthllc.com" target="_blank" rel="noopener noreferrer">
                Meridian Wealth Management, LLC
              </a>
              , an SEC-registered investment adviser. All insurance products
              are subject to carrier underwriting, contract terms, and state
              availability. Guarantees are backed solely by the
              claims-paying ability of the issuing carrier. Statistics cited
              on this page are drawn from publicly available industry
              research and government sources, and are provided for general
              educational purposes only.
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
            <h2>Curious whether your current coverage still fits?</h2>
            <p className="lead">
              We will review what you have in force, identify gaps and
              overlaps, and tell you honestly whether a change is worth
              making. Free, no obligation, often surprising.
            </p>
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">
                Request a coverage review
                <span className="arr" aria-hidden="true">→</span>
              </Link>
              <Link href="/wealth-management" className="btn btn-ghost">
                Wealth management
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
