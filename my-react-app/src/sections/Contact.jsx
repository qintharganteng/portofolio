import { profile } from '../data/profile';
import Reveal from '../components/ui/Reveal';
import './Contact.css';

export default function Contact() {
  const socials = [{ label: 'LinkedIn', url: "https://www.linkedin.com/in/muhammad-qinthar-3454442ba/" }, { label: 'GitHub', url: "https://github.com/qintharganteng" }].filter(item => item.url);
  return (
    <section className="contact-section" id="contact"><div className="page-shell">
      <Reveal><div className="contact-eyebrow flex justify-between"><span className="eyebrow">09 / GET IN TOUCH</span><span className="eyebrow">LET'S START A CONVERSATION</span></div><h2>Have something<br/><em>in mind?</em></h2><a className="contact-mail" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a></Reveal>
      <div className="contact-bottom flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div className="contact-socials">{socials.map(item=><a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer">{item.label} ↗</a>)}{profile.resumeUrl && <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">Download résumé ↗</a>}</div></div>
    </div></section>
  );
}
