import { useState } from 'react'

import type { PomodoroSettings } from '../types/common.ts'
import { DEFAULT_POMODORO_SETTINGS } from '../utils/constants.ts'

export const usePomodoroSettings = (initialSettings: PomodoroSettings = DEFAULT_POMODORO_SETTINGS) => {
  const [settings, setSettings] = useState<PomodoroSettings>(initialSettings)

  function handleSettingsChange(newSettings: Partial<PomodoroSettings>) {
    setSettings((prevState) => ({ ...prevState, ...newSettings }))
  }

  return {
    settings,
    handleSettingsChange,
  }
}
