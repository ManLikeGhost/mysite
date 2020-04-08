import React, { Component } from 'react'
import Typical from 'react-typical'

class Card extends Component {
    render() {
        return (
            <div class= "box">
                <div class="content">
                    <h1>Hi, My name is Edet Ekpo.</h1>
                    <br/>
                    <p>
                        I am a{' '}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[ 
                                'Fullstack developer.',
                                2000,
                                'Tech Enthusiast.',
                                2000,
                                'Blogger.',
                                2000,
                                'Story teller.',
                                2000,
                                'Poet.',
                                2000,
                                'Basketballer.',
                                2000,
                            ]} 
                        />
                    </p>
                </div>    
            </div>
        )
    }
}

export default Card
