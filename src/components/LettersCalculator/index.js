// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countChange = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="text">Enter the Phrase</label>
          <br />
          <input
            type="textarea"
            placeholder="Enter the Phrase"
            id="text"
            onChange={this.countChange}
          />
          <br />
          <p className="display-num-count">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="calc-img"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
