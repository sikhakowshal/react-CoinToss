import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tossResult: 'heads', headsCount: 0, tailsCount: 0}

  onClickTossCoinButton = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    console.log(randomNumber)

    if (randomNumber === 0) {
      this.setState(preState => ({
        tossResult: 'heads',
        headsCount: preState.headsCount + 1,
      }))
    } else {
      this.setState(preState => ({
        tossResult: 'tails',
        tailsCount: preState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {tossResult, headsCount, tailsCount} = this.state

    const tossResultImg =
      tossResult === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="game-container">
          <div className="game-card">
            <h1 className="title">Coin Toss Game</h1>
            <p className="description">Heads(or)Tails</p>
            <div className="coin-img-container">
              <img
                src={tossResultImg}
                alt="toss result"
                className="toss-result-img"
              />
            </div>
            <button
              className="toss-coin-btn"
              type="button"
              onClick={this.onClickTossCoinButton}
            >
              Toss Coin
            </button>
            <div className="results-container">
              <p className="total-count">Total: {headsCount + tailsCount}</p>
              <p className="heads-count">Heads: {headsCount}</p>
              <p className="tails-count">Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
