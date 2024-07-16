import type React from 'react'

import type { PomodoroSettings as Settings } from '../../../../types/common.ts'
import { InputNumber } from '../../../Base/InputNumber/InputNumber.tsx'

interface Props {
  settings: Settings
  onSubmit: (settings: Settings) => void
}

export const SettingsPomodoros: React.FC<Props> = ({ settings, onSubmit }) => {
  return (
    <>
      <InputNumber
        style={{ width: '140px' }}
        id="shortBreak"
        value={settings.pomodorosUntilLongBreak}
        onUpdate={(value) => {
          onSubmit({
            ...settings,
            pomodorosUntilLongBreak: value,
          })
        }}
      />
    </>
  )
}
