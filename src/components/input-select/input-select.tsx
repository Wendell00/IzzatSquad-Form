'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement
} from 'react';

import { twMerge } from 'tailwind-merge';

import { useToggle } from '@/hooks/use-toggle';

import * as Builder from '../field';
import type { Option, SelectProps } from './types';
import { Popover, PopoverAnchor } from '../popover';

export function Select({
  options,
  value,
  label,
  errorMessage,
  onChange,
  renderIcon,
  placeholder,
  className = '',
  wrapperClass = '',
  required = false,
  disabled = false
}: SelectProps): ReactElement {
  const outsideRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | undefined>();
  const expanded = useToggle();

  const handleOnChange = useCallback(
    (option: Option) => {
      onChange(option);
      expanded.off();
    },
    [expanded, onChange]
  );

  useEffect(
    function getSelectWidth() {
      if (outsideRef.current) {
        const rect = outsideRef.current.getBoundingClientRect();
        setWidth(rect.width);
      }
    },
    [options.length]
  );

  const selected = useMemo(
    () => options.find((item) => item.value === value),
    [options, value]
  );

  return (
    <Popover open={expanded.value} onOpenChange={expanded.toggle}>
      <div
        className={twMerge('flex flex-col w-full relative', wrapperClass)}
        ref={outsideRef}
      >
        <PopoverAnchor>
          <Builder.Label text={label} isRequired={required}>
            <Builder.Select
              data-error={Boolean(errorMessage)}
              value={selected?.label}
              className={className}
              aria-expanded={expanded.value}
              onClick={expanded.on}
              placeholder={placeholder}
              disabled={disabled}
            />
          </Builder.Label>
        </PopoverAnchor>
        <Builder.ErrorMessage>{errorMessage}</Builder.ErrorMessage>
      </div>
      <Builder.WrapperOption style={{ width }} className="relative z-20">
        {options.map((option, index) => (
          <Builder.Option
            key={index}
            value={option.value}
            aria-selected={option.value === value}
            onClick={() => handleOnChange(option)}
          >
            {renderIcon ? renderIcon(option) : null}
            {option.label}
          </Builder.Option>
        ))}
      </Builder.WrapperOption>
    </Popover>
  );
}
