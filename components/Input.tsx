import { cn } from "@/utils"
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "outline-none px-5 py-4 rounded-md border-[2px] border-gray-300 font-semibold text-sm",
        className
      )}
      {...props}
    />
  )
}
