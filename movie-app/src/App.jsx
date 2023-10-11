import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PopularMovies from './component/PopularMovies'
import './index.css'
import Detail from './component/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PopularMovies/>}>
        </Route>
        <Route path='/Detail/:id' element={<Detail/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
