import { useState } from 'react'
import * as styles from './App.module.css'
import Data from './pages/Data'
import Main from './pages/Main'
import Header from './components/Header'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route path='/queries' element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
