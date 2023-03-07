// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl} = eachMovie
  return (
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          <img src={thumbnailUrl} alt="thumbnail" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="player-container">
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
          <div>
            <ReactPlayer url={videoUrl} width="450px" height="300px" />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
