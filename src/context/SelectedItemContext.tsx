import { Article } from '@src/pages/articleList/ArticleList';
import React, { createContext, useState, ReactNode } from 'react';

export interface SelectedItemContextType {
  selectedItem: Article | null;
  selectItem: (item: Article) => void;
}

export const SelectedItemContext = createContext<SelectedItemContextType | null>(null);

export const SelectedItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<Article | null>(null);

  const selectItem = (item: Article) => {
    setSelectedItem(item);  // Update the selected item
  };

  return (
    <SelectedItemContext.Provider value={{ selectedItem, selectItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};
