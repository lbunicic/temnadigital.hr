import { useEffect, useState } from 'react';

const TOAST_EVENT = 'app:toast';
const TOAST_DURATION_MS = 2600;

interface ToastDetail {
  message: string;
  success: boolean;
}

export function showToast(message: string, success = true) {
  window.dispatchEvent(new CustomEvent<ToastDetail>(TOAST_EVENT, { detail: { message, success } }));
}

export async function copyToClipboard(text: string, successMessage: string) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    // Clipboard can be blocked (permissions, insecure context): still show the value
    showToast(text, false);
  }
}

// Single live region for short confirmations (rendered once in App)
function Toast() {
  const [toast, setToast] = useState<(ToastDetail & { id: number }) | null>(null);

  useEffect(() => {
    let timeout: number | undefined;
    const handleToast = (event: Event) => {
      setToast({ id: Date.now(), ...(event as CustomEvent<ToastDetail>).detail });
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => setToast(null), TOAST_DURATION_MS);
    };
    window.addEventListener(TOAST_EVENT, handleToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, handleToast);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && (
        <div key={toast.id} className="toast">
          {toast.success && <span className="toast-check" aria-hidden="true">✓</span>}
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default Toast;
