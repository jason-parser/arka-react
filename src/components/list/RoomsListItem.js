import React from 'react'

const RoomsListItem = ({
  room,
  guests,
  checkIn,
  checkOut,
  translations,
  selectRoom
}) => (
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
      <button
        className="room__button"
        onClick={e => {
          e.preventDefault()
          selectRoom(room)
        }}
      >
        {translations.bookFor} {room.price}₽
      </button>
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
          {translations.more}{' '}
          <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-right.svg" />
        </a>
      </div>
    </div>
  </li>
)

export default RoomsListItem
