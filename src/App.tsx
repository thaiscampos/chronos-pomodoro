
import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import './styles/global.css'
import './styles/theme.css'

export function App(){
    console.log("Oie")
    return (
    <>
        <Container><Logo/></Container>
        <Container>
            <Heading>Menu</Heading>
        </Container>
        <Container>
            <Heading>Form</Heading>
        </Container>
        
        
    </>

    )
}

