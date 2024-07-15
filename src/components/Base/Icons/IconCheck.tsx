import type React from 'react'

interface Props {
  stroke?: string
}

export const IconCheck: React.FC<Props> = ({ stroke = '#161932' }: Props) => {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5.5L4.95263 9.45263L13.4053 1" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}
