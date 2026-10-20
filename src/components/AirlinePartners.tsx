interface AirlinePartnersProps {
  airlines: string[];
  compact?: boolean;
}

function AirlinePartners({ airlines, compact = false }: AirlinePartnersProps) {
  const visibleAirlines = compact ? airlines.slice(0, 6) : airlines;

  return (
    <section className={`airline-partners${compact ? ' airline-partners-compact' : ''}`}>
      <p className="airline-partners-label">Airlines using MOST</p>
      <ul className="airline-partners-list">
        {visibleAirlines.map((airline) => (
          <li key={airline}>{airline}</li>
        ))}
        {compact && airlines.length > visibleAirlines.length && (
          <li className="airline-partners-more">+{airlines.length - visibleAirlines.length} more</li>
        )}
      </ul>
    </section>
  );
}

export default AirlinePartners;
