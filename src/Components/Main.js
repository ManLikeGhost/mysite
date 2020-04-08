import React, { Component } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'


class Main extends Component {
    render() {
        return (
            <div>
              <Navbar />
              <Card />
              <Footer />  
            </div>
        )
    }
}

export default Main
