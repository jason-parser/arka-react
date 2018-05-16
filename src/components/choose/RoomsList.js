import React from 'react'

import RoomsListItem from './RoomsListItem'

const RoomsList = ({ rooms, addToCart }) => (
  <ul className="list">
    {rooms.map((room, index) => {
      return <RoomsListItem room={room} key={index} addToCart={addToCart} />
    })}
    <style jsx>{`
      .list {
        margin: 0;
        padding: 0;
        list-style: none;
        margin-bottom: 88px;
        width: 100%;

        @media (min-width: 1200px) {
          width: 800px;
        }
      }
    `}</style>
  </ul>
)

export default RoomsList
