import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type TypeModalContext = {
  openModal: boolean,
  setOpenModal: Dispatch<SetStateAction<boolean>>
};

export const ModalContext = createContext({} as TypeModalContext);

type ModalContextProviderProps = {
  children: ReactNode,
};

export function ModalContextProvider({ children }: ModalContextProviderProps): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  return(
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};