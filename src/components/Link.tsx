import { navigate, shouldHandleClick } from '../hooks/useRouter';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  transition?: boolean;
}

// Anchor for in-app routes; modified clicks (new tab etc.) fall through to the browser
function Link({ to, transition, onClick, children, ...rest }: LinkProps) {
  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event);
        if (!shouldHandleClick(event)) return;
        event.preventDefault();
        navigate(to, { transition });
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Link;
