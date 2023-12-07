import { FC, HTMLAttributes } from "react"
import { IconBell } from "@tabler/icons-react"

import { FeaturesMarquee, Group, H2, Text } from "@/components"
import { cn, createStroke } from "@/utils"
import Image from "next/image"

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <Group className={cn("", className)} {...props}>
      {/* Bell and text */}
      <div className="flex flex-col w-1/2 pl-14">
        {/* <IconBell className="text-white" size={30} /> */}

        <Image width={40} height={40} src="/icons/bell.svg" alt="Bell svg" />

        <H2
          style={{
            textShadow: `${
              createStroke(1, "black").textShadow
            }, 2px 2px 4px rgba(0,0,0,0.5)`,
          }}
          className="text-white mt-4 leading-tight"
        >
          Get notified when a <br />
          highly correlated <br />
          whale makes a move
        </H2>

        <Text className="text-lg w-5/6 mt-2">
          Find out when a certain whale moves more than any preset amount
          on-shain or when a dormant whale you care about becomes active.
        </Text>
      </div>

      <div className="w-1/2 -mr-40">
        <FeaturesMarquee />
      </div>

      {/* Cards */}
      {/* <Group className="flex gap-3 items-stretch relative -mr-32">
      </Group> */}
    </Group>
  )
}
