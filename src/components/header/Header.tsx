import { Link } from 'react-router-dom'

type HeaderProps = {
  link: string
  text: string
}

export const Header = ({ link, text }: HeaderProps) => {
  return (
    <header>
      <h1>HRnet</h1>
      <Link to={link}>{text}</Link>
    </header>
  )
}
