import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'

function Navigation() {
const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <div className={css.contUser}>
        <NavLink to='/' className={css.homeText}>Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={css.homeText}>Contacts</NavLink>}
    </div>
  )
}

export default Navigation