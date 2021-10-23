import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type TypecreateContext = {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
};

export const SearchContext = createContext({} as TypecreateContext);

type searchContextProviderProps = {
  children: ReactNode,
};

export function SearchContextProvider({ children }: searchContextProviderProps): JSX.Element {
  const [search, setSearch] = useState('');

  return(
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};