import '../styles/TimerCountText.scss'
import type React from 'react'

interface Props {
  text: string
}

export const TimerCountText: React.FC<Props> = ({ text }: Props) => {
  return (
    <text className="count-text h1" x="50%" y="50%">
      {text}
    </text>
  )
}
