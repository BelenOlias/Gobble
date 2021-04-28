import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import eat from './img/icono-comer.png'
import star from './img/pixlr-bg-result.png'
import write from './img/icono-coment-removebg-preview.png'

import Video from './Video'

import './Index.css'
class Index extends Component {

    

    componentDidMount() {

        window.addEventListener('scroll', this.onScroll)
    }
    

    onScroll() {

        const isInViewport = elm => {
                const rect = elm.getBoundingClientRect()
                const vertInView = (rect.top <= window.innerHeight - window.innerHeight / 2) && ((rect.top + rect.height) >= 0)
                return (vertInView)
            }

            const sect = document.querySelector('.thirdSec')
        
        if (isInViewport(sect)) {
                document.querySelector('.thirdSec').classList.add('red')
            } else {
                document.querySelector('.thirdSec').classList.remove('red')
                
            }
        }


    render() {

        return (

            <Container fluid style={{ padding: '0' }}>
            
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
                    
                    <Fade>

                    <Row>

                        <Col lg={6}>

                            <Video />

                        </Col>

                        <Col lg={6}>

                            <p className='paragraph black'>Descubre un mundo de sabores</p>

                        </Col>

                    </Row>

                    </Fade>

                </section>

                <section className='secondSec'>

                    <Row className="justify-content-center">

                        <Col lg={5}>
                        
                            <h2>¿Aún no eres un Gobbler?</h2>

                        </Col>

                        <Col lg={4}>

                            <div className='buttons'>
                            
                                <Link to='/signup' style={{ textDecoration: 'none' }} className='whiteBtnIdx'>Inicia sesión</Link>
                        
                                <Link to='/login' style={{ textDecoration: 'none' }} className='redBtnIdx'>Regístrate</Link>
                            
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
    
}

export default Index