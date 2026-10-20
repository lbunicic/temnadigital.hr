import Link from './Link';
import { posts } from '../data/siteMeta';
import { postGraphic } from '../data/graphics';

function BlogIndex() {
  return (
    <section className="page blog-index">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Writing</span>
          <h1 className="section-title">
            Thoughts, insights & <span className="text-gradient">learnings</span>
          </h1>
          <p className="section-subtitle">Articles on software architecture, type-driven design and mobile development.</p>
        </div>

        <div className="blog-index-list">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card compact blog-index-item">
              <div className="blog-graphic-small">{postGraphic(post.slug)}</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category-tag">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time">{post.readTime}</span>
                  <span className="blog-link" aria-hidden="true">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogIndex;
