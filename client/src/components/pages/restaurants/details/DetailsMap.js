import { Component } from 'react'

import { GoogleMap, Marker, withGoogleMap, InfoWindow } from 'react-google-maps'


class DetailsMap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: '',
            lng: '',
            name: ''
        }
    }

    componentDidMount() {

        this.setState({name: this.props.name, lat: parseFloat(this.props.location.lat), lng: parseFloat(this.props.location.lng)})
    }

    render() {
        return (
            
            <>
                
                <GoogleMap 
                    zoom={15}
                    center={{lat: this.state.lat, lng: this.state.lng}}
                />

                <Marker 
                    position={{ lat: this.state.lat, lng: this.state.lng }}
                    title={this.state.name}
                /> 
                
            </>
        )
    }
}

export default withGoogleMap(DetailsMap)