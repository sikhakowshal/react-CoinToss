import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {result: 'Heads', headsCount: 0, tailsCount: 0, totalCount: 0}

  tossCoin = () => {
    const tossResult = Math.ceil(Math.random() * 2) - 1

    if (tossResult === 0) {
      this.setState(preState => ({
        result: 'Heads',
        headsCount: preState.headsCount + 1,
        totalCount: preState.totalCount + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(preState => ({
        result: 'Tails',
        tailsCount: preState.tailsCount + 1,
        totalCount: preState.totalCount + 1,
      }))
    }
  }

  render() {
    const {result, headsCount, tailsCount, totalCount} = this.state

    const imageUrl =
      result === 'Heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} className="coin-image" alt="toss result" />
          <button className="button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
