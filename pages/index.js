import Head from 'next/head'
import { useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map';
import Link from 'next/link';







export default function Home() {
  
  return (
    <Wrapper>
    
      <Map/>
      <ActionItems>
        {/* <Header/> */}
        <Header>
          <UberLogo src= "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
          <Profile>
            <Name>Umesh Patel</Name>
            <UserImage src= "https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/163555172_1373245029705257_4161778769862025748_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=jgu_WSFKmCUAX9g4Ud9&_nc_oc=AQns9CM5--jcdyuzJPsndLQAb9L_OHzQ2n4ElcDgcOdugUOaPhEeGx1klbNzbS0f3ZWrn4lKvu2azv_tVP9EiKzn&_nc_ht=scontent.fbho4-2.fna&oh=00_AT8CI7ViOUrKHJfvwZ_ewdWm8FLnCnqZR3ux_Tob5T9RNQ&oe=62720F9F"/>
            
            
             </Profile>


        </Header>
        <ActionButtons>

          <Link href="/Search">

          <ActionButton>
            <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_863,h_485/f_auto,q_auto/products/carousel/Black.png"/>
            
            Ride</ActionButton>
            </Link>
          <ActionButton >
         
          <ActionButtonImage src="https://i0.wp.com/sreditingzone.com/wp-content/uploads/2018/01/PNGPIX-COM-BMW-R1200R-Motorcycle-Bike-PNG-Image.png"/>
            
            2-Wheels</ActionButton>
           
          <ActionButton>
          
          <ActionButtonImage src="https://cutewallpaper.org/24/uber-png/what-is-uber-van-a-premium-ride-for-groups.png"/>
            
            
            Reserve</ActionButton>
          


        </ActionButtons>
        


        {/* <ActionButtons/> */}

        <InputButton>

        Where to?
        
        </InputButton>
        {/* <InputButton/> */}



      </ActionItems>

      </Wrapper>


   
  )
}



const Wrapper= tw.div`
flex flex-col  h-screen




`
const ActionItems= tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center

`
const UberLogo= tw.img`
h-10 ml-4 m-4 
`
const Profile= tw.div`
flex items-center

`

const Name= tw.div`
mr-4 w-20  text-sm font-semibold


`

const UserImage = tw.img`
h-12 w-12 rounded-full  border border-gray-200 p-px

`
const ActionButtons= tw.div`
flex

`
const ActionButton= tw.div`
bg-gray-300 flex-1 m-1 h-32 flex items-center flex-col justify-center rounded-lg transform hover:bg-blue
-600 transition duration-500 hover:scale-125"

`
const ActionButtonImage = tw.img`
h-3/5 



`
const InputButton=tw.div`
h-20 bg-gray-400 text-2xl p-4 flex items-center  mt-9 rounded

`

