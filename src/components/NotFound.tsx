import Link from './Link';

const shortcutKey = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘' : 'Ctrl';

function NotFound() {
  return (
    <section className="page not-found">
      <div className="section-container">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 className="page-title">This page doesn't exist</h1>
        <p className="not-found-text">
          The link may be broken, or the page may have moved. Try one of these instead, or press{' '}
          <kbd>{shortcutKey}</kbd> <kbd>K</kbd> to search.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Back home <span className="btn-arrow">→</span>
          </Link>
          <Link to="/blog" className="btn btn-secondary">
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
