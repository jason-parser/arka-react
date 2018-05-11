import React from 'react'

const Modal = ({ translations, room, state }) => (
  <div className="modal__box" onClick={e => e.stopPropagation()}>
    <div
      className="modal__image"
      style={{
        background: `linear-gradient(to bottom, rgba(28, 28, 28, 0) 60%,rgba(28, 28, 28, 0.5) 100%), url('${
          room.image
        }') no-repeat center / cover`
      }}
    >
      <p>{room.name}</p>
    </div>
    <div className="modal__content">
      <ul className="modal__list">
        <li>
          <p>
            <strong>Тариф с завтраком</strong>
            <br />
            Изменение или отмена до 16:00 по времени отеля. Тариф включает в
            себя.
          </p>
          <form method="POST" action="/booking/">
            <input
              type="hidden"
              name="nd_booking_form_booking_id"
              value={room.id}
            />
            <input
              type="hidden"
              name="nd_booking_form_booking_date_from"
              value={state.checkIn.format('L')}
            />
            <input
              type="hidden"
              name="nd_booking_form_booking_date_to"
              value={state.checkOut.format('L')}
            />
            <input
              type="hidden"
              name="nd_booking_form_booking_guests"
              value={state.guests}
            />
            <input
              type="hidden"
              name="nd_booking_form_booking_arrive_advs"
              value="1"
            />
            <button className="room__button">
              {translations.bookFor} {room.price + 1000}₽
            </button>
          </form>
        </li>
        <li>
          <p>
            <strong>Тариф без завтрака</strong>
            <br />
            Изменение или отмена до 16:00 по времени отеля. Тариф включает в
            себя.
          </p>
          <form method="POST" action="/booking/">
            <input
              type="hidden"
              name="nd_booking_form_booking_id"
              value={room.id}
            />
            <input
              type="hidden"
              name="nd_booking_form_booking_date_from"
              value={state.checkIn.format('L')}
            />
            <input
              type="hidden"
              name="nd_booking_form_booking_date_to"
              value={state.checkOut.format('L')}
            />
            <input
              type="hidden"
              name="nd_booking_form_booking_guests"
              value={state.guests}
            />
            <input
              type="hidden"
              name="nd_booking_form_booking_arrive_advs"
              value="1"
            />
            <button className="room__button">
              {translations.bookFor} {room.price}₽
            </button>
          </form>
        </li>
      </ul>
    </div>
  </div>
)

export default Modal
