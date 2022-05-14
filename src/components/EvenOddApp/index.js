// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  buttonClicked = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({num: prevState.num + randomNum}))
  }

  render() {
    const {num} = this.state
    const title = num % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {num}</h1>
          <p className="description">Count is {title}</p>
          <button type="button" className="button" onClick={this.buttonClicked}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
