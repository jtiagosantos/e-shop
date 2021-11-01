import { useContext } from "react";
import { ModalContext } from "../contexts/modalContext";

export const useModalContext = () => useContext(ModalContext);