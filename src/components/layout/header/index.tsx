import Logo from '../../../assets/Logo.png'

import { Typography } from '@mui/material'

import './styles.css'

type HeaderProps = {
  title?: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <img src={Logo} alt="Woovi Logo" />
      
      <Typography 
        variant='h2' 
        sx={{
          fontSize: '1.5rem',
          fontWeight: '800'
        }}
      >
        {title}
      </Typography>
    </header>
  )
}