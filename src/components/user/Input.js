import React from 'react'

const Input = ({ width, marginRight, name, value, label }) => (
  <div className="input">
    <label htmlFor={`id-${name}`}>{label}</label>
    <input id={`id-${name}`} type="text" name={name} value={value} />
    <style jsx>{`
      .input {
        width: 100%;
        margin-right: 0;
        margin-bottom: 40px;

        @media (min-width: 768px) {
          width: ${width};
          margin-right: ${marginRight};
        }
      }

      input {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Input
