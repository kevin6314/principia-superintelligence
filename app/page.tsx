const investigations = [
  { number: '01', title: 'Frame the problem', text: 'Bring your data, code and domain knowledge. Define the question, constraints and what a useful result would look like.' },
  { number: '02', title: 'Explore possible solutions', text: 'Develop candidate explanations, models or changes. Choose the calculations and experiments that can distinguish them.' },
  { number: '03', title: 'Learn from the evidence', text: 'Review results and assumptions. Use measurements, expert judgment and formal checks to decide what to try next.' },
];
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a href="#" className="wordmark" aria-label="Principia Superintelligence home">principia<span>SUPERINTELLIGENCE</span></a>
        <nav aria-label="Main navigation"><a href="#approach">Approach</a><a href="#applications">Applications</a><a href="#company">Company</a></nav>
      </header>
      <main id="main">
        <section className="hero">
          <img className="hero-art" src="/principia-prism.png" alt="" width="1672" height="941" fetchPriority="high" />
          <div className="wrap hero-copy">
            <p className="eyebrow">AI FOR APPLIED DISCOVERY</p>
            <h1>Intelligence for<br />the problems<br /><em>that matter.</em></h1>
            <p className="hero-description">We’re building a research workspace that turns frontier AI into progress on real-world scientific and engineering problems.</p>
            <a className="text-link" href="#approach">Explore our approach <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-foot wrap"><span>PRINCIPIA SUPERINTELLIGENCE</span><span>Ideas tested against the world.</span></div>
        </section>
        <section id="approach" className="approach wrap section-space">
          <div className="section-heading"><p className="eyebrow">OUR APPROACH</p><h2>Give every promising idea<br />a path to evidence.</h2></div>
          <p className="section-intro">Scientific progress takes more than a plausible answer. It takes a well-defined problem, a useful investigation and the discipline to revise what you believe.</p>
          <ol className="steps">{investigations.map(item => <li key={item.number}><span className="step-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
          <p className="approach-note">Designed to work with your notebooks, repositories and existing research tools.</p>
        </section>
        <section id="applications" className="applications section-space">
          <div className="wrap"><div className="section-heading"><p className="eyebrow">STARTING WITH APPLIED PROBLEMS</p><h2>Different disciplines.<br />The same drive to discover.</h2></div>
            <div className="application-row"><span className="application-index">01 / LIFE SCIENCES</span><div><h3>Choose the evidence that moves<br className="desktop-break" /> a program forward.</h3><p>Our early work in drug development explores which experiment could resolve the uncertainty holding back a decision.</p></div></div>
            <div className="application-row"><span className="application-index">02 / SPATIAL INTELLIGENCE</span><div><h3>Find the change that makes<br className="desktop-break" /> a better 3D model.</h3><p>Our early work in spatial intelligence explores how capture and reconstruction choices affect quality, and where another measurement would help.</p></div></div>
          </div>
        </section>
        <section className="principle wrap section-space"><p className="eyebrow">RESEARCH YOU CAN EXAMINE</p><h2>Make the assumptions visible.<br /><em>Let the evidence lead.</em></h2><p>We combine AI reasoning with domain expertise, empirical evaluation and selective formal verification. Each has a role. A proof checks a claim under its assumptions; real-world performance still needs measurement.</p></section>
        <section id="company" className="company section-space"><div className="wrap company-grid"><div><p className="eyebrow">OUR AMBITION</p><h2>Advanced research<br />capability, in the hands<br />of people building<br /><em>what comes next.</em></h2></div><div className="company-copy"><p>We’re starting with focused scientific and engineering workflows. Over time, we aim to help useful methods travel between problems, preserving the assumptions that make them work.</p><p>Founded by Kevin Omwega and Nick Litombe.</p><div className="founder-links"><a href="https://www.linkedin.com/in/kevin-omwega/" target="_blank" rel="noopener noreferrer">Kevin Omwega <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/nicklitombe/" target="_blank" rel="noopener noreferrer">Nick Litombe <span aria-hidden="true">↗</span></a></div></div></div></section>
      </main>
      <footer className="site-footer wrap"><a className="wordmark" href="#">principia<span>SUPERINTELLIGENCE</span></a><p>© 2026 Principia Superintelligence</p><a href="#main">Back to top ↑</a></footer>
    </>
  );
}
