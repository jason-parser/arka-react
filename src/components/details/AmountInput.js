import React from 'react'

const AmountInput = ({ name, value, handleInc, handleDec }) => (
  <div className="amount-input">
    <button onClick={() => handleDec(name)} className="minus">
      -
    </button>
    <input type="number" min="0" value={value} />
    <button onClick={() => handleInc(name)} className="plus">
      +
    </button>
    <style jsx>{`
      .amount-input {
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      input {
        margin: 0 5px;
        width: 48px;
        height: 48px;
        padding: 0 !important;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button {
        width: 48px;
        height: 48px;
        border: none;
        color: #a2865e;
        background-color: #fff;
        outline: none;
        border: 1px solid #a2865e;
        cursor: pointer;
        transition: all 0.3s ease;

        &.minus {
          background: #d9d9d9;
          color: #5d5d5d;
          border-color: #d9d9d9;

          &:hover {
            background-color: #fff;
            border-color: #a2865e;
          }
        }

        &.plus {
          &:hover {
            background-color: #d9d9d9;
            border-color: #d9d9d9;
          }
        }
      }

      .dates {
        display: flex;
        justify-content: space-between;

        label {
          width: 48%;
        }

        input {
          width: 100%;
        }
      }
    `}</style>
    <style jsx global>{`
      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type='number'] {
        -moz-appearance: textfield;
      }
    `}</style>
  </div>
)

export default AmountInput
