function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Type-Driven Design: Safer Software for Complex Domains',
      excerpt: 'Exploring how leveraging strong type systems can help us build more reliable, maintainable software for complex business domains. A deep dive into type-driven design principles.',
      category: 'Software Engineering',
      date: 'Oct 22, 2025',
      readTime: '12 min read',
      featured: true,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: 'https://medium.com/@lovro.bunicic/type-driven-design-6412f29e3d5d',
    },
    {
      id: 2,
      title: 'Architectural Challenges in BLE SDK Development',
      excerpt: 'Lessons learned from building a Bluetooth Low Energy SDK for medical devices, including OTA updates and API design.',
      category: 'Mobile Development',
      date: 'Sep 15, 2024',
      readTime: '10 min read',
      featured: false,
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      link: 'http://tinyurl.com/ble-blogpost',
    },
    {
      id: 3,
      title: 'Flutter State Management: Patterns and Best Practices',
      excerpt: 'A practical guide to managing state in Flutter applications, from Provider to Riverpod and beyond.',
      category: 'Flutter',
      date: 'Jul 20, 2024',
      readTime: '14 min read',
      featured: false,
      gradient: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    },
    {
      id: 4,
      title: 'Building PCI-Compliant Payment Systems',
      excerpt: 'Security considerations and architectural decisions when developing payment solutions for mobile platforms.',
      category: 'Fintech',
      date: 'May 10, 2024',
      readTime: '11 min read',
      featured: false,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 5,
      title: 'SceneKit Integration with SwiftUI',
      excerpt: 'Bringing 3D experiences to SwiftUI apps: techniques, performance tips, and real-world examples.',
      category: 'iOS Development',
      date: 'Mar 5, 2024',
      readTime: '9 min read',
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
                <a 
                  href={featuredPost.link || '#'} 
                  target={featuredPost.link ? '_blank' : '_self'}
                  rel={featuredPost.link ? 'noopener noreferrer' : ''}
                  className="blog-link"
                >
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
                    <a 
                      href={post.link || '#'} 
                      target={post.link ? '_blank' : '_self'}
                      rel={post.link ? 'noopener noreferrer' : ''}
                      className="blog-link"
                    >
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

