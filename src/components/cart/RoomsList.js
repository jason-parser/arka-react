import React from 'react'

import Room from './Room'

const RoomsList = ({ rooms, removeFromCart }) => (
  <div>
    <header>
      <p style={{ width: '15%', textAlign: 'center' }}>Кол-во</p>
      <p style={{ width: '55%' }}>Детали</p>
      <p style={{ width: '20%', textAlign: 'right', paddingRight: '30px' }}>
        Цена
      </p>
      <p style={{ width: '10%' }} className="delete-label">
        Удалить
      </p>
    </header>
    <ul>
      {rooms.map(room => (
        <Room key={room.id} room={room} removeFromCart={removeFromCart} />
      ))}
    </ul>
    <div className="sum">
      <p>К оплате:</p>
      <p className="summary">
        {rooms.reduce((prev, cur) => prev + cur.price * cur.amount, 0)}₽
      </p>
    </div>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        p {
          font-weight: 500;
        }

        .delete-label {
          opacity: 0;

          @media (min-width: 768px) {
            opacity: 1;
          }
        }
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-bottom: 60px;
      }

      .sum {
        margin-bottom: 60px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 50px;

        .summary {
          font-size: 24px;
          margin-left: 30px;
        }
      }
    `}</style>
  </div>
)

export default RoomsList
