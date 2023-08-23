type LogoProps = {
  variant: "white" | "primary"
}

const variantClassname: Record<LogoProps["variant"], string> = {
  white: "text-white",
  primary: "inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#71D1E6] to-[#3EB8F9]"
}

export const Logo = (props: LogoProps) => {
  return (        
    <div className={`font-bold uppercase text-2xl ${variantClassname[props?.variant || "white"]}`}>LOGO</div>
  )
}