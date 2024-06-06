import React, { Component } from 'react'
import { Routes ,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import NotFound from './Components/NotFound/NotFound'
import Movies from './Components/Movies/Movies'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='Movies' element={<Movies/>}></Route>
        </Routes>
        <Footer />


      </div>
    )
  }
}
