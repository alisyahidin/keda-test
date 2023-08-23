import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  variant: "primary" | "secondary",
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClassnames: Record<ButtonProps["variant"], string> = {
  primary: "bg-gradient-to-br from-[#71D1E6] to-[#3EB8F9] text-white",
  secondary: "py-1 px-10 border-2 border-[#3EB8F9] text-[#3EB8F9]",
}

export const Button = ({children, variant, className, ...props}: ButtonProps) => {
  return (
    <button {...props} className={`rounded-lg ${variantClassnames[variant || "primary"]} ${className || ""}`.trim()}>
      {children}
    </button>
  )
}
