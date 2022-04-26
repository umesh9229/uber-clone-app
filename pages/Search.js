import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { useLocation, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import Link from 'next/link';

const Search = () => {
  
  
  return (
    <Wrapper>

        <ButtonContainer>
          <Link href= "/">
            <BackButton  src="https://cdn-icons-png.flaticon.com/512/507/507257.png"/>

            </Link>
        </ButtonContainer>
        <InputConatiner>
        <FormToIcon>
            <Circle src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>
            <Line src="https://cdn-icons.flaticon.com/png/512/649/premium/649686.png?token=exp=1649083904~hmac=4c866a8478a2001bd6370497bf8a4cb5"/>
            <Squre src="https://cdn-icons-png.flaticon.com/512/25/25394.png"/>
        
            </FormToIcon>
            <InputBoxes>
            <Input placeholder='Enter Pickup Location'/>
            <Input placeholder='Where To?'/>
            </InputBoxes>
            <PlusIcon src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png"/>
        
        </InputConatiner>
        <SavedPlaces>

          <StartIcon src="https://cdn-icons-png.flaticon.com/512/149/149220.png"/>
          Saved Places


        </SavedPlaces>
       <Link href="/Confirm">
        <Button>Confirm Location</Button>

        </Link>


    </Wrapper>
  )
}

export default Search

const Wrapper= tw.div`
bg-gray-300 h-screen


`
const ButtonContainer= tw.div`
bg-white h-10 

`
const BackButton= tw.img`
w-7 h-5 m-2 ml-5 cursor-pointer
`
const FormToIcon= tw.div`
flex-col mr-2

`

const InputConatiner= tw.div`
bg-white flex  items-center px-4 
`

const Circle= tw.img`
w-4  ml-5
0
`
const Line= tw.img`
h-10 ml-2


`
const Squre= tw.img`

w-4 ml-5
`
const InputBoxes= tw.div`
flex flex-col flex-1 

`
const Input =tw.input`
h-10 bg-gray-200 my-2 rounded-10 p-2 m-1  border-none

`
const PlusIcon=tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces= tw.div`
flex items-center px-4 bg-white py-2 m-2 font-bold text-black-500


`
const  StartIcon= tw.img`
 w-10 h-10 p-2 bg-gray-100 rounded-full mr-2 

`
const Button = tw.div`
bg-black text-white text-center rounded-full m-6  py-3 font-bold cursor-pointer
`