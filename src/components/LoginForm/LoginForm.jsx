import { Formik, Form, ErrorMessage, Field } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { login } from "../../redux/auth/operations"
import css from "./LoginForm.module.css"

const INITIAL_STATE = {
    email: '',
    password: '',
}

const logInState = Yup.object().shape({
    email: Yup.string().email('Must be valid email'),
    password: Yup.string().min(8, "Must be min 8 characters").required("Your password is valid")
})

function LoginForm() {
    const dispatch = useDispatch()
    const handleSubmit = (e, {resetForm}) => {
        dispatch(login(e))
        resetForm()
    }

  return (
    <Formik validationSchema={logInState} onSubmit={handleSubmit} initialValues={INITIAL_STATE}>
        <Form className={css.allForm}>
        <label className={css.formLab}>
          Email
          <Field name="email" type="text" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label className={css.formLab}>
          Password
          <Field name="password" type="password" />
          <ErrorMessage
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.loginSubBtn}>
          Log In
        </button>
        </Form>
    </Formik>
  )
}

export default LoginForm