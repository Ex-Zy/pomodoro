import { useEffect, useState } from 'react'

import type { PomodoroSettings, PomodoroTimeOptions } from '../types/common.ts'
import { UtilsTimer } from '../utils/timer.ts'

interface UseSettingsTimeOptions {
  settings: PomodoroSettings
  onSubmit: (settings: PomodoroSettings) => void
}

export const useSettingsTime = ({ settings, onSubmit }: UseSettingsTimeOptions) => {
  const [time, setTime] = useState<PomodoroSettings['time']>(settings.time)

  useEffect(() => {
    setTime({ ...settings.time })
  }, [settings])

  const handleTimeChange = (inputName: keyof PomodoroTimeOptions, value: number) => {
    onSubmit({
      ...settings,
      time: {
        ...time,
        [inputName]: UtilsTimer.minutesToSeconds(value),
      },
    })
  }

  return {
    time,
    handleTimeChange,
  }
}
