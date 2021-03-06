import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

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
      if (name == 'adults' && this.props.details.guests > 0)
        this.props.handleGuests(-1)

      if (name == 'rooms' && this.props.details.rooms > 0)
        this.props.handleRooms(-1)

      return {
        [name]: prevState[name] - 1
      }
    })
  }

  handleInc = name => {
    if (name == 'adults') this.props.handleGuests(1)

    if (name == 'rooms') this.props.handleRooms(1)

    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }))
  }

  render() {
    const {
      details,
      handleCheckInChange,
      handleCheckOutChange,
      handleGuests,
      handleRooms,
      handleSubmit
    } = this.props

    return (
      <div className="wrapper">
        <div className="form">
          <div className="dates">
            <label>
              С
              <DatePicker
                selected={moment(details.checkIn)}
                onChange={date => handleCheckInChange(date)}
                className="datepicker"
              />
            </label>
            <label>
              По
              <DatePicker
                selected={moment(details.checkOut)}
                onChange={date => handleCheckOutChange(date)}
                className="datepicker"
              />
            </label>
          </div>
          <div className="input-group">
            <p>Взрослые</p>
            <AmountInput
              name="adults"
              value={details.guests}
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
              value={details.rooms}
              handleInc={this.handleInc}
              handleDec={this.handleDec}
            />
          </div>
          <div className="button-wrapper">
            <Link to="/choose" onClick={handleSubmit}>
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
        <style jsx global>{`
          .datepicker {
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}

export default Inputs
