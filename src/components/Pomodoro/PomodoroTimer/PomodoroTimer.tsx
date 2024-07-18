import './PomodoroTimer.scss'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
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
      <motion.div
        className="timer-root timer-root--margin"
        initial={{ x: -80, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 1.2,
            duration: 0.3,
          },
        }}
      >
        <div className="timer-inner">
          <svg
            className={clsx('timer-progress', {
              'timer-progress--finished': timer === 0,
            })}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ '--total': formatedTotal, '--progress': formatedProgress } as React.CSSProperties}
          >
            <motion.circle
              className="timer-progress-circle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 1.5,
                  duration: 0.3,
                },
              }}
            />
            <motion.text
              className="count-text h1"
              x="50%"
              y="50%"
              initial={{ y: -20, opacity: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.8,
                  duration: 0.3,
                },
              }}
            >
              {formatedTimer}
            </motion.text>
            <motion.text
              className="sub-text h3"
              x="50%"
              dx="5px"
              y="75%"
              onClick={onTaskAction}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.1,
                  duration: 0.3,
                },
              }}
            >
              {task}
            </motion.text>
          </svg>
        </div>
      </motion.div>
    </>
  )
}
