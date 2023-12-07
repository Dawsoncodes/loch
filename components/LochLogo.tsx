import Image from "next/image"

export const LochLogo = () => {
  return (
    <Image
      width={70}
      height={70}
      src="/loch-logo.png"
      alt="loch logo"
      className="self-end"
    />
  )
}
