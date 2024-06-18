import type React from 'react'
import { useEffect, useState } from 'react'

export interface UseInputNumberOptions {
  value: number
  min: number
  onUpdate: (value: number) => void
}

export const useInputNumber = ({ value, min, onUpdate }: UseInputNumberOptions) => {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const increment = () => {
    const newValue = inputValue + 1
    setInputValue(newValue)
    onUpdate(newValue)
  }

  const decrement = () => {
    if (inputValue <= min) return

    const newValue = inputValue - 1
    setInputValue(newValue)
    onUpdate(newValue)
  }

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      increment()
    }

    if (e.key === 'ArrowDown') {
      decrement()
    }
  }

  return {
    inputValue,
    increment,
    decrement,
    onKeyUp,
  }
}
