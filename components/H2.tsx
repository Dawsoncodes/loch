import { cn } from "@/utils"
import { FC, HTMLAttributes } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export const H2: FC<HeadingProps> = ({ className, ...props }) => {
  return <h2 className={cn("text-4xl", className)} {...props} />
}
