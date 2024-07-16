import { Checkbox, List, ListItem } from '@mui/joy'
import type React from 'react'

import type { PomodoroSettings as Settings } from '../../../../types/common.ts'

interface Props {
  settings: Settings
  onSubmit: (settings: Settings) => void
}

export const SettingsAutoStart: React.FC<Props> = ({ settings, onSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    onSubmit({
      ...settings,
      [e.target.name]: e.target.checked,
    })
  }

  return (
    <>
      <List size="lg">
        <ListItem>
          <Checkbox
            sx={{ font: '400 14px/1.4 var(--font-family)' }}
            variant="outlined"
            label="Pomodoro"
            name="autoStartPomodoro"
            checked={settings.autoStartPomodoro}
            onChange={handleChange}
          />
        </ListItem>
        <ListItem>
          <Checkbox
            sx={{ font: '400 14px/1.4 var(--font-family)' }}
            variant="outlined"
            label="Short break"
            name="autoStartBreak"
            checked={settings.autoStartBreak}
            onChange={handleChange}
          />
        </ListItem>
        <ListItem>
          <Checkbox
            sx={{ font: '400 14px/1.4 var(--font-family)' }}
            variant="outlined"
            label="Long break"
            name="autoStartLongBreak"
            checked={settings.autoStartLongBreak}
            onChange={handleChange}
          />
        </ListItem>
      </List>
    </>
  )
}
