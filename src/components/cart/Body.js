import React from 'react'
import { Link } from 'react-router-dom'

import FaAngleLeft from 'react-icons/lib/fa/angle-left'

import RoomsList from './RoomsList'
import Button from '../common/Button'

const Body = ({ rooms, removeFromCart }) => (
  <div className="container">
    <h1>Данные бронирования</h1>
    <RoomsList rooms={rooms} removeFromCart={removeFromCart} />

    <div className="buttons-wrapper">
      <Link to="/choose" style={{ marginBottom: '30px', marginRight: '30px' }}>
        <Button>Вернуться назад</Button>
      </Link>
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

      .buttons-wrapper {
        margin-bottom: 60px;
        display: flex;
        flex-wrap: wrap;

        @media (min-width: 768px) {
          justify-content: space-between;
          margin-right: 50px;
        }
      }
    `}</style>
  </div>
)

export default Body
