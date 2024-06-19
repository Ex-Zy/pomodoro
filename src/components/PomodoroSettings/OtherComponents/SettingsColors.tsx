import { Radio, RadioGroup, Sheet, radioClasses } from '@mui/joy'
import type React from 'react'

import type { PomodoroSettings as Settings } from '../../../types/common.ts'
import { IconCheck } from '../../Icons/IconCheck.tsx'

interface Props {
  settings: Settings
  onSubmit: (settings: Settings) => void
}

export const SettingsColors: React.FC<Props> = ({ settings, onSubmit }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSubmit({
      ...settings,
      color: {
        ...settings.color,
        active: e.target.value,
      },
    })
  }

  return (
    <>
      <RadioGroup
        aria-labelledby="product-color-attribute"
        defaultValue="#f87070"
        sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {settings.color.available.map((color) => (
          <Sheet
            key={color}
            sx={{
              position: 'relative',
              width: 40,
              height: 40,
              flexShrink: 0,
              bgcolor: color,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Radio
              overlay
              variant="solid"
              checkedIcon={<IconCheck />}
              checked={color === settings.color.active}
              value={color}
              slotProps={{
                input: { 'aria-label': color },
                radio: {
                  sx: {
                    display: 'contents',
                    '--variant-borderWidth': '2px',
                  },
                },
              }}
              sx={{
                '--joy-focus-outlineOffset': '4px',
                [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                  outlineWidth: '2px',
                },
              }}
              onChange={handleChange}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </>
  )
}
