import { profile } from '../../data/profile';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer page-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <span>Muhammad Qinthar Sabilla Almaliki </span>
      <span>Designed with intention. Hire me!</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
