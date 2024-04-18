import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.registrPlace}>
      <NavLink to="/register" className={css.regAndLog}>Register</NavLink>
      <NavLink to="/login" className={css.regAndLog}>Log In</NavLink>
    </div>
  );
};

export default AuthNav;
