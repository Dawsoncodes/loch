import { cn } from "@/utils"
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "bg-dark-500 px-5 py-4 rounded-md hover:bg-dark-600 text-white text-center active:scale-[99%] duration-100",
        className
      )}
      {...props}
    />
  )
}
