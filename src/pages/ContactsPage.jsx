import { useDispatch } from "react-redux"
import DocumentTitle from "../DocumentTitle"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox"
import { useEffect } from "react"
import { fetchContacts } from "../redux/contacts/operations"


function ContactsPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </>
  )
}

export default ContactsPage