import type React from 'react'

import { useSettingsTime } from '../../../hooks/useSettingsTime.ts'
import type { PomodoroSettings } from '../../../types/common.ts'
import { UtilsTimer } from '../../../utils/timer.ts'
import { InputNumber } from '../../InputNumber/InputNumber.tsx'

interface Props {
  settings: PomodoroSettings
  onSubmit: (settings: PomodoroSettings) => void
}

export const SettingsTime: React.FC<Props> = ({ settings, onSubmit }: Props) => {
  const { time, handleTimeChange } = useSettingsTime({ settings, onSubmit })
  return (
    <div className="settings-time">
      <InputNumber
        label="pomodoro"
        id="pomodoro"
        value={UtilsTimer.secondsToMinutes(time.pomodoro)}
        onUpdate={(value) => {
          handleTimeChange('pomodoro', value)
        }}
      />
      <InputNumber
        label="short break"
        id="shortBreak"
        value={UtilsTimer.secondsToMinutes(time.shortBreak)}
        onUpdate={(value) => {
          handleTimeChange('shortBreak', value)
        }}
      />
      <InputNumber
        label="long break"
        id="longBreak"
        value={UtilsTimer.secondsToMinutes(time.longBreak)}
        onUpdate={(value) => {
          handleTimeChange('longBreak', value)
        }}
      />
    </div>
  )
}
