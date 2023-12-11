import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Employee from './Employee'
import './App.css'
import Update from './Update'

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Employee />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
