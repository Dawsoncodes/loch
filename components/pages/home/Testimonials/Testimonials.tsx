import { Group, H2, LochLogo } from "@/components"
import { cn } from "@/utils"
import { FC, HTMLAttributes } from "react"
import Swiper from "./components/Swiper"

interface TestimonialsProps extends HTMLAttributes<HTMLDivElement> {}

export const Testimonials: FC<TestimonialsProps> = ({
  className,
  ...props
}) => {
  return (
    <Group vertical className={cn("items-end", className)} {...props}>
      <H2 className="text-white">Testimonials</H2>
      <hr className="w-full my-4" />

      <Group className="justify-start w-full items-stretch">
        <LochLogo />

        <Swiper style={{ marginRight: -100 }} />
      </Group>
    </Group>
  )
}
