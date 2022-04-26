import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';



mapboxgl.accessToken = 'pk.eyJ1IjoidW1lc2gxMTIyIiwiYSI6ImNsMWtmaDVxZjAwY20zZHA1ZmZ5aTdidWkifQ.QpjPewnyuRhR4_NR44CFQA';


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/dark-v10', 
            center: [-99.29011, 39.39172],
            zoom: 3,
          })
          addToMap(map);
          
          
        })

        const addToMap = (map) =>{

          const marker1 = new mapboxgl.Marker()
            .setLngLat([12.554729, 55.70651])
            .addTo(map);

        }
    
        
  return <Wrapper id='map'></Wrapper> 
  
    
  
}

export default Map

const Wrapper= tw.div`
flex-1
`