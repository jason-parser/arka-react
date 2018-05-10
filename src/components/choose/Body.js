import React from "react";

import RoomsList from "./RoomsList";

const Body = ({ rooms }) => (
  <div className="container">
    <div className="box">
      <header>
        <h1>Комнаты</h1>
        <p>
          {rooms.reduce(
            (min, p) => (p.price < min ? p.price : min),
            rooms[0].price
          )}
          {"₽ "}
          -{" "}
          {rooms.reduce(
            (max, p) => (p.price > max ? p.price : max),
            rooms[0].price
          )}₽
        </p>
      </header>
      <RoomsList rooms={rooms} />
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }

      .box {
        background: #fff;
        border: 2px solid #f8f8f8;
        padding: 30px;
        margin-bottom: 100px;
      }

      header {
        display: flex;
        justify-content: space-between;
      }

      h1 {
        margin-bottom: 40px;
        color: #666;
      }
    `}</style>
  </div>
);

export default Body;
