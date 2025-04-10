import { Article } from '@src/pages/articleList/ArticleList'
import React, { useState, ReactNode } from 'react'
import { SelectedItemContext } from '@context/selectedItemContext'

export const SelectedItemProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedItem, setSelectedItem] = useState<Article | null>(null)

  const selectItem = (item: Article): void => {
    setSelectedItem(item) // Update the selected item
  }

  return (
    <SelectedItemContext.Provider value={{ selectedItem, selectItem }}>
      {children}
    </SelectedItemContext.Provider>
  )
}
