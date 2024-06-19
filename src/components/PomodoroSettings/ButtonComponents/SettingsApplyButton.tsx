import { Button } from '@mui/joy'
import type React from 'react'

interface Props extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
}

export const SettingsApplyButton: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <>
      <Button
        variant="soft"
        {...props}
        sx={{
          position: 'relative',
          borderRadius: '26px',
          width: '140px',
          height: '52px',
          margin: '0 auto -26px',
          color: '#fff',
          fontFamily: 'var(--font-family)',
          backgroundColor: 'var(--color-accent)',
          transition: 'all 0.3s',
        }}
      >
        {children}
      </Button>
    </>
  )
}
