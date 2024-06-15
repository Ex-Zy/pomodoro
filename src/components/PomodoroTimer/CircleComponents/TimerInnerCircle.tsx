import '../styles/TimerInnerCircle.scss'
import type React from 'react'

interface Props {
  children: React.ReactNode
}

export const TimerInnerCircle: React.FC<Props> = ({ children }: Props) => {
  return <div className="timer-inner">{children}</div>
}
