import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Create from './pages/Create'
import BlogDetails from './pages/BlogDetails'
import NavBar from './component/NavBar'

function App() {
  return (
    
    <Router>
      <div className="app">
        <NavBar />

        <div className="content">

          <Routes>

            <Route path='/' element= { <Home/> } exact='/'/>
            <Route path='/create' element = { <Create /> } />
            <Route path='/blogs/:id' element = { <BlogDetails /> } />

          </Routes>

        </div>

      </div>

    </Router>
  )
}

export default App
