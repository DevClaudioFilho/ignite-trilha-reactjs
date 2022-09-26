import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { CloseButton, Content, Overlay, TrasactionType, TrasactionTypeButton } from "./styles";

export  function NewTrasactionModal(){
  return(
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Trasação</Dialog.Title>
          <CloseButton>
            <X  size={24}/>
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Descrição" required/>
            <input type="number" placeholder="Preço" required/>
            <input type="text" placeholder="Categoria" required/>

            <TrasactionType>
              <TrasactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24}/>
                Entrada
              </TrasactionTypeButton>

              <TrasactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24}/>
                  Saida
              </TrasactionTypeButton>
            </TrasactionType>
            <button type="submit">Cadastrar</button>

          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}