import './Reviews.css'
import Heading from '../UI-Kit/Heading/Heading'
import Container from '../UI-Kit/Container/Container'
import reviews from '../../Data/reviews.json'

export default function Reviews() {
    return (
        <Container>
            <Heading>Отзывы</Heading>

            <ul className="reviews__list">
                {reviews.map((review) => (
                    <li key={review.reviews_id} className="reviews__item">
                        <div className="reviews__header">
                            <p className="reviews__name">{review.name}, {review.job}</p>
                            <p className="reviews__date">{review.date}</p>
                        </div>
                        <p className="reviews__text">{review.text}</p>
                    </li>
                ))}
            </ul>
        </Container>
    )
}
