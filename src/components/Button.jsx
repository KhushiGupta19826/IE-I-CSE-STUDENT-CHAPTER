/**
 * Button component
 * variant: "primary" | "secondary" | "outline" | "ghost" | "white"
 * size: "sm" | "md" | "lg"
 */

import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900 shadow-sm hover:shadow-md focus-visible:outline-blue-700",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900 shadow-sm hover:shadow-md focus-visible:outline-slate-900",
  outline:
    "border-2 border-blue-700 text-blue-700 hover:bg-blue-50 active:bg-blue-100 focus-visible:outline-blue-700",
  ghost:
    "text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus-visible:outline-slate-700",
  white:
    "bg-white text-blue-700 hover:bg-blue-50 active:bg-blue-100 shadow-sm hover:shadow-md focus-visible:outline-blue-700",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
