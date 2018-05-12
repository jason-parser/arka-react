import React from 'react'
import { Link } from 'react-router-dom'

import RoomsList from './RoomsList'
import Button from '../common/Button'

const Body = ({ rooms }) => (
  <div className="container">
    <h1>Данные бронирования</h1>
    <RoomsList rooms={rooms} />

    <div className="button-wrapper">
      <Link to="/user">
        <Button>Подтвердить</Button>
      </Link>
    </div>

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
        padding: 15px;
        padding-top: 30px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
          padding: 30px;
          padding-top: 60px;
          padding-bottom: 100px;
        }
      }

      h1 {
        margin-bottom: 40px;
        color: #666;
      }

      .button-wrapper {
        display: inline-block;
        margin-left: auto;
        margin-bottom: 60px;
        margin-right: 50px;
      }
    `}</style>
  </div>
)

export default Body
