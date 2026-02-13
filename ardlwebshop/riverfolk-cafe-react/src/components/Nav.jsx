import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  )
}

export default Nav
