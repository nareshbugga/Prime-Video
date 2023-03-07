// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  getActionMovies = () => {
    const {moviesList} = this.props
    const actionData = moviesList.filter(
      eachList => eachList.categoryId === 'ACTION',
    )
    return actionData
  }

  getComedyMovies = () => {
    const {moviesList} = this.props
    const comedyData = moviesList.filter(
      eachList => eachList.categoryId === 'COMEDY',
    )
    return comedyData
  }

  render() {
    const actionMovies = this.getActionMovies()
    const comedyMovies = this.getComedyMovies()
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-image"
        />
        <MoviesSlider
          actionMovies={actionMovies}
          comedyMovies={comedyMovies}
          classNames={{background: 'slide-container', heading: 'slide-heading'}}
        />
      </div>
    )
  }
}

export default PrimeVideo
