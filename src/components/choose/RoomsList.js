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
        width: 100%;
        margin-bottom: 88px;
      }
    `}</style>
  </ul>
)

export default RoomsList
