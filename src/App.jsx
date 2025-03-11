import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Characters from './Characters'
import Movies from './Movies'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/characters' element={<Characters />}></Route>
      <Route path='/movies' element={<Movies />}></Route>
    </Routes>
  )
}

export default App
