import Link from './Link';
import { posts } from '../data/siteMeta';
import { postGraphic } from '../data/graphics';

function Blog() {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <section id="blog" className="blog">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Blog</span>
          <h2 className="section-title">
            Thoughts, insights & <span className="text-gradient">learnings</span>
          </h2>
          <p className="section-subtitle">
            Sharing knowledge and experiences from my journey in the digital world.
          </p>
        </div>

        <div className="blog-grid">
          {featuredPost && (
            <article className="blog-card featured">
              <div className="blog-image">
                {postGraphic(featuredPost.slug)}
                <span className="blog-category">{featuredPost.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{featuredPost.date}</span>
                  <span className="blog-divider">•</span>
                  <span className="blog-read-time">{featuredPost.readTime}</span>
                </div>
                <h3 className="blog-title">{featuredPost.title}</h3>
                <p className="blog-excerpt">{featuredPost.excerpt}</p>
                <Link to={`/blog/${featuredPost.slug}`} className="blog-link blog-link-button">
                  Read Article
                  <span className="link-arrow">→</span>
                </Link>
              </div>
            </article>
          )}

          <div className="blog-list">
            {regularPosts.map((post) => (
              <article key={post.slug} className="blog-card compact">
                <div className="blog-graphic-small">
                  {postGraphic(post.slug)}
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category-tag">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-read-time">{post.readTime}</span>
                    <Link to={`/blog/${post.slug}`} className="blog-link blog-link-button">
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="blog-cta">
          <Link to="/blog" className="btn btn-secondary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;

