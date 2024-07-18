import { Button } from '@mui/joy'
import React from 'react'

import { IconSettings } from '../../../Base/Icons/IconSettings.tsx'

type SettingsCallButtonType = React.ComponentProps<typeof Button>

export const SettingsCallButton = React.forwardRef<HTMLButtonElement, SettingsCallButtonType>(
  function SettingsCallButton(props, ref) {
    return (
      <>
        <Button
          variant="plain"
          {...props}
          ref={ref}
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
)
