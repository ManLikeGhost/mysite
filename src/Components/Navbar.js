import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div class='navbar'>
                <nav>
                    <div class="navbar nav-wrapper">
                    <a href="#" class="brand-logo"><i class="material-icons">home</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="https://github.com/ManLikeGhost">Github</a></li>
                        <li><a href="https://medium.com/@ekpoabasiama">Blog</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Dev_Stuff</a></li>
                    </ul>
                    </div>
                </nav>
        
            </div>
        )
    }
}

export default Navbar
