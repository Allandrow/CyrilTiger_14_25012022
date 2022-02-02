import { Link } from 'react-router-dom'
import { HeaderProps } from '../../data/types'

export const Header = ({ link, text }: HeaderProps) => {
  return (
    <header>
      <h1>HRnet</h1>
      <Link to={link}>{text}</Link>
    </header>
  )
}
