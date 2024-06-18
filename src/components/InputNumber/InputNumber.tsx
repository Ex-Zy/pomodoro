import './InputNumber.scss'
import type React from 'react'

import { useInputNumber } from '../../hooks/useInputNumber.ts'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value: number
  min?: number
  onUpdate: (value: number) => void
}

export const InputNumber: React.FC<Props> = ({ label, value = 1, min = 0, onUpdate, ...props }: Props) => {
  const { inputValue, increment, decrement, onKeyUp } = useInputNumber({ value, min, onUpdate })

  return (
    <div className="input-number">
      {label && (
        <label htmlFor={props.id} className="input-number__label body-2">
          {label}
        </label>
      )}
      <div className="input-number__container">
        <button type="button" className="input-number__up" onClick={increment}>
          +
        </button>
        <button type="button" className="input-number__down" onClick={decrement}>
          -
        </button>
        <input
          className="input-number__el"
          type="number"
          min={min}
          value={inputValue}
          {...props}
          readOnly
          onKeyUp={onKeyUp}
        />
      </div>
    </div>
  )
}
