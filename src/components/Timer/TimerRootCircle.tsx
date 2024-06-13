import './TimerRootCircle.scss'
import type React from 'react'

interface Props {
  className?: string
  children: React.ReactNode
}

export const TimerRootCircle: React.FC<Props> = ({ className = '', children }: Props) => {
  const timerRootClass = `timer-root ${className}`
  return <div className={timerRootClass}>{children}</div>
}
