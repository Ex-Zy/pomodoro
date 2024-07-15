import { ModalDialog } from '@mui/joy'
import type React from 'react'
import { forwardRef } from 'react'

interface Props {
  state: string
}

type SettingsDialogProps = React.ComponentProps<typeof ModalDialog> & Props

export const SettingsDialog = forwardRef<HTMLDivElement, SettingsDialogProps>(function SettingsDialog(props, ref) {
  const { state, children, ...rest } = props
  return (
    <ModalDialog
      ref={ref}
      sx={{
        padding: 0,
        border: 0,
        opacity: 0,
        transition: `opacity 300ms`,
        ...{
          entering: { opacity: 1 },
          entered: { opacity: 1 },
        }[state],
      }}
      {...rest}
    >
      {children}
    </ModalDialog>
  )
})
