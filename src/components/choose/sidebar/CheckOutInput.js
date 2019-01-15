import React from 'react'
import moment from 'moment'

moment.locale('ru')

const CheckOutInput = ({ value, onClick }) => (
  <div className="inputs" onClick={onClick}>
    <p className="value">{moment(value, 'DD.MM.YYYY').format('D')}</p>
    <div className="controls">
      <span>
        {moment(value, 'DD.MM.YYYY')
          .format('MMM')
          .substring(0, 3)}
      </span>
      <img src="/wp-content/plugins/nd-booking/assets/img/icons/icon-down-arrow-white.svg" />
    </div>
    <style jsx>{`
      .inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .value {
          color: #a99458;
          font-family: 'Muller', sans-serif;
          font-size: 50px;
          line-height: 1;
          font-weight: bold;
          margin-right: 10px;
        }
      }

      .controls {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          color: #a99458;
          font-size: 12px;
          line-height: 1;
          font-weight: bold;
        }

        img {
          width: 12px;
          height: 12px;
        }
      }
    `}</style>
  </div>
)

export default CheckOutInput
