import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm(){
  return(
    <SearchFormContainer>
      <input type="text" placeholder="Busque por trasações "/>
      
      <button type="submit">
        <MagnifyingGlass/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}