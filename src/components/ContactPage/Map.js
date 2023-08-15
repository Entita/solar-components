import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if(!isLoaded) return <></>

  const position = { lat: 49.94967569402966, lng: 15.790100018658022}

  return (
    <GoogleMap zoom={15} center={position} mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '8px' }}>
      <Marker position={position} />
    </GoogleMap>
  )
}
