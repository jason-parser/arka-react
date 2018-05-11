import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="details">
        <h2>Данные бронирования</h2>
        <Link to="/details">
          <a>Изменить</a>
        </Link>
      </div>

      <ul>
        <li>Гости: 2 взрослых</li>
        <li>Даты: 10.05.2018 - 20.05.2018</li>
      </ul>
    </div>

    <style jsx>{`
      .header {
        width: 100%;
        background: #1c1c1c;
      }

      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 30px;
      }

      .details {
        display: flex;
        margin-bottom: 20px;

        h2 {
          color: white;
          margin-right: 15px;
        }
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          position: relative;
          margin: 0;
          padding: 0;
          margin-bottom: 10px;
        }
      }
    `}</style>
  </div>
)

export default Header
