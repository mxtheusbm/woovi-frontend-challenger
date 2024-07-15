import { ReactElement } from 'react'
import FooterImg from '../../../assets/Footer.png'
import './styles.css'

type FooterProps = {
  children: ReactElement
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer>
      <div>{children}</div>
      <img src={FooterImg} alt="Pagamento 100% seguro via: Woovi" />
    </footer>
  )
}