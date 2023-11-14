import { navLinks } from "../styles"

const NavLinks = ({ className, linkStyle }) => {
  return (
    <nav className={className}>
      {navLinks.map(link => (
        <a key={link.title} className={linkStyle} href={link.url}>
          {link.title}
        </a>
      ))}
    </nav>
  )
}

export default NavLinks
