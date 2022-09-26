import { HeaderContainer, HeaderContent, NewTrasactionButton } from "./styles";
import logoImg from "../../assets/logo.svg"
import * as Dialog from "@radix-ui/react-dialog";
import { NewTrasactionModal } from "../NewTrasactionModal";

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={ logoImg } alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTrasactionButton> Nova transação</NewTrasactionButton>
          </Dialog.Trigger>

          <NewTrasactionModal/>
        </Dialog.Root>
        
      </HeaderContent>
    </HeaderContainer>
  )
}