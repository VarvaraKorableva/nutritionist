import './Results.css'
import Container from '../../UI-Kit/Container/Container'

export default function Results() {
    return (
        <Container as='section' baseClassName='wrapper' className="results__wrapper">
            <Container as='div' baseClassName='container'  className="results__container">

            <div className="results__plusContainer">
                <p className="results__text">Ценные знания</p> 
                <div className="results__plus"></div>
                <p className="results__text">Навыки саморегуляции</p>
                <div className="results__plus"></div>
                <p className="results__text">Осознанность</p> 
                </div>
            <div className="results__equals"></div>  
            <p className="results__uppercase">здоровье, энергия, гармоничное тело и спокойный ум</p>

            </Container>
        </Container>
    )
}
