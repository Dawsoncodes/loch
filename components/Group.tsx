import { cn } from "@/utils"
import { FC, HTMLAttributes } from "react"

interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean
}

export const Group: FC<GroupProps> = ({
  className,
  vertical = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        { "flex-col": vertical },
        className
      )}
      {...props}
    />
  )
}
