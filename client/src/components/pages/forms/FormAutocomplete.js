import { Component } from 'react'
import { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

function FormAutocomplete(props) {

    const [address, setAddress] = useState()
    const [, setCoords] = useState({ lat: null, lng: null })
    
    useEffect(() => {
        setAddress(props.value)
    }, [props])
    
    const handleSelect = async (value ) => {
        const results = await geocodeByAddress(value)
        const latLng = await getLatLng(results[0])
        setAddress(value)
        setCoords(latLng)
        await props.getCoords(props.value, [latLng.lat, latLng.lng])
    }

    return (
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>

            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className={`searchBar ${props.newClass}`}>
                <Form.Control {...getInputProps({ placeholder: "Escribe dirección" })} />

                <div>
                    {loading ? <div>...loading</div> : null}

                    {
                        suggestions.map((suggestion, idx) => {
                            
                            return <div{...getSuggestionItemProps(suggestion)} key={idx}>
                                {suggestion.description}</div>
                        })
                    }
                </div>
            </div>)}


        </PlacesAutocomplete>
    )
}

export default FormAutocomplete