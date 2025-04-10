import { Article } from '@src/pages/articleList/ArticleList';
import { createContext } from 'react';

export interface SelectedItemContextType {
  selectedItem: Article | null;
  selectItem: (item: Article) => void;
}

export const SelectedItemContext =
  createContext<SelectedItemContextType | null>(null);
