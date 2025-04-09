import {
  SelectedItemContext,
  SelectedItemContextType,
} from '@src/context/SelectedItemContext'
import { useContext } from 'react'

export const useSelectedItem = (): SelectedItemContextType => {
  const context = useContext(SelectedItemContext)
  if (!context) {
    throw new Error(
      'useSelectedItem must be used within a SelectedItemProvider',
    )
  }
  return context
}
