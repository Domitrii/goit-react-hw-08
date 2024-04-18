import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { register } from '../../redux/auth/operations'
import { Formik, Field, ErrorMessage, Form } from 'formik'


const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
}

const registerScheme = Yup.object().shape({
    name: Yup.string().min(3, "Not valid").max(50, "Your name too long").required("Nice"),
    email: Yup.string().required("Nice").email('Must be valid email'),
    password: Yup.string().min(8, "Must be min 8 characters").required("Your password is valid")
})

function RegistrationForm() {
  const dispatch = useDispatch()

  const handleSubmit = (data, {resetForm}) => {
    dispatch(register(data));
    resetForm();
  };

  return (
    <Formik initialValues={INITIAL_STATE} onSubmit={handleSubmit} validationSchema={registerScheme}>
      <Form>
        <label>
          Name
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          Email
          <Field type="email" name="email"></Field>
          <ErrorMessage name="email" component="span" />
        </label>
        <label>
          Password
          <Field type="password" name="password"></Field>
          <ErrorMessage name="password" component="span" />
        </label>
        <button type='submit'>Sign Up</button>
      </Form>
    </Formik>
  )
}

export default RegistrationForm