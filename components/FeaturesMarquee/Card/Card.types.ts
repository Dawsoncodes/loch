import { ImageProps } from "next/image"
import { FC, HTMLAttributes } from "react"

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLInputElement> {}

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export type CardItem = {
  Icon: FC<Partial<ImageProps>>
  Button: FC<ButtonProps>
  Body: FC<HTMLAttributes<HTMLDivElement>>
  Footer: FC<FooterProps>
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  card: CardItem
}
