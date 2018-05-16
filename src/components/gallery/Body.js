import React from 'react'

import RoomsList from './RoomsList'

const Body = ({ rooms }) => (
  <div className="container">
    <header>
      <h1>Номера</h1>
    </header>
    <RoomsList rooms={rooms} />

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 798px;
        margin: 0 auto;
      }

      header {
        display: flex;
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
