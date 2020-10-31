import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PaymentPage from './components/PaymentPage'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PaymentPage} />
    </BrowserRouter>
  )
}

export default Router
