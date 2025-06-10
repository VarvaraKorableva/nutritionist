import { useEffect } from 'react'
import './AboutMePage.css'
import Heading from '../../components/UI-Kit/Heading/Heading'
import Container from '../../components/UI-Kit/Container/Container'
import ForWhom from '../../components/ForWhom/ForWhom'
import AboutMePageTitle from '../../components/About/AboutMePage/AboutMePageTitle/AboutMePageTitle'
import Phrase from '../../components/Phrase/Phrase'
/*import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';*/

export default function AboutMePage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container as='section' baseClassName='wrapper' className="AboutMePage__section">

        <AboutMePageTitle/>
        <Container as='div' baseClassName='container' className="AboutMePage__wrapper">


        <div className="AboutMePage__heroPicAndTextContainer">

          <div className="AboutMePage__heroTextContainer">
            <p className="AboutMePage__text">
            Привет! Меня зовут Рина Денисова. Я - сертифицированный Health и wellness-коуч уровня ICF с высшим медицинским образованием и степенью кандидата наук. 
            В 2004 г я закончила педиатрический факультет медицинского университета с отличием, а в 2006 г получила сертификат по окончании ординатуры по педиатрии, а в 2009 г - степень кандидата наук. До 2022 г я работала детским ревматологом в федеральном центре г Москвы, занималась научной деятельностью, возглавляла отдел по клиническим исследованиям и локальный независимый этический комитет центра.
            </p>

            <p className="AboutMePage__text">
            Спорт всегда был моим хобби и я просто сочетала в различных пропорциях фитнес, 
            Бег, плавание, велосипед, поэтому я решила превратить свое хобби в профессию и в 2023 г получила сертификат фитнес тренера и продолжила свое обучение в направлении медицины образа жизни.
            В настоящее время я и продолжаю обучение коучингу для повышения своей квалификации. 
            </p>
          </div>
          <div className="AboutMePage__heroPic"></div>
        </div>

        <ul className="AboutMePage__picsContainer"></ul>

        </Container>
        <ForWhom/>

        
    </Container>
  )
}