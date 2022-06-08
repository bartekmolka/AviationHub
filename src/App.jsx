import { useState } from 'react'
import Queries from './pages/Data'
import Main from './pages/Main'
import Header from './components/Header'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route path='/queries' element={<Queries />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
