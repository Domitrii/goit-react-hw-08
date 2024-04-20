import { Field, Formik, Form, ErrorMessage } from "formik";
import css from './ContactForm.module.css'
import InputMask from 'react-input-mask';
import * as Yup from 'yup'
import { useDispatch, useSelector} from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Toaster, toast } from "react-hot-toast";

const numberScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });
  

  const firstVal = {
    name: '',
    number: ''
  }

function ContactForm() {
  const dispatch = useDispatch();
  const currentContactsArray = useSelector(selectContacts) || [];

  const handleSubmit = (data, formActions) => {
    const isAlreadyAdded = currentContactsArray.find(
      (item) =>
        item.name.toLowerCase() === data.name.toLowerCase() ||
        item.number === data.number
    );
    if (isAlreadyAdded) {
      toast('This numbers is in your ContactList')
      return;
    }
    dispatch(addContact(data));
    formActions.resetForm();
  };

  return (
    <>
    <Toaster
        toastOptions={{
          style: {
            background: "pink",
            color: "black",
          },
        }}
      />
    <Formik 
      initialValues={firstVal}
      onSubmit={handleSubmit}
      validationSchema={numberScheme}
      >
        <Form className={css.formCont}>
            <label className={css.valueBlock}>
              Name
            <Field type="text" name="name" className={css.fieldValue}></Field>
            <ErrorMessage className={css.errorMessage} name="name" component="span" />
            </label>
            <label className={css.valueBlock}>
                Number
                <Field name="number">
                  {({ field }) => (
                    <InputMask
                      {...field}
                      mask="999-99-99"
                      maskChar="_"
                      placeholder="___-__-__"
                      className={css.fieldValue}
                      />
                  )}
                </Field>
            <ErrorMessage className={css.errorMessage} name="number" component="span" />
            </label>
            <button type="submit" className={css.submitBtn}>Submit</button>
        </Form>
    </Formik>
    </>
  )
}

export default ContactForm