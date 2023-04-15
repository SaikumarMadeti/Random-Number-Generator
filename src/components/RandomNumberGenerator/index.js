// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onGenerateNum = () => {
    this.setState({num: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="main-bg">
        <div className="bg-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="sub-div">
            <button
              type="button"
              className="button"
              onClick={this.onGenerateNum}
            >
              Generate
            </button>
          </div>
          <p className="span-text">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
