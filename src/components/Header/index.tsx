import logoImg from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransactionButton type="button">
          <span>Nova transação</span>
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}