import React, { createContext, useCallback, useContext } from 'react';

interface ToastContextDate {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextDate>({} as ToastContextDate);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('RemoveToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextDate {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastPovider');
  }

  return context;
}

export { ToastProvider, useToast };
