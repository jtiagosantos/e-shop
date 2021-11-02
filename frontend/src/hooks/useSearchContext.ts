import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export const useSearchContext = () => useContext(SearchContext);