import type React from 'react'

import type { PomodoroSettings as Settings } from '../../../types/common.ts'

interface Props {
  settings: Settings
  onSubmit: (settings: Settings) => void
}

export const SettingsAttributes: React.FC<Props> = ({ settings, onSubmit }: Props) => {}
