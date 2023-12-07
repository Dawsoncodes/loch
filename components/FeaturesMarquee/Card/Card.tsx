import { FC } from "react"
import { cn } from "@/utils"
import { Group } from "@/components"
import { CardProps } from "./Card.types"

export const Card: FC<CardProps> = ({ className, card, ...props }) => {
  const { Button, Footer, Icon, Body } = card

  const size = 40
  return (
    <Group
      vertical
      className={cn(
        "bg-white w-[300px] justify-between p-5 rounded-xl shadow-md border border-gray-200",
        className
      )}
      {...props}
    >
      <Group className="justify-between w-full">
        <Icon width={size} height={size} />
        <Button className="font-semibold" />
      </Group>

      <Body className="text-xl font-medium" />

      <Footer className="w-full" />
    </Group>
  )
}
