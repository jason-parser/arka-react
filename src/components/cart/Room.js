import React from 'react'
import { Link } from 'react-router-dom'

import FaTrashO from 'react-icons/lib/fa/trash-o'

const Room = ({ room, removeFromCart }) => (
  <li>
    <div className="amount">
      <span>{room.amount}</span>
    </div>
    <div className="details">
      <h2>{room.name}</h2>
      <p>{room.descr}</p>
    </div>
    <div className="price">
      <span>{room.price}₽</span>
    </div>
    <div className="delete" onClick={() => removeFromCart(room.id)}>
      <span>
        <FaTrashO size={24} />
      </span>
    </div>
    <style jsx>{`
      li {
        margin: 0;
        padding: 15px 0;
        border-top: 2px solid #eee;
        margin-bottom: 20px;
        display: flex;
      }

      .amount {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 16px;
        }
      }

      .details {
        width: 55%;
        h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        p {
          display: none;

          @media (min-width: 768px) {
            display: block;
          }
        }
      }

      .price {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px;

        span {
          font-size: 16px;
        }
      }

      .delete {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          cursor: pointer;
        }
      }
    `}</style>
  </li>
)

export default Room
