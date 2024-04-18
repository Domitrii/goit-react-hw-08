import { useDispatch } from 'react-redux'
import css from './Contact.module.css'
import { deleteContact } from '../../redux/contacts/operations'

function Contact({numberId, numberName, number}) {
  const dispatch = useDispatch()
  const handleDelete = () => dispatch(deleteContact(numberId))

  return (
    <li className={css.item}>
      <span>
        <p className="name"><b>{numberName}</b></p>
        <p className="number"><b>{number}</b></p>
      </span>
        <button onClick={handleDelete} className={css.delete}>Delete</button>
    </li>
  )
}

export default Contact
