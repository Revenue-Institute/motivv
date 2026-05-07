import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverted";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint-500 disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-mint-500 text-white shadow-sm hover:bg-brand-mint-600 active:bg-brand-mint-700",
  secondary:
    "bg-white text-brand-teal-700 ring-1 ring-grayscale-200 hover:bg-grayscale-50 hover:ring-grayscale-300",
  ghost: "text-brand-teal-700 hover:bg-grayscale-100",
  inverted:
    "bg-white text-brand-teal-700 hover:bg-grayscale-100 active:bg-grayscale-200",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [base, sizes[size], variants[variant], className].filter(Boolean).join(" ");
}

type LinkCtaProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function CtaLink({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: LinkCtaProps) {
  return (
    <Link className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

type ButtonCtaProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  size?: Size;
};

export function CtaButton({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: ButtonCtaProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
