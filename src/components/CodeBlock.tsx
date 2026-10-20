import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import dart from 'react-syntax-highlighter/dist/esm/languages/prism/dart';
import swift from 'react-syntax-highlighter/dist/esm/languages/prism/swift';
import materialDark from 'react-syntax-highlighter/dist/esm/styles/prism/material-dark';
import { useState } from 'react';

// Light build: register only the languages the blog posts use (register more here when needed)
SyntaxHighlighter.registerLanguage('dart', dart);
SyntaxHighlighter.registerLanguage('swift', swift);

interface CodeBlockProps {
  children: string;
  language?: string;
}

function CodeBlock({ children, language = 'dart' }: CodeBlockProps) {
  const [copyState, setCopyState] = useState('Copy code');
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(children);
      setCopyState('Copied');
    } catch {
      setCopyState('Unable to copy—select the code');
    }
  }
  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-language">{language}</span>
        <button type="button" onClick={copyCode} aria-live="polite">{copyState}</button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 8px 8px',
          fontSize: '15px',
          lineHeight: '1.7',
          padding: '24px',
          background: '#1e1e1e',
        }}
        // The theme paints a background on the inline <code>, which shows up as boxes behind each line
        codeTagProps={{ style: { background: 'transparent' } }}
        showLineNumbers={false}
        wrapLongLines={true}
        PreTag="pre"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;

