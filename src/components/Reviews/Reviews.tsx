import './Reviews.css'
import Container from '../UI-Kit/Container/Container'
import reviews from '../../Data/reviews.json'

export default function Reviews() {
    return (
        <Container>
            <ul className="reviews__list">
                {reviews.map((review) => (
                    <li key={review.reviews_id} className="reviews__item">
                        <div className="reviews__header">
                            <p className="reviews__name">{review.name}, {review.job}, {review.date}</p>
                        </div>
                        <p className="reviews__text text ">{review.text}</p>
                    </li>
                ))}
            </ul>
        </Container>
    )
}
