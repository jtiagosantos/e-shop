import { createContext, Dispatch, ReactNode, SetStateAction, useState, useEffect } from "react";

type TypeAuthContext = {
  token: string | null,
  setToken: Dispatch<SetStateAction<string | null>>,
  username: string | null,
  setUsername: Dispatch<SetStateAction<string | null>>,
  isAdmin: string | null,
  setIsAdmin: Dispatch<SetStateAction<string | null>>,
  adminId: string | null,
  setAdminId: Dispatch<SetStateAction<string | null>>,
};

export const AuthContext = createContext({} as TypeAuthContext);

type AuthContextProviderProps = {
  children: ReactNode,
};

export function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [token, setToken] = useState<string | null>('');
  const [username, setUsername] = useState<string | null>('');
  const [isAdmin, setIsAdmin] = useState<string | null>('');
  const [adminId, setAdminId] = useState<string | null>('');

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
      setUsername(userStorage);
    }else {
      setUsername(userStorage);
    }
  }, [username]);

  useEffect(() => {
    const isAdminStorage = localStorage.getItem('@eshop:is_admin');

    if(!isAdminStorage) {
      localStorage.setItem('@eshop:is_admin', String(isAdmin));
      const isAdminStorage = localStorage.getItem('@eshop:is_admin');
      setIsAdmin(isAdminStorage);
    }else {
      setIsAdmin(isAdminStorage);
    }
  }, [isAdmin]);

  useEffect(() => {
    const adminIdStorage = localStorage.getItem('@eshop:admin_id');

    if(!adminIdStorage) {
      localStorage.setItem('@eshop:admin_id', String(adminId));
      const adminIdStorage = localStorage.getItem('@eshop:admin_id');
      setAdminId(adminIdStorage);
    }else {
      setAdminId(adminIdStorage);
    }
  }, [adminId]);
  
  return(
    <AuthContext.Provider value={{ 
      token, 
      setToken, 
      username, 
      setUsername,
      isAdmin,
      setIsAdmin,
      adminId, 
      setAdminId
    }}>
      {children}
    </AuthContext.Provider>
  );
};