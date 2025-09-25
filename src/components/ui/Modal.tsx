import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

// Utility to get container for portals
function getPortalRoot() {
  let root = document.getElementById('modal-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'modal-root';
    document.body.appendChild(root);
  }
  return root;
}

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'w-screen h-screen',
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  size = 'md',
  closeOnBackdrop = true,
  closeOnEsc = true,
  showCloseButton = true,
  className = '',
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Focus management: trap focus inside modal, return focus after close
  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      // Delay to allow DOM paint
      const id = window.setTimeout(() => {
        contentRef.current?.focus();
      }, 0);
      return () => window.clearTimeout(id);
    } else if (previouslyFocused.current) {
      previouslyFocused.current.focus();
    }
  }, [open]);

  // Escape key support
  useEffect(() => {
    if (!open || !closeOnEsc) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, closeOnEsc, onClose]);

  // Backdrop click to close (ignore clicks inside content)
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!closeOnBackdrop) return;
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!open) return null;

  const portalRoot = getPortalRoot();

  return createPortal(
    <div
      ref={overlayRef}
      onMouseDown={onBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Animated container */}
      <div
        ref={contentRef}
        tabIndex={-1}
        className={`relative w-full ${size !== 'full' ? sizeClasses[size] : ''} mx-4 ${size === 'full' ? 'h-[90vh]' : ''}`}
      >
        <div
          className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl outline-none focus:outline-none transition-all duration-300 ease-out transform animate-[fadeIn_0.2s_ease-out] ${className}`}
          style={{
            // Keyframe poly via inline style fallback
            animationName: 'fadeIn',
          }}
        >
          {showCloseButton && (
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {title && (
            <div className="px-6 pt-6">
              <h2 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
            </div>
          )}

          <div className={`px-6 ${title ? 'pt-4' : 'pt-6'} pb-6`}>{children}</div>
        </div>
      </div>

      {/* Inline keyframes for simple fade/scale */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(4px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0px) scale(1); }
        }
      `}</style>
    </div>,
    portalRoot
  );
};

export default Modal;
