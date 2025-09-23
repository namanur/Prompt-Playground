// src/components/ui/toast.tsx
"use client";

import { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastProps extends Toast {
  onClose: (id: string) => void;
}

function ToastItem({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const icons = {
    success: <CheckCircle className="text-green-400" size={20} />,
    error: <AlertCircle className="text-red-400" size={20} />,
    warning: <AlertCircle className="text-yellow-400" size={20} />,
    info: <Info className="text-blue-400" size={20} />,
  };

  const colors = {
    success: 'border-green-400/20 bg-green-400/5',
    error: 'border-red-400/20 bg-red-400/5',
    warning: 'border-yellow-400/20 bg-yellow-400/5',
    info: 'border-blue-400/20 bg-blue-400/5',
  };

  return (
    <div className={`
      flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm
      ${colors[type]}
      animate-in slide-in-from-right-full duration-300
    `}>
      {icons[type]}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm">{title}</p>
        {message && <p className="text-sm text-white/70 mt-1">{message}</p>}
      </div>
      <button
        onClick={() => onClose(id)}
        className="text-white/60 hover:text-white/80 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}

let toastCount = 0;

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = `toast-${++toastCount}`;
    setToasts(prev => [...prev, { ...toast, id }]);
    return id;
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {toasts.map(toast => (
        <ToastItem
          key={toast.id}
          {...toast}
          onClose={removeToast}
        />
      ))}
    </div>
  );

  return {
    addToast,
    removeToast,
    ToastContainer,
    toasts,
  };
}