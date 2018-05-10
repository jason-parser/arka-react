import React from "react";

import Room from "./Room";

const RoomsList = ({ rooms }) => (
  <ul>
    {rooms.map(room => <Room key={room.id} room={room} />)}
    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </ul>
);

export default RoomsList;
