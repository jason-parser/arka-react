import React from 'react'

const Input = ({ width, marginRight, name, value, label }) => (
  <div className="input">
    <label htmlFor={`id-${name}`}>{label}</label>
    <input id={`id-${name}`} type="text" name={name} value={value} />
    <style jsx>{`
      .input {
        width: ${width};
        margin-right: ${marginRight};
        margin-bottom: 40px;
      }

      input {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Input
