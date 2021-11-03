import { createContext, Dispatch, ReactNode, SetStateAction, useState, useEffect } from "react";

type TypeAuthContext = {
  token: string,
  setToken: Dispatch<SetStateAction<string>>,
};

export const AuthContext = createContext({} as TypeAuthContext);

type AuthContextProviderProps = {
  children: ReactNode,
};

export function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const tokenStorage = localStorage.getItem('@eshop:token');

    if(!tokenStorage) {
      localStorage.setItem('@eshop:token', token);
    }
  }, [token]);
  
  return(
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};