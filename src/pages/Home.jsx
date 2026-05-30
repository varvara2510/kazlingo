import { Link } from 'react-router-dom';

export default function Home({ t }) {
  return (
    <div className="home-page">
      <h1>{t.welcome}</h1>

      <section className="home-section">
        <h2>{t.whatIsLing}</h2>
        <p>{t.lingDef}</p>

        <ul className="home-list">
          <li>{t.lingQ1}</li>
          <li>{t.lingQ2}</li>
          <li>{t.lingQ3}</li>
        </ul>

        <p>{t.lingEnd}</p>
      </section>

      <section className="home-section">
        <h2>{t.whatAreOly}</h2>

        <img
          src="/images/team_2026.jpg"
          alt="Kazakh team at IOL"
          className="floating-image"
        />

        <p>{t.olyIntro}</p>
        <p>{t.olyFormat}</p>
      </section>

      <section className="home-section">
        <h2>{t.whyParticipate}</h2>
        <p>{t.whyParticipateP1}</p>
        <p>{t.whyParticipateP2}</p>
        <p>{t.whyParticipateP3}</p>
      </section>

      <section className="home-cta">
        <h2>{t.readyToStart}</h2>
        <p>{t.ctaStart}</p>

        <div className="cta-buttons">
          <Link to="/participate" className="cta-button">
            {t.ctaParticipate}
          </Link>

          <Link to="/faq" className="cta-button secondary">
            {t.ctaFaq}
          </Link>
        </div>
      </section>
    </div>
  );
}