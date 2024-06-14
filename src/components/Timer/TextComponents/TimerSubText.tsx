import '../styles/TimerSubText.scss'
import type React from 'react'

interface Props {
  text: string
  onClick?: () => void
}

export const TimerSubText: React.FC<Props> = ({ text, onClick }: Props) => {
  return (
    <text className="sub-text h3" x="50%" y="75%" onClick={onClick}>
      {text}
    </text>
  )
}
