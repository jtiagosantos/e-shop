import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";

export const useProductContext = () => useContext(ProductContext);