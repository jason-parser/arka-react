import React from 'react'

import RoomsList from './RoomsList'
import Sidebar from './Sidebar'

const Body = ({
  rooms,
  addToCart,
  guests,
  handleGuests,
  checkIn,
  handleCheckIn,
  checkOut,
  handleCheckOut,
  roomsCount,
  handleRooms
}) => (
  <div className="container">
    <header>
      <h1>Номера</h1>
      <p>
        {rooms.reduce(
          (min, p) => (p.price < min ? p.price : min),
          rooms[0].price
        )}
        {'₽ '}
        -{' '}
        {rooms.reduce(
          (max, p) => (p.price > max ? p.price : max),
          rooms[0].price
        )}₽
      </p>
    </header>
    <div className="wrapper">
      <Sidebar
        guests={guests}
        handleGuests={handleGuests}
        checkIn={checkIn}
        handleCheckIn={handleCheckIn}
        checkOut={checkOut}
        handleCheckOut={handleCheckOut}
        rooms={roomsCount}
        handleRooms={handleRooms}
      />
      <RoomsList rooms={rooms} addToCart={addToCart} />
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }

      header {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        margin-top: 40px;
      }

      .wrapper {
        width: 100%;
        max-width: 798px;
        margin: 0 auto;
        @media (min-width: 1200px) {
          width: 1200px;
          max-width: 1200px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
      }

      h1 {
        margin-bottom: 40px;
        color: #666;
      }
    `}</style>
  </div>
)

export default Body
