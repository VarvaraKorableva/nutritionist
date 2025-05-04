import './ReviewsSlider.css'
import { useRef } from 'react'
import Heading from '../UI-Kit/Heading/Heading'
import FrameSection from '../UI-Kit/Frame/FrameSection'

const reviews = [
  {
    name: 'Анна Смирнова',
    age: 32,
    photo: '/images/reviews/anna.jpg',
    program: 'Индивидуальная консультация',
    text: 'Очень деликатный подход. Я впервые почувствовала, что мне дают рекомендации под меня, а не просто список “ешь это, не ешь то”.',
  },
  {
    name: 'Ирина Лебедева',
    age: 45,
    photo: '/images/reviews/irina.jpg',
    program: 'Детокс-программа',
    text: 'Программа “Детокс мягко” стала отличным стартом. После неё я стала лучше спать и ушли отёки. Благодарю!',
  },
  {
    name: 'Мария Орлова',
    age: 28,
    photo: '/images/reviews/maria.jpg',
    program: 'План питания на месяц',
    text: 'Очень вкусные и понятные рецепты, ничего лишнего. План идеально лёг в мой ритм жизни.',
  },
  {
    name: 'Ольга Киселёва',
    age: 39,
    photo: '/images/reviews/olga.jpg',
    program: 'Сопровождение при снижении веса',
    text: 'Была поддержка на каждом этапе. Минус 6 кг без стресса. Очень благодарна!',
  },
  {
    name: 'Варвара',
    age: 34,
    photo: '/images/reviews/maria.jpg',
    program: 'План питания на месяц',
    text: 'Очень вкусные и понятные рецепты, ничего лишнего. План идеально лёг в мой ритм жизни.',
  },
  {
    name: 'Алина',
    age: 19,
    photo: '/images/reviews/olga.jpg',
    program: 'Сопровождение при снижении веса',
    text: 'Была поддержка на каждом этапе. Минус 6 кг без стресса. Очень благодарна!',
  },
  {
    name: 'Коля',
    age: 39,
    photo: '/images/reviews/olga.jpg',
    program: 'Сопровождение при снижении веса',
    text: 'Была поддержка на каждом этапе. Минус 6 кг без стресса. Очень благодарна!',
  },
  {
    name: 'Ярослав',
    age: 34,
    photo: '/images/reviews/maria.jpg',
    program: 'План питания на месяц',
    text: 'Очень вкусные и понятные рецепты, ничего лишнего. План идеально лёг в мой ритм жизни.',
  },
  {
    name: 'Артем',
    age: 19,
    photo: '/images/reviews/olga.jpg',
    program: 'Сопровождение при снижении веса',
    text: 'Была поддержка на каждом этапе. Минус 6 кг без стресса. Очень благодарна!',
  },
]

export default function ReviewsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <FrameSection>
    <section className="testimonials" id="reviews">
      
        <Heading>Отзывы</Heading>
        <div className="slider-scroll-wrapper">
          <div className="slider-container" ref={sliderRef}>
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="review-photo"
                  />
                  <div className="review-info">
                    <h4 className="review__nameAndAge">
                      {review.name}, {review.age}
                    </h4>
                    <p className="review-program">{review.program}</p>
                  </div>
                </div>
                <p className="review-text">“{review.text}”</p>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button onClick={() => scroll('left')}>←</button>
          <button onClick={() => scroll('right')}>→</button>
        </div>
      
    </section>
    </FrameSection>
  )
}