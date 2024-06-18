import { Button } from '@mui/joy'
import type React from 'react'

import { SettingsIcon } from './SettingsIcon.tsx'

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
        <SettingsIcon />
      </Button>
    </>
  )
}
