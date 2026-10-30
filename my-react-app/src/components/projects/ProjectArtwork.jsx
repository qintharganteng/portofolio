import './ProjectArtwork.css';

/** Designed placeholder artwork. Swap with /public images via data/projects.js. */
export default function ProjectArtwork({ project }) {
  if (project.coverImage) {
    return <img className="project-cover-image" src={project.coverImage} alt={`${project.title} project cover`} loading="lazy" />;
  }

  const kind = project.artwork;
  if (kind === 'courier') return (
    <div className="art art-courier" aria-hidden="true">
      <div className="art-brandline"><span>COURIER<span className="art-brand-dot">.</span></span><span>COURIER EXPERIENCE / 2026</span></div>
      <div className="courier-bigtype">DELIVER<br /><em>better.</em></div>
      <div className="courier-phone">
        <div className="phone-top"><span>9:41</span><span>•••</span></div>
        <div className="phone-greeting">Good morning,<br /><strong>Qinthar.</strong></div>
        <div className="phone-map"><div className="map-road one"/><div className="map-road two"/><div className="map-road three"/><span className="map-point first"/><span className="map-point second"/></div>
        <div className="phone-stat"><small>YOUR NEXT DELIVERY</small><strong>Destination assigned</strong><span>View route →</span></div>
      </div>
      <div className="courier-footer">MOBILE UI <span>01—06</span></div>
    </div>
  );
  if (kind === 'canteen') return (
    <div className="art art-canteen" aria-hidden="true">
      <div className="canteen-nav"><span>canteen.</span><span>MENU &nbsp; ABOUT &nbsp; ORDER ↗</span></div>
      <div className="canteen-content"><span>FRESH FOOD, EVERY DAY.</span><strong>Good food.<br /><i>Good mood.</i></strong><span>Discover the menu ↗</span></div>
      <div className="canteen-plates"><div className="plate plate-one"><div className="plate-inner"/></div><div className="plate plate-two"><div className="plate-inner"/></div></div>
      <span className="canteen-credit">A FRESH TAKE ON CAFETERIA EXPERIENCE</span>
    </div>
  );
  if (kind === 'prediction') return (
    <div className="art art-prediction" aria-hidden="true">
      <div className="prediction-head"><span>LOGISTICS / ANALYTICS</span><span>CASE STUDY 03</span></div>
      <div className="prediction-main"><span className="prediction-kicker">FORECASTING & INSIGHTS</span><strong>Predict<br />the <i>delay.</i></strong></div>
      <div className="prediction-chart"><span className="chart-caption">DELIVERY RISK INDEX</span><svg viewBox="0 0 480 145" role="presentation" preserveAspectRatio="none"><g stroke="rgba(38,57,43,.18)" strokeWidth="1"><line x1="0" y1="36" x2="480" y2="36"/><line x1="0" y1="72" x2="480" y2="72"/><line x1="0" y1="108" x2="480" y2="108"/></g><polyline fill="none" stroke="#354e3b" strokeWidth="3" points="0,118 38,100 74,108 105,77 143,89 178,57 210,70 243,45 271,58 303,35 345,44 373,21 411,33 452,13 480,19"/><circle fill="#354e3b" cx="452" cy="13" r="6"/></svg><div className="chart-axis"><span>JAN</span><span>APR</span><span>JUL</span><span>OCT</span></div></div>
    </div>
  );
  if (kind === 'kaloriku') return (
    <div className="art art-kaloriku" aria-hidden="true">
      <div className="kaloriku-head"><span>kaloriku</span><span>SOFTWARE QUALITY / 2025</span></div>
      <div className="kaloriku-title">Quality is<br /><em>in the details.</em></div>
      <div className="kaloriku-browser"><div className="browser-toolbar"><span>● &nbsp; ● &nbsp; ●</span><span>kaloriku / dashboard</span></div><div className="browser-body"><div className="browser-sidebar"><span>Overview</span><span>Food diary</span><span>Activity</span><span>Settings</span></div><div className="browser-metrics"><small>TODAY'S OVERVIEW</small><div className="metric-row"><strong>1,420</strong><div className="metric-bars"><span/><span/><span/><span/><span/><span/><span/></div></div><p>Daily calories summary</p></div></div></div>
    </div>
  );
  if (kind === 'optimization') return (
    <div className="art art-optimization" aria-hidden="true">
      <div className="optimization-meta"><span>OPTIMIZATION / RESEARCH</span><span>2026</span></div>
      <strong className="optimization-title">Finding<br />the <i>balance.</i></strong>
      <div className="optimization-plot"><svg viewBox="0 0 480 205" role="presentation" preserveAspectRatio="none"><g stroke="rgba(255,255,255,.11)" strokeWidth="1"><line x1="22" y1="20" x2="22" y2="187"/><line x1="22" y1="187" x2="468" y2="187"/><line x1="22" y1="105" x2="468" y2="105"/><line x1="245" y1="20" x2="245" y2="187"/></g><path d="M 46 46 C 120 53, 143 94, 216 119 S 328 173, 452 177" stroke="#e4edc1" strokeWidth="3" fill="none"/>{[[46,46],[95,60],[147,93],[207,115],[256,141],[319,164],[371,171],[452,177]].map(([cx,cy])=><circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#e4edc1"/>)}</svg><span>PARETO FRONTIER / TWO OBJECTIVES</span></div>
    </div>
  );
  return (
    <div className="art art-review" aria-hidden="true">
      <div className="review-top"><span>RESEARCH NOTES</span><span>VOL. 01 / 2025</span></div>
      <strong className="review-title">ETA &<br />delivery<br /><em>delay.</em></strong>
      <div className="review-rule"/>
      <div className="review-bottom"><span>A SYSTEMATIC<br />LITERATURE REVIEW</span><span>ANALYSIS / LOGISTICS</span></div>
      <div className="review-index">06</div>
    </div>
  );
}
