import type React from 'react'

interface Props {
  width?: number
  height?: number
}

export const IconArrowUp: React.FC<Props> = ({ width = 14, height = 7 }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path fill="none" strokeWidth="2" d="M1 6l6-4 6 4" />
    </svg>
  )
}
