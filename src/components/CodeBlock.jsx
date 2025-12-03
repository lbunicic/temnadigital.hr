import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ children, language = 'dart' }) {
  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-language">{language}</span>
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
        showLineNumbers={false}
        wrapLongLines={true}
        PreTag="div"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;

