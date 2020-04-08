import React, { Component } from 'react'
import Card from './Card'
import Body from './Body'
import Navbar from './Navbar'
import Footer from './Footer'


class Main extends Component {
    render() {
        return (
            <div>
              <Navbar />
              <Body />
              <Card />
              <Footer />  
            </div>
        )
    }
}

export default Main
