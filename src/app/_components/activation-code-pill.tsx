type Props = {
  code: string;
  label?: string;
  variant?: "light" | "dark";
};

export function ActivationCodePill({ code, label = "Activation code", variant = "light" }: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
        isDark
          ? "bg-white/10 text-white ring-1 ring-white/20"
          : "bg-white text-brand-teal-700 ring-1 ring-grayscale-200 shadow-sm",
      ].join(" ")}
    >
      <span className={isDark ? "text-white/70" : "text-grayscale-500"}>
        {label.toUpperCase()}
      </span>
      <span className={["font-bold tracking-wide", isDark ? "text-white" : "text-brand-mint-600"].join(" ")}>
        {code}
      </span>
    </div>
  );
}
