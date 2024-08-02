'use client';

import { type ElementRef, type ReactElement, forwardRef } from 'react';

import { Content, Portal } from '@radix-ui/react-popover';
import { twMerge } from 'tailwind-merge';

import type { Props } from './types';

export const PopoverContent = forwardRef<ElementRef<typeof Content>, Props>(
  function Popover(
    { className = '', align = 'center', ...props },
    ref
  ): ReactElement {
    return (
      <Portal>
        <Content
          ref={ref}
          align={align}
          className={twMerge(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className
          )}
          {...props}
        />
      </Portal>
    );
  }
);
