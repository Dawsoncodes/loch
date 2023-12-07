import { FC, HTMLAttributes } from "react"
import Image from "next/image"
import { IconEye } from "@tabler/icons-react"

import { Group, H2, Text } from "@/components"
import { cn } from "@/utils"

interface MiddleSectionProps extends HTMLAttributes<HTMLDivElement> {}

export const MiddleSection: FC<MiddleSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <Group className={cn("items-start", className)} {...props}>
      <Image
        src="/dashboard.png"
        width={500}
        height={500}
        alt="Dashboard screenshot"
        className="rounded-xl"
      />

      <Group vertical className="text-white py-20 items-end text-right w-full">
        <Image src="/icons/eye.svg" alt="Eye svg" width={40} height={40} />
        <H2>
          Watch what the <br /> whales are doing
        </H2>

        <Text className="w-full">
          All whales are not equal. Know exactly <br /> what the whales
          impacting YOUR <br />
          portfolio are doing.
        </Text>
      </Group>
    </Group>
  )
}
