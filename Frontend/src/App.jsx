import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <BrowserRouter >
    <div>
      <AppRoutes />
    </div>
    </BrowserRouter>
  )
}

export default App
