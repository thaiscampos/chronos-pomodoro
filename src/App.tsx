import { Heading } from './components/Heading'
import './styles/global.css'
import './styles/theme.css'

export function App(){
    console.log("Oie")
    return (
    <>
    <Heading>Olá, Mundo!</Heading>
    <Heading>Hello</Heading>
    <Heading>Buenos</Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus neque. Pellentesque finibus nulla vitae 
        congue ultricies. Curabitur placerat nec dolor non efficitur. Nunc viverra enim est, et congue ante suscipit quis. Praesent 
        quis tortor venenatis, euismod libero vel, euismod ante. Morbi in eleifend ante, quis elementum mi. Sed eros neque, fermentum
         ac vulputate vitae, feugiat sed massa. Aenean vel imperdiet tellus. Vestibulum tempus lacus ut bibendum tristique. Aenean et
        dui varius, mattis orci sed, imperdiet ante. Suspendisse iaculis ornare finibus. Integer sed varius leo. Donec sed nisi tempus,
         tempus libero bibendum, condimentum nisl. Mauris ultricies nec mauris vel maximus.</p>
    </>
    )
}

