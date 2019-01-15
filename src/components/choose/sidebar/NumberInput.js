import React from 'react'

const NumberInput = ({ value, handleChange, isStatic }) => (
  <div className="inputs">
    <p className="value">{value}</p>
    {!isStatic && (
      <div className="controls">
        <img
          src="/wp-content/plugins/nd-booking/assets/img/icons/icon-down-arrow-white.svg"
          className="reversed"
          onClick={() => handleChange(1)}
        />
        <img
          src="/wp-content/plugins/nd-booking/assets/img/icons/icon-down-arrow-white.svg"
          onClick={() => {
            if (value > 1) {
              handleChange(-1)
            }
          }}
        />
      </div>
    )}
    <style jsx>{`
      .inputs {
        display: flex;
        align-items: center;
        justify-content: center;

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

        img {
          width: 12px;
          height: 12px;
          cursor: pointer;

          &.reversed {
            transform: rotate(180deg);
            margin-bottom: 10px;
          }
        }
      }
    `}</style>
  </div>
)

export default NumberInput
