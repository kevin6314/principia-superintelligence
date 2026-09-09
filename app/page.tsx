const possibilities = [
  { number: '01', title: 'Find a new direction', text: 'Explore hypotheses and approaches that could change how you solve the problem.' },
  { number: '02', title: 'Make each experiment count', text: 'Focus on the tests and measurements that reveal what to pursue next.' },
  { number: '03', title: 'Understand the result', text: 'See the reasoning, assumptions and evidence behind a promising solution.' },
];
const inquiry = 'mailto:hello@principiasuperintelligence.com';
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a href="#main" className="wordmark" aria-label="Principia Superintelligence home">principia<span>SUPERINTELLIGENCE</span></a>
        <nav aria-label="Main navigation"><a href="#approach">Approach</a><a href="#applications">Applications</a><a href={inquiry}>Contact ↗</a></nav>
      </header>
      <main id="main">
        <section className="hero">
          <img className="hero-art" src="/principia-prism.png" alt="" width="1672" height="941" fetchPriority="high" />
          <div className="wrap hero-copy">
            <p className="eyebrow">PRINCIPIA SUPERINTELLIGENCE</p>
            <h1>Intelligence for<br /><em>scientific<br />discovery.</em></h1>
            <p className="hero-description">We’re building AI to help scientists and engineers find new solutions and put them to the test.</p>
            <a className="text-link" href={inquiry}>Work with us <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-foot wrap"><span>SCIENCE & ENGINEERING</span><span>New ideas. Real-world progress.</span></div>
        </section>
        <section id="approach" className="approach wrap section-space">
          <div className="section-heading"><p className="eyebrow">DISCOVER MORE</p><h2>Hard problems deserve<br />new ways of thinking.</h2></div>
          <p className="section-intro">A better model. An unexpected explanation. The experiment that changes your next move. Principia brings AI reasoning to the work of discovery.</p>
          <ol className="steps">{possibilities.map(item => <li key={item.number}><span className="step-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
        </section>
        <section id="applications" className="applications section-space">
          <div className="wrap"><div className="section-heading"><p className="eyebrow">WHERE WE’RE WORKING</p><h2>Discovery with<br />consequences.</h2></div>
            <div className="application-row"><span className="application-index">01 / LIFE SCIENCES</span><div><h3>Better evidence<br />for new medicines.</h3><p>Which experiment could change a drug-development decision? We’re working on ways to distinguish competing explanations and reveal the most useful next step.</p></div></div>
            <div className="application-row"><span className="application-index">02 / SPATIAL INTELLIGENCE</span><div><h3>A more accurate picture<br />of the world.</h3><p>What would make a better 3D model? We’re investigating how changes in capture and reconstruction can improve what machines see and understand.</p></div></div>
          </div>
        </section>
        <section className="principle wrap section-space"><p className="eyebrow">OUR FOUNDATION</p><h2>Imagination, backed<br /><em>by rigorous reasoning.</em></h2><p>We bring mathematical reasoning and verification together with experiments and domain expertise. The aim: new ideas whose logic can be examined and whose value can be tested in the world.</p></section>
        <section id="contact" className="company section-space"><div className="wrap company-grid"><div><p className="eyebrow">WORK WITH PRINCIPIA</p><h2>What are you<br /><em>trying to solve?</em></h2></div><div className="company-copy"><p>We’d like to hear from scientists, engineers and organizations working on difficult problems.</p><p>Tell us what you’re investigating and what progress would make possible.</p><a className="text-link inquiry-link" href={inquiry}>hello@principiasuperintelligence.com <span aria-hidden="true">↗</span></a></div></div></section>
      </main>
      <footer className="site-footer wrap"><a className="wordmark" href="#main">principia<span>SUPERINTELLIGENCE</span></a><p>© 2026 Principia Superintelligence</p><a href={inquiry}>Get in touch ↗</a></footer>
    </>
  );
}
