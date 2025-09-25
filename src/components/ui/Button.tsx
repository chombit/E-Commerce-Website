import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200';

  const variantClasses = {
    primary: 'bg-brand text-white bg-brand-hover focus:ring-2 ring-brand',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border border-brand text-brand bg-brand-hover focus:ring-2 ring-brand',
    ghost: 'text-brand bg-brand-hover focus:ring-2 ring-brand',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  } as const;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={combinedClasses} disabled={isLoading} {...props}>
      {isLoading ? <LoadingSpinner size="sm" /> : children}
    </button>
  );
};

export default Button;
