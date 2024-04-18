import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contacts/operations'
import { selectIsRefreshing } from './redux/auth/selectors'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ContactsPage from './pages/ContactsPage'

function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing</b>
  ) : (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
         <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          } /> 
           <Route path='/login' element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPage />}
            />
           } />
           <Route path='/contacts' element={
            <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
           } />
      </Routes>
    </Layout>
  )
}

export default App
