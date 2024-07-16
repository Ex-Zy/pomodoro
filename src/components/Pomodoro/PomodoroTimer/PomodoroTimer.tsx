import './PomodoroTimer.scss'
import { clsx } from 'clsx'
import type React from 'react'

import type { PomodoroTask } from '../../../types/common.ts'
import { UtilsTimer } from '../../../utils/timer.ts'

interface TimerProps {
  total: number
  timer: number
  task: PomodoroTask
  onTaskAction: () => void
}

export const PomodoroTimer: React.FC<TimerProps> = ({ total, timer, task, onTaskAction }) => {
  const formatedTimer = UtilsTimer.displayTime(timer)
  const formatedTotal = UtilsTimer.secondsToMinutesWithRound(total)
  const formatedProgress = UtilsTimer.secondsToMinutesWithRound(timer)
  return (
    <>
      <div className="timer-root timer-root--margin">
        <div className="timer-inner">
          <svg
            className={clsx('timer-progress', {
              'timer-progress--finished': timer === 0,
            })}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ '--total': formatedTotal, '--progress': formatedProgress } as React.CSSProperties}
          >
            <circle className="timer-progress-circle" />
            <text className="count-text h1" x="50%" y="50%">
              {formatedTimer}
            </text>
            <text className="sub-text h3" x="50%" dx="5px" y="75%" onClick={onTaskAction}>
              {task}
            </text>
          </svg>
        </div>
      </div>
    </>
  )
}
