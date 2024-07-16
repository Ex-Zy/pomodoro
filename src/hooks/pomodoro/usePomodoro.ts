import { useEffect } from 'react'

import { usePomodoroSettings } from './usePomodoroSettings.ts'
import { usePomodoroTimer } from './usePomodoroTimer.ts'

export const usePomodoro = () => {
  const { settings, handleSettingsChange } = usePomodoroSettings()

  const {
    task,
    totalTime,
    isRunning,
    timer,
    pomodoroMode,
    pomodoroSessionCount,
    runTimer,
    stopTimer,
    changeMode,
    handleTaskAction,
  } = usePomodoroTimer({
    settings,
  })

  useEffect(() => {
    if (isRunning) {
      runTimer()
    }

    return () => {
      stopTimer()
    }
  }, [isRunning, timer, pomodoroMode, pomodoroSessionCount, settings, runTimer, stopTimer])

  return {
    settings,
    timer,
    isRunning,
    pomodoroMode,
    pomodoroSessionCount,
    task,
    totalTime,

    // Common actions
    handleSettingsChange,
    changeMode,
    handleTaskAction,
  }
}
