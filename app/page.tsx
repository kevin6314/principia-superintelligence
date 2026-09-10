const inquiry = 'mailto:hello@principiasuperintelligence.com';
export const dynamic = 'force-static';

function BrandMark() {
  return <span className="brand-lockup"><svg className="brand-symbol" viewBox="0 0 108 44" fill="none" aria-hidden="true"><path d="M5 22H14M54 22H106" stroke="currentColor" strokeWidth="1.2" /><circle cx="34" cy="22" r="20" stroke="currentColor" strokeWidth="1.2" /><circle cx="34" cy="22" r="4.2" fill="currentColor" /><circle cx="5" cy="22" r="2.3" fill="currentColor" /></svg><span>PRINCIPIA</span></span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#experience">Skip to content</a>
      <main id="experience">
        <section className="gravity-scroll" aria-label="Newtonian discovery">
          <div className="gravity-stage">
            <img
              className="engraving"
              src={`${process.env.PAGES_BUILD === '1' ? '/principia-superintelligence' : ''}/newton-notebook-engraving-v3.png`}
              alt="An engraved scholar reclining beneath an apple tree"
              width="1672"
              height="941"
              fetchPriority="high"
            />
            <div className="paper-light" aria-hidden="true" style={{ opacity: 0.08 }} />

            <header className="site-header">
              <a className="mini-mark" href="#experience" aria-label="Principia Superintelligence home">
                <BrandMark />
              </a>
              <nav aria-label="Main navigation">
                <a href="#method">Approach</a>
                <a href="#applications">Applications</a>
                <a href={inquiry}>Contact ↗</a>
              </nav>
            </header>

            <div className="masthead" aria-hidden="true">
              {'PRINCIPIA'.split('').map((letter, index) => <span className={index === 0 ? 'initial' : undefined} key={index}>{letter}</span>)}
            </div>
            <div className="masthead-rule" aria-hidden="true">
              <span>SUPERINTELLIGENCE</span>
            </div>

            <div className="copy-frame">
              <div className="opening-copy">
                <h1>Intelligence for<br />scientific discovery.</h1>
                <p>We’re building AI to help scientists and engineers find new solutions and put them to the test.</p>
                <a className="text-link" href={inquiry}>Work with us <span aria-hidden="true">↗</span></a>
              </div>
            </div>

          </div>
        </section>
        <section className="method-section" id="method" aria-labelledby="method-title">
          <div className="method-intro"><p className="eyebrow">OUR APPROACH</p><h2 id="method-title">From a question<br />to <em>evidence.</em></h2></div>
          <div className="method-detail"><p>Principia combines AI reasoning, mathematical verification, experiments and domain expertise to explore hypotheses, choose useful tests and understand the evidence.</p>
            <div className="applications" id="applications"><article><h3>Life sciences</h3><p>Helping identify the experiments that could change a drug-development decision.</p></article><article><h3>Spatial intelligence</h3><p>Investigating better ways to capture and reconstruct the world in 3D.</p></article></div>
          </div>
        </section>
        <section className="contact-section" aria-labelledby="contact-title"><h2 id="contact-title">What are you <em>trying to solve?</em></h2><div><p>Tell us what you’re investigating and what progress would make possible.</p><a className="text-link" href={inquiry}>Start a conversation <span aria-hidden="true">↗</span></a></div></section>
      </main>
      <footer className="site-footer">
        <a className="mini-mark" href="#experience" aria-label="Principia Superintelligence home"><BrandMark /></a>
        <span>© 2026 Principia Superintelligence</span>
        <a href={inquiry}>hello@principiasuperintelligence.com ↗</a>
      </footer>
    </>
  );
}
