import React from 'react'
import { Link } from 'react-router-dom'

const RoomsListItem = ({ room, addToCart }) => (
  <li className="room">
    <a
      href={room.link}
      className="room__image"
      style={{
        background: `linear-gradient(to bottom, rgba(28, 28, 28, 0) 60%,rgba(28, 28, 28, 0.5) 100%), url('${
          room.image
        }') no-repeat center / cover`
      }}
    >
      <p>Hotel ARKA</p>
    </a>
    <div className="room__details">
      <a href={room.link} className="room__name">
        {room.name}
      </a>
      <ul className="room__features">
        <li>
          <img src="/wp-content/themes/hotelbooking/img/rooms-page/guests-icon.svg" />
          <p>{room.guests}</p>
        </li>
      </ul>
      <p className="room__description">{room.descr}</p>
      {room.extra && <p className="room__extra">{room.extra}</p>}
      <Link
        to="/cart"
        onClick={() => addToCart(room.id)}
        style={{ marginTop: 'auto' }}
      >
        <button className="room__button">Бронировать за {room.price}₽</button>
      </Link>

      <div className="room__additional">
        <ul className="room__icons">
          <li>
            <img
              src="/wp-content/themes/hotelbooking/img/rooms-page/wifi.png"
              title="WIFI"
            />
          </li>
          <li>
            <img
              src="/wp-content/themes/hotelbooking/img/rooms-page/view.png"
              title="Номер с видом"
            />
          </li>
          <li>
            <img
              src="/wp-content/themes/hotelbooking/img/rooms-page/tv.png"
              title="TV"
            />
          </li>
        </ul>
        <a href={room.link} className="room__link">
          Подробнее{' '}
          <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-right.svg" />
        </a>
      </div>
    </div>
    <style jsx>{`
      .room {
        border: 1px solid #f1f1f1;
        margin: 0;
        padding: 0;
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        @media (min-width: 798px) {
          width: 49%;
          margin-right: 2%;
          min-width: 389px;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
        &__image {
          height: 370px;
          position: relative;
          p {
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: 20px;
            left: 30px;
            font-family: 'Muller', sans-serif;
            color: white;
            text-transform: uppercase;
            font-size: 11px;
            line-height: 1;
          }
        }
        &__details {
          flex-grow: 2;
          padding: 30px;
          display: flex;
          flex-direction: column;
          a.room__name {
            margin: 0;
            padding: 0;
            color: #1c1c1c;
            font-family: 'Muller', sans-serif;
            font-size: 30px;
            line-height: 1;
            margin-bottom: 10px;
            font-weight: bold;
          }
          button {
            margin-top: auto;
            align-self: flex-start;
          }
        }
        &__features {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          li {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            img {
              width: 23px;
              margin-right: 10px;
            }
            p {
              color: #878787;
              text-transform: uppercase;
              font-family: 'Muller', sans-serif;
              margin: 0;
              padding: 0;
              font-size: 12px;
              line-height: 1;
            }
          }
        }
        &__description {
          margin: 0;
          padding: 0;
          font-size: 14px;
          line-height: 27px;
          font-family: 'Muller', sans-serif;
          color: #878787;
          margin-bottom: 20px;
        }
        &__extra {
          margin: 0;
          padding: 0;
          font-size: 14px;
          line-height: 27px;
          font-family: 'Muller', sans-serif;
          color: #e74c3c;
          margin-bottom: 20px;
          font-weight: bold;
        }
        &__button {
          border: 2px solid #1c1c1c;
          color: #1c1c1c;
          font-family: 'Muller', sans-serif;
          font-weight: bold;
          font-size: 11px;
          line-height: 1;
          padding: 15px 20px;
          outline: none;
          background: transparent;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        &__additional {
          margin-top: 20px;
          border-top: 1px solid #f1f1f1;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        &__icons {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 99px;
          li {
            margin: 0;
            padding: 0;
            width: 28%;
            position: relative;
            img {
              width: 100%;
            }
          }
        }
        &__link {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          text-transform: uppercase;
          line-height: 1;
          font-family: 'Muller', sans-serif;
          font-size: 11px;
          img {
            margin-left: 10px;
            width: 10px;
          }
        }
      }
    `}</style>
  </li>
)

export default RoomsListItem
