import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css"


import Posts from "./Posts"
import Home from './pages/Home'
import CreatePoster from './pages/CreatePoster'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-poster' element={<CreatePoster/>}/>
        {/* <Route path='/poster-element' element={<Poster/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
