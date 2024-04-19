import { useDispatch, useSelector } from 'react-redux'
import { Suspense, lazy, useEffect } from 'react'
import { selectIsRefreshing } from './redux/auth/selectors'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute'
import { refreshUser } from './redux/auth/operations'
const HomePage = lazy(() => import('./pages/HomePage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))


function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing</b>
  ) : (
    <Layout>
      <Suspense>
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
      </Suspense>
    </Layout>
  )
}

export default App
