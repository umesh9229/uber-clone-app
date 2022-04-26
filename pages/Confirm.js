import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';
import Map from './components/Map';
import { data } from 'autoprefixer';
import RideSelector from './RideSelector';

const Confirm = () => {

    const pickUpLocation= ()=>{
        const pickup = "ambedkar nagar";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
           new URLSearchParams({
               access_token: "pk.eyJ1IjoidW1lc2gxMTIyIiwiYSI6ImNsMWtmaDVxZjAwY20zZHA1ZmZ5aTdidWkifQ.QpjPewnyuRhR4_NR44CFQA"
           })
        )
        .then(Response => Response.json())
        .then(data =>{
            console.log(data.features[0].center);
        })



    }
    const DropOffLocation= ()=>{
        const dropoff = "mp nagar";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
           new URLSearchParams({
               access_token: "pk.eyJ1IjoidW1lc2gxMTIyIiwiYSI6ImNsMWtmaDVxZjAwY20zZHA1ZmZ5aTdidWkifQ.QpjPewnyuRhR4_NR44CFQA"
               
           })
        )
        .then(Response => Response.json())
        .then(data =>{
            console.log(data.features[0].center);
        })



    }

    useEffect(() =>{
        DropOffLocation();
        
        pickUpLocation();

    },[])
  return (
       <Wrapper>

           <Map/>

           <RideContainer>

               <RideSelector/>
                   

                   <ConfirmButtonConatiner>
                       confirm UberX


                   </ConfirmButtonConatiner>
               
               

               


           </RideContainer>



       </Wrapper>
  )
}

export default Confirm


const ConfirmButtonConatiner = tw.div`
bg-black text-white text-center py-2 rounded-200 font-bold

`

const Wrapper= tw.div`

flex h-screen flex-col

`
const RideContainer=tw.div`
flex-1 flex flex-col


`