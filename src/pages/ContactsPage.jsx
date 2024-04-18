import DocumentTitle from "../DocumentTitle"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox"


function ContactsPage() {
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