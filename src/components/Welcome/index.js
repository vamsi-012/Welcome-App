// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onSubscribe = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(prevState => ({text: 'Subscribed'}))
    } else {
      this.setState(prevState => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="greet">Thank you! Happy Learning</p>
        <button
          onClick={this.onSubscribe}
          type="button"
          className="subscribe-btn"
        >
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
