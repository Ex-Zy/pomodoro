import type React from 'react'

interface Props {
  title: string
  variant?: 'vertical' | 'horizontal'
  className?: string
  children: React.ReactNode
}

export const SettingsItem: React.FC<Props> = ({ title, variant = 'horizontal', className = '', children }) => {
  const classes = `settings-item settings-item--${variant} ${className}`
  return (
    <div className={classes}>
      <h4 className="settings-item-title h4">{title}</h4>
      <div className="settings-item-content">{children}</div>
    </div>
  )
}
