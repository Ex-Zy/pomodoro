import { ModalClose } from '@mui/joy'
import type React from 'react'

interface Props {
  children: React.ReactNode
}

export const SettingsContent: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="settings-content">
      <div className="settings-header">
        <h1 className="settings-title h2">Settings</h1>
        <div className="settings-close">
          <ModalClose
            sx={{
              top: 0,
              right: 0,
            }}
          />
        </div>
      </div>
      <div className="settings-body">{children}</div>
    </div>
  )
}
