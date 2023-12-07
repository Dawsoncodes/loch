import { FC, HTMLAttributes } from "react"
import Image from "next/image"

import { Card, CardItem, Marquee, Input } from "@/components"
import { cn } from "@/utils"

const cards: CardItem[] = [
  {
    Icon: (props) => (
      <Image {...props} src="/icons/bell-2.svg" alt="bell icon" />
    ),
    Button: (props) => <button {...props}>Save</button>,
    Body: ({ className, ...props }) => (
      <div {...props} className={cn(className, "w-full")}>
        We&apos;ll be sending <br />
        notifications to you <br />
        here
      </div>
    ),
    Footer: (props) => <Input {...props} readOnly value="hello@gmail.com" />,
  },
  {
    Icon: (props) => (
      <Image {...props} src="/icons/bar-chart.svg" alt="bar chart icon" />
    ),
    Button: (props) => (
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...props}
      />
    ),
    Body: (props) => (
      <div {...props}>Notify me when any wallet moves more than 1000 ETH</div>
    ),
    Footer: (props) => (
      <div className="w-full flex justify-start">
        <div
          {...props}
          className="bg-gray-100 p-1 px-2 flex items-center gap-1 rounded-md justify-start"
        >
          <p className="text-black font-medium">$1000.00</p>
          <Image
            src="/icons/triangle-down.svg"
            alt="triangle down icon"
            width={25}
            height={25}
            className="selft-start"
          />
        </div>
      </div>
    ),
  },
  {
    Icon: (props) => (
      <Image {...props} src="/icons/clock.svg" alt="clock icon" />
    ),
    Button: (props) => (
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...props}
      />
    ),
    Body: ({ className, ...props }) => (
      <div {...props} className={cn(className, "w-full")}>
        Notify me when any <br /> wallet dormant for
      </div>
    ),
    Footer: (props) => (
      <div className="w-full flex flex-col items-start font-medium">
        <div
          {...props}
          className="bg-gray-100 p-1 px-2 flex items-center gap-1 rounded-md justify-start"
        >
          {"> "}
          30 days
          <Image
            src="/icons/triangle-down.svg"
            alt="triangle down icon"
            width={25}
            height={25}
            className="selft-start"
          />
        </div>
        <p className="mt-2 font-medium text-xl">becomes active</p>
      </div>
    ),
  },
]

interface FeaturesMarqueeProps extends HTMLAttributes<HTMLDivElement> {}

export const FeaturesMarquee: FC<FeaturesMarqueeProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("relative rounded-xl overflow-hidden", className)}
      {...props}
    >
      <Marquee className="rounded-xl items-stretch flex">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </Marquee>

      <div className="absolute top-0 bottom-0 right-0 w-[150px] h-full bg-gradient-to-l from-dark-500/40 rounded-xl" />
      <div className="absolute top-0 bottom-0 left-0 w-[150px] h-full bg-gradient-to-r from-dark-500/40 rounded-xl" />
    </div>
  )
}
