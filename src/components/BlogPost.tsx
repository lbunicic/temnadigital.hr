import Link from './Link';
import NotFound from './NotFound';
import { posts } from '../data/siteMeta';
import { postContent } from '../data/blogPosts';
import { Children, cloneElement, isValidElement, type ReactNode } from 'react';

function articleSections(content: ReactNode) {
  const sections: { id: string; title: string; level: string }[] = [];
  function text(node: ReactNode): string {
    return Children.toArray(node).map((child) =>
      isValidElement<{ children?: ReactNode }>(child) ? text(child.props.children) : String(child),
    ).join('');
  }
  function visit(node: ReactNode): ReactNode {
    return Children.map(node, (child) => {
      if (!isValidElement<{ children?: ReactNode; id?: string }>(child)) return child;
      if (child.type === 'h2' || child.type === 'h3') {
        const title = text(child.props.children);
        const id = `section-${sections.length + 1}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`;
        sections.push({ id, title, level: child.type });
        return cloneElement(child, { id });
      }
      return child.props.children ? cloneElement(child, { children: visit(child.props.children) }) : child;
    });
  }
  const body = visit(content);
  return { body, sections };
}

interface BlogPostProps {
  slug: string;
}

const SOURCE_NAMES: Record<string, string> = {
  'medium.com': 'Medium',
  'arsfutura.com': 'the Ars Futura blog',
};

function sourceName(link: string) {
  const host = new URL(link).hostname.replace(/^www\./, '');
  return SOURCE_NAMES[host] ?? host;
}

// Full article page (loaded lazily together with the article bodies and the code highlighter)
function BlogPost({ slug }: BlogPostProps) {
  const post = posts.find((p) => p.slug === slug);
  const content = postContent[slug];
  if (!post || !content) return <NotFound />;
  const { body, sections } = articleSections(content);

  return (
    <article className="page blog-post-page">
      <div className="reading-progress" aria-hidden="true"></div>
      <div className="blog-post-content">
        <Link to="/blog" className="page-back">
          ← All writing
        </Link>

        <header className="blog-post-header">
          <span className="blog-post-category">{post.category}</span>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-divider">•</span>
            <span className="blog-post-read-time">{post.readTime}</span>
            <span className="blog-post-divider">•</span>
            <span className="blog-post-author">{post.author}</span>
          </div>
        </header>

        <details className="article-contents" open>
          <summary>In this article <span>{sections.length} sections</span></summary>
          <nav aria-label="Article contents">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} data-level={section.level}>{section.title}</a>
            ))}
          </nav>
        </details>

        <div className="blog-post-body">{body}</div>

        {post.originalLink && (
          <footer className="blog-post-footer">
            <p>Originally published on {sourceName(post.originalLink)}</p>
            <a href={post.originalLink} target="_blank" rel="noopener noreferrer" className="blog-post-original-link">
              View original article →
            </a>
          </footer>
        )}
      </div>
    </article>
  );
}

export default BlogPost;
