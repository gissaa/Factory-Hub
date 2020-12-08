import React from 'react'
import Navbar from './components/Shared/Navbar/Navbar'
import Footer from './components/Shared/Footer/Footer'
import Home from './pages/Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
