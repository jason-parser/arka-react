import React from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import CheckInInput from './sidebar/CheckInInput'
import CheckOutInput from './sidebar/CheckOutInput'
import NumberInput from './sidebar/NumberInput'

const Sidebar = ({
  checkIn,
  handleCheckIn,
  checkOut,
  handleCheckOut,
  guests,
  handleGuests,
  rooms,
  handleRooms
}) => (
  <div className="sidebar">
    <div className="wrapper">
      <div className="block">
        <strong>Приезжаю</strong>
        <DatePicker
          customInput={<CheckInInput />}
          selected={moment(checkIn)}
          onChange={handleCheckIn}
        />
      </div>

      <div className="block">
        <strong>Уезжаю</strong>
        <DatePicker
          customInput={<CheckOutInput />}
          selected={moment(checkOut)}
          onChange={handleCheckOut}
        />
      </div>

      <div className="block">
        <strong>Гостей</strong>
        <NumberInput value={guests} handleChange={handleGuests} />
      </div>

      <div className="block">
        <strong>Ночей</strong>
        <NumberInput
          value={moment(checkOut).diff(moment(checkIn), 'days')}
          isStatic={true}
        />
      </div>

      <div className="block">
        <strong>Детей</strong>
        <NumberInput
          value={0}
          handleChange={() => console.log('kids change')}
        />
      </div>

      <div className="block">
        <strong>Номеров</strong>
        <NumberInput value={rooms} handleChange={handleRooms} />
      </div>
    </div>
    <style jsx>{`
      .sidebar {
        background: #1c1c1c;
        width: 100%;
        padding: 15px;
        flex-shrink: 0;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: 1200px) {
          width: 370px;
          padding: 30px;
        }
      }

      .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media (min-width: 1200px) {
          justify-content: flex-start;
        }
      }

      .block {
        background: #151515;
        width: 140px;
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 30px;
        margin-right: 15px;
        margin-bottom: 15px;
        flex-shrink: 0;

        @media (min-width: 1200px) {
          margin-right: 30px;
          margin-bottom: 30px;

          &:nth-child(2n) {
            margin-right: 0;
          }

          &:last-child {
            margin-right: 0;
          }
        }

        strong {
          color: white;
          font-family: 'Muller', sans-serif;
          text-transform: uppercase;
          font-size: 12px;
          line-height: 1;
          font-weight: bold;
          margin-bottom: 15px;
        }
      }
    `}</style>
  </div>
)

export default Sidebar
