import React from 'react'

import RoomsListItem from './RoomsListItem'

const RoomsList = ({ state, translations, selectRoom }) => (
  <ul className="list">
    {state.rooms
      .filter(room => {
        if (state.filters.services.length === 0) return true
        return state.filters.services.every(
          elem => room.services.indexOf(elem) > -1
        )
      })
      .sort((a, b) => {
        if (state.sortByCategory === 'ASC') {
          if (a.category < b.category) return -1
          if (a.category > b.category) return 1
          return 0
        } else {
          if (a.category < b.category) return 1
          if (a.category > b.category) return -1
          return 0
        }
      })
      .sort((a, b) => {
        if (state.sortByPrice === 'ASC') {
          return a.price - b.price
        } else {
          return b.price - a.price
        }
      })
      .map((room, index) => {
        return (
          <RoomsListItem
            room={room}
            guests={state.guests}
            checkIn={state.checkIn.format('L')}
            checkOut={state.checkOut.format('L')}
            key={index}
            translations={translations}
            selectRoom={selectRoom}
          />
        )
      })}
    <style jsx>{`
      .list {
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        margin-bottom: 88px;
      }
    `}</style>
  </ul>
)

export default RoomsList
