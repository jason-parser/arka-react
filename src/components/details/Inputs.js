import React from 'react'
import { Link } from 'react-router-dom'

import AmountInput from './AmountInput'
import Button from '../common/Button'

class Inputs extends React.Component {
  state = {
    adults: 0,
    kids: 0,
    babies: 0,
    rooms: 0
  }

  handleDec = name => {
    this.setState(prevState => {
      if (prevState[name] > 0)
        return {
          [name]: prevState[name] - 1
        }
    })
  }

  handleInc = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }))
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form">
          <div className="dates">
            <label>
              С
              <input name="start" type="text" value="10.05.2018" />
            </label>
            <label>
              По
              <input name="finish" type="text" value="18.05.2018" />
            </label>
          </div>
          <div className="input-group">
            <p>Взрослые</p>
            <AmountInput
              name="adults"
              value={this.state.adults}
              handleInc={this.handleInc}
              handleDec={this.handleDec}
            />
          </div>
          <div className="input-group">
            <p>
              Дети<br />(3-12 лет)
            </p>
            <AmountInput
              name="kids"
              value={this.state.kids}
              handleInc={this.handleInc}
              handleDec={this.handleDec}
            />
          </div>
          <div className="input-group">
            <p>
              Младенцы<br />(0-3 лет)
            </p>
            <AmountInput
              name="babies"
              value={this.state.babies}
              handleInc={this.handleInc}
              handleDec={this.handleDec}
            />
          </div>
          <div className="input-group">
            <p>Количество номеров</p>
            <AmountInput
              name="rooms"
              value={this.state.rooms}
              handleInc={this.handleInc}
              handleDec={this.handleDec}
            />
          </div>
          <div className="button-wrapper">
            <Link to="/choose">
              <Button>Подтвердить</Button>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            width: 100%;
            margin-bottom: 50px;

            @media (min-width: 690px) {
              width: 31%;
              min-width: 350px;
              margin-right: 3%;
              margin-bottom: 0;
            }
          }

          .form {
            background: #fff;
            border: 2px solid #f8f8f8;
            padding: 15px;

            @media (min-width: 481px) {
              padding: 30px;
            }
          }

          .dates {
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;

            label {
              width: 48%;
            }

            input {
              width: 100%;
            }
          }

          .input-group {
            display: flex;
            align-items: center;
            margin-bottom: 40px;
          }

          .button-wrapper {
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
        `}</style>
      </div>
    )
  }
}

export default Inputs
