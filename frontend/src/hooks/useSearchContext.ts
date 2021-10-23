import { useContext } from "react";
import { SearchContext } from "../contexts/searchContext";

export const useSearchContext = () => useContext(SearchContext);