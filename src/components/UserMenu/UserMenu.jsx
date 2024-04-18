import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import css from './UserMenu.module.css'
import { logout } from "../../redux/auth/operations"


function UserMenu() {
const user = useSelector(selectUser)
const dispatch = useDispatch()
const handleLogout = () => {
  dispatch(logout())
}

  return (
    <div className={css.userCont}>
        <p className={css.welcomeUser}>
            Welcome, <span className={css.userName}>{user.name}</span>
        </p>
        <button onClick={handleLogout} type="button" className={css.logout}>
            Logout
        </button>
    </div>
  )
}

export default UserMenu