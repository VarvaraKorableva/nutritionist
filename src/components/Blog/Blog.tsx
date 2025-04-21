import './Blog.css'
import Heading from '../UI-Kit/Heading/Heading'
import FrameSection from '../UI-Kit/Frame/FrameSection'

export default function Blog() {
  return (
    <div className="about__wrapper">
      <FrameSection>
        <Heading>Обо мне</Heading>
        <div className="about__heroPicAndTextContainer">

          <div className="about__heroTextContainer">
            <p className="about__text">
            Привет! Меня зовут Анна Иванова, я — нутрициолог, помогающий людям выстроить гармоничные отношения с едой, телом и собой.
            Мой путь начался с личного поиска: когда-то я сама прошла через хаотичное питание, постоянные диеты и усталость.
            Именно тогда я поняла, как важно научиться слушать себя и заботиться о своём теле — с любовью, а не через ограничения.
            </p>

            <p className="about__text">
            Я получила образование в <strong>Школе современной нутрициологии “NutriPro”</strong>, прошла <strong>курс по психологии пищевого поведения</strong>,
            и постоянно продолжаю учиться: читаю научные исследования, слежу за тенденциями в нутрициологии, чтобы давать клиентам только актуальные и безопасные рекомендации.
            </p>

            <p className="about__text">
            Мой подход — мягкий, индивидуальный и заботливый. Я не даю “волшебных таблеток” и не заставляю есть брокколи 5 раз в день.
            Я за то, чтобы питание приносило энергию, удовольствие и работало на вашу реальную жизнь. Без запретов. Без чувства вины. Без стресса.
            </p>
          </div>
          <div className="about__heroPic"></div>
        </div>

        <p className="about__slogan"><strong>Я здесь, чтобы помочь вам научиться питаться в балансе — с телом, с разумом и с собой.</strong></p>
        
      </FrameSection> 
    </div>
  )
}