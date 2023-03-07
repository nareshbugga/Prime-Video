// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {actionMovies, comedyMovies, classNames} = props
  const {background, heading} = classNames
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <>
      <div className={`${background}`}>
        <div>
          <h1 className={`${heading}`}>Action Movies</h1>
          <Slider {...settings}>
            {actionMovies.map(eachMovie => (
              <div>
                <MovieItem eachMovie={eachMovie} key={eachMovie.id} />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h1 className={`${heading}`}>Comedy Movies</h1>
          <Slider {...settings}>
            {comedyMovies.map(eachMovie => (
              <div>
                <MovieItem eachMovie={eachMovie} key={eachMovie.id} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default MoviesSlider
