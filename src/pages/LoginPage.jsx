import React from 'react'
import DocumentTitle from '../DocumentTitle'
import LoginForm from '../components/LoginForm/LoginForm'

function LoginPage() {
  return (
    <div>
      <DocumentTitle>Log In</DocumentTitle>
      <LoginForm />
    </div>
  )
}

export default LoginPage