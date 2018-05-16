import React from 'react'

import Inputs from './Inputs'
import Calendars from './Calendars'

const Body = ({
  details,
  handleCheckInChange,
  handleCheckOutChange,
  handleGuests,
  handleRooms,
  handleSubmit
}) => (
  <div className="container">
    <h1>Бронирование / Reservation</h1>
    <div className="wrapper">
      <Inputs
        details={details}
        handleCheckInChange={handleCheckInChange}
        handleCheckOutChange={handleCheckOutChange}
        handleGuests={handleGuests}
        handleRooms={handleRooms}
        handleSubmit={handleSubmit}
      />
      <Calendars />
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 15px;
        padding-top: 30px;
        padding-bottom: 50px;

        @media (min-width: 481px) {
          padding: 30px;
          padding-top: 60px;
          padding-bottom: 100px;
        }
      }

      h1 {
        margin-bottom: 40px;
        color: #666;
      }

      .wrapper {
        display: flex;
        flex-direction: column;

        @media (min-width: 690px) {
          flex-direction: row;
          align-items: flex-start;
        }
      }
    `}</style>
  </div>
)

export default Body
