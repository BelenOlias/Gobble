import Container from 'react-bootstrap/Container'

import './Profile.css'
export default function Profile(props) {

    return (

        <Container>
        
            <section className='profile'>
                
                <h1>Hola, {props.loggedInUser.username}!</h1>

            </section>
            
        </Container>
    )
}