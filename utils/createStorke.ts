import { CSSProperties } from "react"

export const createStroke = (
  width: number,
  color: CSSProperties["color"],
  axes = 50
) => {
  const step = (2 * Math.PI) / axes
  const shadows = []

  for (let theta = 0; theta < 2 * Math.PI; theta += step) {
    const x = Math.round(width * Math.cos(theta))
    const y = Math.round(width * Math.sin(theta))
    shadows.push(`${x}px ${y}px 0 ${color}`)
  }

  return { textShadow: shadows.join(", ") }
}
