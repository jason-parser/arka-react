import React from "react";

import Inputs from "./Inputs";
import Calendars from "./Calendars";

const Body = () => (
  <div className="container">
    <h1>Бронирование / Reservation</h1>
    <div className="wrapper">
      <Inputs />
      <Calendars />
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 30px;
        padding-top: 60px;
        padding-bottom: 100px;
      }

      h1 {
        margin-bottom: 40px;
        color: #666;
      }

      .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
    `}</style>
  </div>
);

export default Body;
