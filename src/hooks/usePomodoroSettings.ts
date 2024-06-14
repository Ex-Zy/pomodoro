import { useState } from 'react'

import type { PomodoroSettings } from '../types/common.ts'
import { UtilsTimer } from '../utils/timer.ts'

export const usePomodoroSettings = () => {
  const [settings, setSettings] = useState<PomodoroSettings>({
    time: {
      pomodoro: UtilsTimer.minutesToSeconds(25),
      shortBreak: UtilsTimer.minutesToSeconds(5),
      longBreak: UtilsTimer.minutesToSeconds(15),
    },
    font: {
      active: 'Roboto',
      available: ['Roboto', 'Arial', 'Courier New'],
    },
    color: {
      active: '#5394fd',
      available: ['#5394fd', '#f44336', '#4caf50'],
    },
    pomodorosUntilLongBreak: 4,
    autoStartBreak: true,
    autoStartPomodoro: true,
    autoStartLongBreak: false,
  })

  function handleSettingsChange(newSettings: Partial<PomodoroSettings>) {
    setSettings((prevState) => ({ ...prevState, ...newSettings }))
  }

  return {
    settings,
    handleSettingsChange,
  }
}
