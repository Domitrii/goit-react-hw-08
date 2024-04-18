import { useSelector } from "react-redux"
import Navigation from "../Navigation/Navigation"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"
import css from './AppBar.module.css'



function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <div className={css.appBar}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  )
}

export default AppBar