import { Header } from "../../components/Header";
import { Sumary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TrasactionsContainer, TrasactionsTable } from "./styles";

export function Trasaction() {
  return(
    <div>
      <Header/>
      <Sumary/>

      <TrasactionsContainer>
        <SearchForm/>

        <TrasactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                    R$ 12.000,00
                </PriceHighlight>
                </td>
              <td>Venda</td>
              <td>13/08/22</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="outcome" >
                  - R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/08/22</td>
            </tr>
          </tbody>
        </TrasactionsTable>
      </TrasactionsContainer>

    </div>
  )
}