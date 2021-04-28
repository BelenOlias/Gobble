import { Link } from 'react-router-dom'

import './BackBtn.css'

const BackBtn = ({place}) => {

    return (
        
        <>

            <Link to={`/${place}`} className='buttonBack'>Volver</Link> 
            
        </>
    )

}

export default BackBtn