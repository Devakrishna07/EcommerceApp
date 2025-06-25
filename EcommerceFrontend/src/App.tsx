
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
