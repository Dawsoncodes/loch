"use client"
import { cn } from "@/utils"
import { FC, HTMLAttributes, ReactNode, cloneElement } from "react"

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {}

export const Marquee: FC<MarqueeProps> = ({
  className,
  children,
  style,
  ...props
}) => {
  const duplicatedChildren = Array.isArray(children)
    ? [...children, ...children]
    : [children, children]

  return (
    <div
      className={cn("flex items-center gap-5 w-max", className)}
      style={{ overflow: "hidden", ...style }}
      {...props}
    >
      <div
        style={{
          animation: "marquee 20s linear infinite",
          display: "flex",
          alignItems: "stretch",
          gap: "5px",
        }}
      >
        {duplicatedChildren}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
