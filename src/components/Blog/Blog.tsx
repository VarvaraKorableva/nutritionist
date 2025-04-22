import './Blog.css'
import { Link } from 'react-router-dom';
import Heading from '../UI-Kit/Heading/Heading'
import FrameSection from '../UI-Kit/Frame/FrameSection'
import blogs from '../../Data/blogs.json'

export default function Blog() {
        
  return (
    <section className="blog__wrapper" id="adviсe">
      <FrameSection>
        <Heading>Блог</Heading>
        <ul className="blog__ulWrapper">
            {blogs.map((i) => 

                <Link to={`/blog/${i.slug}`} key={i.id} className={`blog__card ${i.id % 2 !== 0 ? 'blog__cardReverse' : ''}`}>
                    <div className="blog__imgContainer">
                        <img src={i.image} alt={`Картинка по теме ${i.title}`} className="blog__img"></img>
                    </div>
                    <div className="blog__textAndTitleContainer">
                        <h3 className="blog__title">{i.title}</h3>
                        <div className="blog__textContainer">
                            {i.content.slice(0, 1).map((item) =>
                                <p key={item.id} className="blog__text">{item.paragraph}</p>
                            )}
                            <button className={`blog__btn ${i.id % 2 !== 0 ? 'blog__btnReverse' : ''}`}>
                                Прочитать статью полностью
                            </button>
                        </div>
                    </div>
                </Link>
                
            )}
        </ul>
        
      </FrameSection> 
    </section>
  )
}