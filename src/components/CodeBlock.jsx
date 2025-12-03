function CodeBlock({ children, language = 'dart' }) {
  return (
    <pre className="code-block">
      <span className="code-language">{language}</span>
      <code>{children}</code>
    </pre>
  );
}

export default CodeBlock;

