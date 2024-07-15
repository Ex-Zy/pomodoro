import { Modal } from '@mui/joy'
import type React from 'react'

interface Props {
  state: string
}

type ModalProps = React.ComponentProps<typeof Modal> & Props

export const SettingsModal: React.FC<ModalProps> = ({ state, children, ...props }) => {
  return (
    <>
      <Modal
        keepMounted
        slotProps={{
          backdrop: {
            sx: {
              opacity: 0,
              backdropFilter: 'none',
              transition: `opacity 400ms, backdrop-filter 400ms`,
              ...{
                entering: { opacity: 1, backgroundColor: 'rgba(10, 12, 28, 0.5)' },
                entered: { opacity: 1, backgroundColor: 'rgba(10, 12, 28, 0.5)' },
              }[state],
            },
          },
        }}
        sx={{
          visibility: state === 'exited' ? 'hidden' : 'visible',
        }}
        {...props}
      >
        {children}
      </Modal>
    </>
  )
}
