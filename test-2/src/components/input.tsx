import type { InputHTMLAttributes, ReactElement } from "react";
import { forwardRef } from "react";

export type InputProps = {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ leftIcon, rightIcon, error, ...props }, ref) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 mt-4">
        {leftIcon}
      </div>
      <label htmlFor="password" className="relative mx-auto flex w-full flex-col gap-1">
        <input
          {...props}
          ref={ref}
          className="flex-1 border-b-2 py-3 pr-9 shadow-none outline-none"
        />
        {rightIcon && <div className="absolute right-0 py-1 pl-3 pr-1">{rightIcon}</div>}
        <span className="text-danger min-h-[18px] text-xs">{error}</span>
      </label>
    </div>
  );
});

export default Input;
