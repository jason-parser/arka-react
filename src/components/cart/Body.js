import React from 'react'

import RoomsList from './RoomsList'

const Body = ({ rooms }) => (
  <div className="container">
    <h1>Данные бронирования</h1>
    <RoomsList rooms={rooms} />
    <p>
      Если Вы не уверены в бронировании, не нажимайте на этой странице
      "Подтвердить". В случае, если Вы подтвердили бронирование, но не оплатили
      его в этой форме в течение 15-ти минут, Ваша бронь будет аннулирована.
    </p>

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 30px;
        padding-top: 60px;
        padding-bottom: 100px;
      }

      h1 {
        margin-bottom: 40px;
        color: #666;
      }
    `}</style>
  </div>
)

export default Body
