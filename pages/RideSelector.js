import tw from "tailwind-styled-components"
import react from "react"

import React from 'react'

const RideSelector = () => {
  return (
    <Wrapper>
        <Title>Choose a ride, or Swipe up for more</Title>
        <CarList>
            <Car>
            <CarImage src ="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png"/>
                <CarDetails>
                <Service>UberX</Service>
                <Time>5 min away</Time>
                </CarDetails>
                <Price>₹200.00</Price>
            </Car>
            <Car>
            <CarImage src ="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_863,h_485/f_auto,q_auto/products/carousel/Black.png"/>
                <CarDetails>
                <Service>UberS</Service>
                <Time>5 min away</Time>
                </CarDetails>
                <Price>₹200.00</Price>
            </Car>
            <Car>
            <CarImage src ="https://www.pngfind.com/pngs/m/683-6831375_uber-car-png-hyundai-sonata-transparent-png.png"/>
                <CarDetails>
                <Service>Black</Service>
                <Time>5 min away</Time>
                </CarDetails>
                <Price>₹200.00</Price>
            </Car>
            <Car>
            <CarImage src ="https://www.seekpng.com/png/detail/1009-10094936_auto-vector-saloon-car-hyundai-sonata.png"/>
                <CarDetails>
                <Service>Blue</Service>
                <Time>5 min away</Time>
                </CarDetails>
                <Price>₹200.00</Price>
            </Car>
        </CarList>
    </Wrapper>
  )
}

export default RideSelector
const Price= tw.div`
text-sm
`
const CarDetails= tw.div`
flex-1
`

const Service = tw.div`
font-medium 
`
const Time = tw.div`
text-xs text-blue-500
`
const Car= tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-14 mr-2

`

const CarList = tw.div`
`
const Wrapper = tw.div`
flex-1 
`
const Title = tw.div`
text-gray-500 text-center text-sm py-2 border-b
`