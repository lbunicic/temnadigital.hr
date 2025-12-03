import { useState } from 'react';
import BlogPost from './BlogPost';
import { typeDrivenDesignPost, bleSdkPost } from '../data/blogPosts';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      ...typeDrivenDesignPost,
      featured: true,
      fullPost: typeDrivenDesignPost,
    },
    {
      ...bleSdkPost,
      featured: false,
      fullPost: bleSdkPost,
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
                <button 
                  onClick={() => setSelectedPost(featuredPost.fullPost)}
                  className="blog-link blog-link-button"
                >
                  Read Article
                  <span className="link-arrow">→</span>
                </button>
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
                    <button 
                      onClick={() => setSelectedPost(post.fullPost)}
                      className="blog-link blog-link-button"
                    >
                      Read →
                    </button>
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

      {selectedPost && (
        <BlogPost post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
}

export default Blog;

