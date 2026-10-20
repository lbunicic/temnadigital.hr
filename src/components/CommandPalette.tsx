import { useEffect, useMemo, useRef, useState } from 'react';
import cvPdf from '../assets/cv_bunicic.pdf';
import { navigate } from '../hooks/useRouter';
import { useTheme } from '../context/ThemeContext';
import { copyToClipboard } from './Toast';
import { SITE, posts, projects } from '../data/siteMeta';

interface Command {
  id: string;
  label: string;
  group: string;
  hint?: string;
  // Navigates away (pages, sections, composer), so focus shouldn't jump back to the trigger
  moves?: boolean;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onNavigateSection: (id: string) => void;
  onOpenComposer: () => void;
}

function downloadCV() {
  const link = document.createElement('a');
  link.href = cvPdf;
  link.download = 'Lovro_Bunicic_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function CommandPalette({ open, onClose, onNavigateSection, onOpenComposer }: CommandPaletteProps) {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  // Set when a command moves to another page/section, where returning focus to the trigger would be wrong
  const skipFocusReturnRef = useRef(false);

  const commands = useMemo<Command[]>(
    () => [
      ...['home', 'projects', 'cv', 'blog'].map((id) => ({
        id: `section-${id}`,
        label: id === 'cv' ? 'CV' : id.charAt(0).toUpperCase() + id.slice(1),
        group: 'Go to',
        moves: true,
        run: () => onNavigateSection(id),
      })),
      { id: 'page-writing', label: 'All writing', group: 'Go to', moves: true, run: () => navigate('/blog') },
      ...projects.map((project) => ({
        id: `work-${project.slug}`,
        label: project.name,
        group: 'Work',
        hint: `${project.category} · ${project.year}`,
        moves: true,
        run: () => navigate(`/work/${project.slug}`),
      })),
      ...posts.map((post) => ({
        id: `post-${post.slug}`,
        label: post.title,
        group: 'Writing',
        hint: post.date,
        moves: true,
        run: () => navigate(`/blog/${post.slug}`),
      })),
      {
        id: 'action-theme',
        label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`,
        group: 'Actions',
        run: () => toggleTheme(),
      },
      { id: 'action-message', label: 'Send a message', group: 'Actions', moves: true, run: onOpenComposer },
      {
        id: 'action-email',
        label: 'Copy email address',
        group: 'Actions',
        hint: SITE.email,
        run: () => copyToClipboard(SITE.email, 'Email copied to clipboard'),
      },
      { id: 'action-cv', label: 'Download CV (PDF)', group: 'Actions', run: downloadCV },
      {
        id: 'action-linkedin',
        label: 'Open LinkedIn',
        group: 'Actions',
        run: () => window.open(SITE.linkedin, '_blank', 'noopener,noreferrer'),
      },
    ],
    [theme, toggleTheme, onNavigateSection, onOpenComposer]
  );

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return commands;
    return commands.filter((command) => {
      const haystack = `${command.label} ${command.group} ${command.hint ?? ''}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [commands, query]);

  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    skipFocusReturnRef.current = false;
    setQuery('');
    setActiveIndex(0);
    inputRef.current?.focus();
    return () => {
      if (!skipFocusReturnRef.current) returnFocusRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  if (!open) return null;

  const runCommand = (command: Command | undefined) => {
    if (!command) return;
    skipFocusReturnRef.current = Boolean(command.moves);
    onClose();
    command.run();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => (results.length ? (index + 1) % results.length : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      runCommand(results[activeIndex]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    } else if (event.key === 'Tab') {
      // Keep focus inside the dialog
      event.preventDefault();
    }
  };

  let lastGroup = '';

  return (
    <div className="palette-overlay" onMouseDown={onClose}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="palette-search">
          <span className="palette-search-icon" aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            className="palette-input"
            placeholder="Search projects, posts, actions…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-results"
            aria-activedescendant={results[activeIndex] ? `palette-${results[activeIndex].id}` : undefined}
            aria-autocomplete="list"
          />
          <kbd className="palette-esc">esc</kbd>
        </div>

        <ul id="palette-results" ref={listRef} className="palette-results" role="listbox" aria-label="Results">
          {results.length === 0 && <li className="palette-empty">No results for “{query}”</li>}
          {results.map((command, index) => {
            const showGroup = command.group !== lastGroup;
            lastGroup = command.group;
            return (
              <li key={command.id} role="presentation">
                {showGroup && <div className="palette-group">{command.group}</div>}
                <div
                  id={`palette-${command.id}`}
                  data-index={index}
                  role="option"
                  aria-selected={index === activeIndex}
                  className={`palette-item${index === activeIndex ? ' active' : ''}`}
                  onMouseMove={() => setActiveIndex(index)}
                  onClick={() => runCommand(command)}
                >
                  <span className="palette-item-label">{command.label}</span>
                  {command.hint && <span className="palette-item-hint">{command.hint}</span>}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="palette-footer" aria-hidden="true">
          <span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
