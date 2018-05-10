import React from "react";

import Room from "./Room";

const RoomsList = ({ rooms }) => (
  <div>
    <header>
      <p style={{ width: "15%", textAlign: "center"}}>Количество</p>
      <p style={{ width: "55%"}}>Детали</p>
      <p style={{ width: "20%", textAlign: "right", paddingRight: "30px"}}>Цена</p>
      <p style={{ width: "10%"}}>Удалить</p>
    </header>
    <ul>{rooms.map(room => <Room key={room.id} room={room} />)}</ul>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        p {
          font-weight: 500;
        }
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-bottom: 60px;
      }
    `}</style>
  </div>
);

export default RoomsList;
