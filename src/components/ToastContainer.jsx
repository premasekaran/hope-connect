import { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ICONS = {
  success: <CheckCircle size={20} color="var(--emerald-500)" />,
  error: <AlertCircle size={20} color="var(--rose-500)" />,
  info: <Info size={20} color="var(--blue-500)" />,
  warning: <AlertTriangle size={20} color="var(--amber-500)" />,
};

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast toast-${toast.type || 'info'}`}>
          {ICONS[toast.type] || ICONS.info}
          <div style={{ flex: 1 }}>
            {toast.title && <div className="toast-title">{toast.title}</div>}
            {toast.message && <div className="toast-message">{toast.message}</div>}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--slate-400)', padding: 4 }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
