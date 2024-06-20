import './PomodoroSettings.scss'
import type React from 'react'
import { useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import { SettingsApplyButton } from './ButtonComponents/SettingsApplyButton.tsx'
import { SettingsCallButton } from './ButtonComponents/SettingsCallButton.tsx'
import { SettingsContent } from './ModalComponents/SettingsContent.tsx'
import { SettingsDialog } from './ModalComponents/SettingsDialog.tsx'
import { SettingsModal } from './ModalComponents/SettingsModal.tsx'
import { SettingsColors } from './OtherComponents/SettingsColors.tsx'
import { SettingsFonts } from './OtherComponents/SettingsFonts.tsx'
import { SettingsItem } from './OtherComponents/SettingsItem.tsx'
import { SettingsTime } from './OtherComponents/SettingsTime.tsx'
import type { PomodoroSettings as Settings } from '../../types/common.ts'

interface Props {
  settings: Settings
  onSubmit: (settings: Settings) => void
}

export const PomodoroSettings: React.FC<Props> = ({ settings, onSubmit }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const nodeRef = useRef(null)

  const [tempSettings, setTempSettings] = useState<Settings>(settings)

  const handleApply = () => {
    onSubmit(tempSettings)
    setOpen(false)
  }

  const handleReset = () => {
    setTempSettings(settings)
  }

  const handleClose = () => {
    handleReset()
    setOpen(false)
  }

  const handleUpdate = (newSettings: Settings) => {
    setTempSettings({
      ...tempSettings,
      ...newSettings,
    })
  }

  return (
    <div className="settings">
      <SettingsCallButton
        onClick={() => {
          setOpen(true)
        }}
      />
      <Transition nodeRef={nodeRef} in={open} timeout={400}>
        {(state: string) => (
          <SettingsModal state={state} open={!['exited', 'exiting'].includes(state)} onClose={handleClose}>
            <SettingsDialog state={state}>
              <SettingsContent>
                <SettingsItem title="TIME (MINUTES)" variant="vertical">
                  <SettingsTime settings={tempSettings} onSubmit={handleUpdate} />
                </SettingsItem>
                <SettingsItem title="FONT" variant="horizontal">
                  <SettingsFonts settings={tempSettings} onSubmit={handleUpdate} />
                </SettingsItem>
                <SettingsItem title="COLOR" variant="horizontal">
                  <SettingsColors settings={tempSettings} onSubmit={handleUpdate} />
                </SettingsItem>
              </SettingsContent>
              <SettingsApplyButton onClick={handleApply}>Apply</SettingsApplyButton>
            </SettingsDialog>
          </SettingsModal>
        )}
      </Transition>
    </div>
  )
}
