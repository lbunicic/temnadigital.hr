

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  graphic: React.ReactNode;
  originalLink?: string;
  content: React.ReactNode;
  featured?: boolean;
}

interface BlogPostProps {
  post: BlogPostData | null;
  onClose: () => void;
}

function BlogPost({ post, onClose }: BlogPostProps) {
  if (!post) return null;

  return (
    <div className="blog-post-overlay" onClick={onClose}>
      <div className="blog-post-modal" onClick={(e) => e.stopPropagation()}>
        <button className="blog-post-close" onClick={onClose}>×</button>

        <article className="blog-post-content">
          <header className="blog-post-header">
            <span className="blog-post-category">{post.category}</span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">{post.date}</span>
              <span className="blog-post-divider">•</span>
              <span className="blog-post-read-time">{post.readTime}</span>
              <span className="blog-post-divider">•</span>
              <span className="blog-post-author">Lovro Buničić</span>
            </div>
          </header>

          <div className="blog-post-body">
            {post.content}
          </div>

          {post.originalLink && (
            <footer className="blog-post-footer">
              <p>Originally published on Medium</p>
              <a href={post.originalLink} target="_blank" rel="noopener noreferrer" className="blog-post-original-link">
                View original article →
              </a>
            </footer>
          )}
        </article>
      </div>
    </div>
  );
}

export default BlogPost;

