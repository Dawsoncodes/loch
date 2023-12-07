import { cn } from "@/utils"
import { FC, HTMLAttributes } from "react"

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Text: FC<TextProps> = ({ className, ...props }) => {
  return <p className={cn("text-lg text-gray-300", className)} {...props} />
}
