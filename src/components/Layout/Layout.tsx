import './Layout.scss'

import type React from 'react'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return <div className="layout">{children}</div>
}
