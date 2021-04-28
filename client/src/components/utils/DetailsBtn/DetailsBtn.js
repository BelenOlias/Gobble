import { Link } from 'react-router-dom'

import './DetailsBtn.css'

const DetailsBtn = ({place}) => {

    return (
        
        <>

            <Link to={`/details/${place}`} className='buttonDetails'>Ver restaurante</Link> 
            
        </>
    )

}

export default DetailsBtn