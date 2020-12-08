import React from 'react'
import Navbar from './components/Shared/Navbar'
import Home from './pages/Home'
import Deneme from './components/HomePage/Deneme'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path ="/deneme" component={Deneme}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
