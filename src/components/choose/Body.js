import React from 'react'

import RoomsList from './RoomsList'

const Body = ({ rooms, addToCart }) => (
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
    <RoomsList rooms={rooms} addToCart={addToCart} />

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 798px;
        margin: 0 auto;
      }

      header {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        margin-top: 40px;
      }

      h1 {
        margin-bottom: 40px;
        color: #666;
      }
    `}</style>
  </div>
)

export default Body
