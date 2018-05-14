import React from 'react'
import { Link } from 'react-router-dom'

const Room = ({ room, addToCart }) => (
  <li>
    <div
      className="image"
      style={{ backgroundImage: `url('${room.image}')` }}
    />
    <div className="details">
      <h2>{room.name}</h2>
      <p>{room.descr}</p>
    </div>
    <div className="action">
      <p>{room.price}₽</p>
      <Link to="/cart" onClick={() => addToCart(room.id)}>
        <a className="button">Выбрать номер</a>
      </Link>
    </div>
    <style jsx>{`
      li {
        margin: 0;
        padding: 20px 0;
        border-top: 2px solid #f8f8f8;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: flex-start;
          padding-left: 20px;
        }
      }

      .image {
        width: 80%;
        min-width: 160px;
        padding-bottom: 63%;
        background-size: cover;
        background-position: center center;
        margin-bottom: 40px;

        @media (min-width: 768px) {
          margin-bottom: 0;
          width: 160px;
          height: 100px;
          margin-right: 40px;
          padding-bottom: 0;
        }
      }

      .details {
        text-align: center;

        h2 {
          margin-bottom: 20px;
          text-align: center;
        }

        margin-bottom: 40px;

        @media (min-width: 768px) {
          margin-bottom: 0;
          text-align: left;

          h2 {
            text-align: left;
          }
        }
      }

      .action {
        @media (min-width: 768px) {
          margin-left: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          flex-shrink: 0;
        }

        p {
          font-size: 38px;
          font-weight: 500;
          margin-bottom: 20px;
          text-align: center;

          @media (min-width: 768px) {
            text-align: left;
          }
        }

        .button {
          color: #fff;
          background-color: #a2865e;
          padding: 12px 8px;
          border: 1px solid #927954;
          text-transform: uppercase;
          font-family: 'Muller', sans-serif;
        }
      }
    `}</style>
  </li>
)

export default Room
