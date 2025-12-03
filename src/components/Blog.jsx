function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development: What to Expect in 2025',
      excerpt: 'Exploring emerging trends, technologies, and paradigms that will shape how we build for the web.',
      category: 'Technology',
      date: 'Dec 1, 2025',
      readTime: '8 min read',
      featured: true,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: 'Building Accessible React Applications',
      excerpt: 'A comprehensive guide to creating inclusive user experiences that work for everyone.',
      category: 'Development',
      date: 'Nov 24, 2025',
      readTime: '12 min read',
      featured: false,
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    },
    {
      id: 3,
      title: 'Design Systems: From Concept to Implementation',
      excerpt: 'How to create and maintain a design system that scales with your organization.',
      category: 'Design',
      date: 'Nov 15, 2025',
      readTime: '10 min read',
      featured: false,
      gradient: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    },
    {
      id: 4,
      title: 'The Art of Clean Code Architecture',
      excerpt: 'Principles and patterns for writing maintainable, scalable, and elegant code.',
      category: 'Development',
      date: 'Nov 8, 2025',
      readTime: '15 min read',
      featured: false,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 5,
      title: 'Client Communication: A Developer\'s Guide',
      excerpt: 'Essential soft skills and strategies for successful client relationships.',
      category: 'Business',
      date: 'Oct 30, 2025',
      readTime: '6 min read',
      featured: false,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

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
              <div className="blog-image" style={{ background: featuredPost.gradient }}>
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
                <a href="#" className="blog-link">
                  Read Article
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </article>
          )}

          <div className="blog-list">
            {regularPosts.map((post) => (
              <article key={post.id} className="blog-card compact">
                <div className="blog-accent" style={{ background: post.gradient }}></div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category-tag">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-read-time">{post.readTime}</span>
                    <a href="#" className="blog-link">
                      Read →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="blog-cta">
          <button className="btn btn-secondary">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;

