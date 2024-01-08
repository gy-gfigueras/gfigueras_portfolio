import Lottie from 'lottie-react'
import animationData from "../assets/lottie/lottie.json"
import { Parallax } from './Parallax'
import '../styles/mainPage.css'


export function LottieAnimation(){
    return (
        <>  
        <Parallax />
        <Lottie className='lottie-animation parallax' speed="1" animationData={animationData} />
        </>
    )
}