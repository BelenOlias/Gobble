import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

import eat from './icono-comer.png'
import star from './pixlr-bg-result.png'
import write from './icono-coment-removebg-preview.png'

import './Index.css'
const Index = () => {

    return ( 

        <Container fluid>
            
            <section className='firstSec'>

                <p className='paragraph'>Encuentra todo lo que buscas</p>

            </section>

            <section className='secondSec'>
                
                <Row className="justify-content-center">
                    
                    <Col lg={3}>

                        <article className='article'>

                            <img src={eat} alt='logo comida' className='logoArt'></img>

                            <h3>Come</h3>

                            <p>Descubre nuevos sabores</p>

                        </article>
                        
                    </Col>

                    <Col lg={3}>

                        <article className='article'>

                            <img src={star} alt='logo votación' className='logoArt'></img>

                            <h3>Valora</h3>

                            <p>Puntúa tu experiencia</p>

                        </article>
                        
                    </Col>

                    <Col lg={3}>

                        <article className='article'>

                            <img src={write} alt='logo comentario' className='logoArt'></img>

                            <h3>Comenta</h3>

                            <p>Comparte con miles de personas</p>

                        </article>
                        
                    </Col>

                </Row>

            </section>

            <section className='thirdSec'>

                <p>AQUI</p>
                <p>VA</p>
                <p>ALGO</p>
                <p>DE</p>
                <p>ISOMETRIA</p>


            </section>

            <section className='secondSec'>

                <Row className="justify-content-center">

                    <Col lg={5}>
                        
                        <h2>¿Aún no eres un Gobbler?</h2>

                    </Col>

                    <Col lg={4}>

                        <div className='buttons'>
                            
                            <Link to='/signup' style={{textDecoration: 'none'}} className='whiteBtnIdx'>Inicia sesión</Link>
                        
                            <Link to='/login' style={{textDecoration: 'none'}} className='redBtnIdx'>Regístrate</Link>
                            
                        </div>

                    </Col>

                </Row>

            </section>

            <section className='fourthSec'>

                <h4>Contacta con nosotros</h4>

            </section>

        </Container>
        
    )
}

export default Index