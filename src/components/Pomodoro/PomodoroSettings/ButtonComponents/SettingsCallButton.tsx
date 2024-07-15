import { Button } from '@mui/joy'
import type React from 'react'

import { IconSettings } from '../../../Base/Icons/IconSettings.tsx'

type SettingsCallButtonType = React.ComponentProps<typeof Button>

export const SettingsCallButton: React.FC<SettingsCallButtonType> = (props) => {
  return (
    <>
      <Button
        variant="plain"
        {...props}
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <IconSettings />
      </Button>
    </>
  )
}
