import React from 'react'
import { Link } from 'react-router-dom'

const Room = ({ room }) => (
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
      <Link to="/cart">
        <a className="button">Выбрать номер</a>
      </Link>
    </div>
    <style jsx>{`
      li {
        margin: 0;
        padding: 20px 0;
        border-top: 2px solid #f8f8f8;
        margin-bottom: 20px;
        padding-left: 20px;
        display: flex;
        align-items: flex-start;
      }

      .image {
        width: 160px;
        height: 100px;
        background-size: cover;
        background-position: center center;
        margin-right: 40px;
      }

      .details {
        h2 {
          margin-bottom: 20px;
        }
      }

      .action {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        p {
          font-size: 38px;
          font-weight: 500;
          margin-bottom: 20px;
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
