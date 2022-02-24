import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Jumbo() {
    return (
        <Jumbotron>
            <h1>Hello, My name is Rocel!</h1>
            <p>My hobbies is watching movies and series.</p>
            <Button variant="primary">Learn more</Button>
        </Jumbotron>
    )
}