// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isSelected: false}

  onSelectedEmoji = () => {
    this.setState({isSelected: true})
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-qust">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                className="emoji-button"
                type="button"
                onClick={this.onSelectedEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <br /> <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thanks-u-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thanks-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-cont">
          {isSelected ? this.renderThankYou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
