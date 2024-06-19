import { Radio, RadioGroup, Sheet, radioClasses } from '@mui/joy'
import type React from 'react'

import type { PomodoroSettings as Settings } from '../../../types/common.ts'

interface Props {
  settings: Settings
  onSubmit: (settings: Settings) => void
}

export const SettingsFonts: React.FC<Props> = ({ settings, onSubmit }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSubmit({
      ...settings,
      font: {
        ...settings.font,
        active: e.target.value,
      },
    })
  }
  return (
    <>
      <RadioGroup
        aria-labelledby="settings-font-attribute"
        defaultValue="Kumbh Sans"
        sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {settings.font.available.map((font) => (
          <Sheet
            key={font}
            sx={{
              position: 'relative',
              width: 40,
              height: 40,
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--joy-focus-outlineOffset': '0px',
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.label}`]: {
                  fontWeight: 'lg',
                  color: '#fff',
                },
                [`& .${radioClasses.action}`]: {
                  '--variant-borderWidth': '0px',
                  backgroundColor: 'var(--color-dark)',
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
              [`& .${radioClasses.action}`]: {
                backgroundColor: 'var(--color-flash-white)',
              },
              [`& .${radioClasses.label}`]: {
                fontFamily: `${font}, sans-serif`,
                color: 'var(--color-midnight)',
              },
            }}
          >
            <Radio
              overlay
              variant="plain"
              disableIcon
              checked={font === settings.font.active}
              value={font}
              label="Aa"
              onChange={handleChange}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </>
  )
}
