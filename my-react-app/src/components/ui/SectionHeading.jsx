
import Reveal from "./Reveal";

export default function SectionHeading({
  number,
  label,
  title,
  aside,
  className = "",
}) {
  const showKicker = Boolean(number || label);

  return (
    <Reveal className={`section-heading ${className}`}>
      <div className="section-heading-main">

        {/* Show only when number or label exists */}
        {showKicker && (
          <span className="eyebrow section-kicker">
            {number && <span>{number}</span>}

            {number && label && (
              <span> / </span>
            )}

            {label && <span>{label}</span>}
          </span>
        )}

        <h2 className="section-display">
          {title}
        </h2>

      </div>

      {aside && (
        <p className="section-aside">
          {aside}
        </p>
      )}
    </Reveal>
  );
}
