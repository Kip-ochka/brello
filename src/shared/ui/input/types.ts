import type { InputHTMLAttributes } from "react";

export interface Props<T extends string>
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onValue: ({ value, name }: { value: string; name: T }) => void;
  name: T;
  value: string;
  label?: string;
  type?: "text" | "email" | "search";
  hint?: string;
  variant?: "sm" | "md";
  error?: string;
}
