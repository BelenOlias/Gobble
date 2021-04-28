
import restVideo from './video.mp4'

const Video = () => {
    
    return (

        <div style={{ padding: '50px' }}>
      
        <video autoPlay={true} loop="loop" muted style={{ width: '100%', overflow: 'hidden', border: '1px solid transparent', borderRadius: '15px' }}>
            
            <source src={restVideo} type="video/mp4" />

            The video failed in your device

        </video>
            
        </div>
       
    )
}
export default Video