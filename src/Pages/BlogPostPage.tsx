import './BlogPostPage.css'
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Heading from '../components/UI-Kit/Heading/Heading'
import Container from '../components/UI-Kit/Container/Container'
import blogs from '../Data/blogs.json'

export default function BlogPostPage() {
  const { slug } = useParams();
  const oneBlog = blogs.find(blog => blog.slug === slug);

  if (!oneBlog) {
    return <Navigate to="*" />
  }  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="blogPostPage__wrapper">
      <Container>
      <Heading>{oneBlog.title}</Heading>
        {/*<div className="blog__imgContainer">
            <img src={oneBlog.image} alt={`Картинка по теме ${oneBlog.title}`} className="blog__img"></img>
        </div>*/}
        <div className="blogPostPage__textAndTitleContainer">
                <div className="blog__textContainer">
                    {oneBlog.content.map((item) =>
                        <p className="blogPostPage__text" key={item.id}>{item.paragraph}</p>
                    )}

                </div>
        </div>
        </Container>
    </div>  
  )
}