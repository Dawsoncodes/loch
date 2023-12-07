import { Group, Text } from "@/components"
import { cn } from "@/utils"
import { FC, HTMLAttributes } from "react"

export type TestimonialItem = {
  title: string
  subtitle: string
  description: string
}

interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  testimonial: TestimonialItem
}

export const Testimonial: FC<TestimonialProps> = ({
  className,
  testimonial,
  ...props
}) => {
  const { title, subtitle, description } = testimonial

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-gray-200 p-5 w-[400px] hover:bg-gray-100 cursor-pointer duration-100 hover:shadow-md active:scale-[99%] select-none",
        className
      )}
      {...props}
    >
      <Group>
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-gray-400 text-sm font-medium">{subtitle}</p>
      </Group>

      <Text className="mt-5 font-semibold leading-tight text-black text-base">
        &quot;{description}&quot;
      </Text>
    </div>
  )
}
