// components/ui/Text.tsx
'use client';
import React from 'react';
import clsx from 'clsx';

type TextVariant = 'header' | 'title' | 'context' | 'highlight' | 'subtext';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: TextVariant;
}

const variantStyles: Record<TextVariant, string> = {
  header: 'text-3xl font-bold',
  title: 'text-2xl font-semibold',
  context: 'text-xl font-semibold',
  highlight: 'text-xl font-semibold text-red-500',
  subtext: 'font-light text-gray-400',
};

const Text: React.FC<TextProps> = ({ children, variant = 'context', className = '', ...props }) => {
  return (
    <p className={clsx(variantStyles[variant], 'mb-2', className)} {...props}>
      {children}
    </p>
  );
};

export default Text;
