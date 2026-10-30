import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { profile } from '../data/profile';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-space about-section page-shell">
      <SectionHeading number="02" label="ABOUT" title="A little about me." aside="Not just what I do, but how I approach the work." />
      <div className="about-grid">
        <Reveal className="about-portrait">
          <div className="portrait-art" aria-label={profile.aboutPhoto ? 'Portrait of Qinthar' : 'Space reserved for a personal portrait'}>
            {profile.aboutPhoto ? (
              <img className="about-photo" src={profile.aboutPhoto} alt="Muhammad Qinthar Sabilla Almalki" loading="lazy" />
            ) : (
              <>
                <span className="portrait-mark">Q.</span>
                <div className="portrait-arch" aria-hidden="true" />
                <span className="portrait-caption">PLACE FOR A PORTRAIT / 4:5</span>
              </>
            )}
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <p className="about-large">I like working at the intersection of <span>design, technology, and data.</span></p>
          <div className="about-paragraphs">
            <p>I'm Qinthar, an Applied Informatics Engineering graduate from Universitas Logistik dan Bisnis Internasional. My experience covers front-end and Android development, data analytics, software quality assurance, and machine learning research.</p>
            <p>What interests me most is figuring out how something should work — and then making it clear, reliable, and useful for the people who use it.</p>
          </div>
          <div className="about-facts"><div><span>BASED IN</span><strong>Garut, Indonesia</strong></div><div><span>FOCUS</span><strong>Web, mobile & data</strong></div></div>
        </Reveal>
      </div>
    </section>
  );
}
