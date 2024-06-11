import { useState } from 'react'

import type { PomodoroSettings } from '../types/common.ts'

export const usePomodoroSettings = () => {
  const [settings, setSettings] = useState<PomodoroSettings>({
    time: {
      pomodoro: 5000,
      shortBreak: 2000,
      longBreak: 10000,
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
    autoStartPomodoro: false,
    autoStartLongBreak: true,
  })

  function handleSettingsChange(newSettings: Partial<PomodoroSettings>) {
    setSettings((prevState) => ({ ...prevState, ...newSettings }))
  }

  return {
    settings,
    handleSettingsChange,
  }
}
