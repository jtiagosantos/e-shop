import { createContext, Dispatch, ReactNode, SetStateAction, useState, useEffect } from "react";

type TypeAuthContext = {
  token: string | null,
  setToken: Dispatch<SetStateAction<string | null>>,
  username: string | null,
  setUsername: Dispatch<SetStateAction<string | null>>,
};

export const AuthContext = createContext({} as TypeAuthContext);

type AuthContextProviderProps = {
  children: ReactNode,
};

export function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [token, setToken] = useState<string | null>('');
  const [username, setUsername] = useState<string | null>('');

  useEffect(() => {
    const tokenStorage = localStorage.getItem('@eshop:token');

    if(!tokenStorage) {
      localStorage.setItem('@eshop:token', String(token));
      const tokenStorage = localStorage.getItem('@eshop:token');
      setToken(tokenStorage);
    }else {
      setToken(tokenStorage);
    }
  }, [token]);

  useEffect(() => {
    const userStorage = localStorage.getItem('@eshop:username');

    if(!userStorage) {
      localStorage.setItem('@eshop:username', String(username));
      const userStorage = localStorage.getItem('@eshop:username');
      setToken(userStorage);
    }else {
      setToken(userStorage);
    }
  }, [username]);
  
  return(
    <AuthContext.Provider value={{ token, setToken, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};