import React from "react";
import { Link } from "react-router-dom";

import FaTrashO from "react-icons/lib/fa/trash-o";

const Room = ({ room }) => (
  <li>
    <div className="amount">
      <span>1</span>
    </div>
    <div className="details">
      <h2>{room.name}</h2>
      <p>{room.descr}</p>
    </div>
    <div className="price">
      <span>{room.price}₽</span>
    </div>
    <div className="delete">
      <span>
        <FaTrashO size={24}  />
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
);

export default Room;
