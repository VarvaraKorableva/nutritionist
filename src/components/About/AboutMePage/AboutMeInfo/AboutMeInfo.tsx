
import './AboutMeInfo.css'
import Container from '../../../UI-Kit/Container/Container'
import pic from '/images/rina3.jpeg'

export default function AboutMeInfo() {

return (
    <Container as='div' baseClassName='container' className="AboutMePage__wrapper">


        <div className="AboutMePage__heroPicAndTextContainer">

          <div className="AboutMePage__heroTextContainer">

            <div className="AboutMePage__text-container">
                <p className="AboutMePage__text text">
                  Привет! Меня зовут Рина Денисова. Я - сертифицированный Health и wellness-коуч уровня ICF с высшим медицинским образованием и степенью кандидата наук. 
                  В 2004 г я закончила педиатрический факультет медицинского университета с отличием, а в 2006 г получила сертификат по окончании ординатуры по педиатрии, а в 2009 г - степень кандидата наук. До 2022 г я работала детским ревматологом в федеральном центре г Москвы, занималась научной деятельностью, возглавляла отдел по клиническим исследованиям и локальный независимый этический комитет центра.
                </p>

                <p className="AboutMePage__text text">
                  Спорт всегда был моим хобби и я просто сочетала в различных пропорциях фитнес, 
                  Бег, плавание, велосипед, поэтому я решила превратить свое хобби в профессию и в 2023 г получила сертификат фитнес тренера и продолжила свое обучение в направлении медицины образа жизни.
                  В настоящее время я и продолжаю обучение коучингу для повышения своей квалификации. 
                </p>
            </div>
            
            <img className="AboutMePage__heroPic" src={pic}></img>

          </div>
          
        </div>

    </Container>
  )
}