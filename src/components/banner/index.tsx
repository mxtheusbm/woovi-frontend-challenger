import { ReactElement } from "react"

import './styles.css'

type BannerProps = {
  children: ReactElement | string
}

export const Banner = ({ children }: BannerProps) => {
  return (
    <div className="banner">
      {children}
    </div>
  )
}