import React from 'react'

const Select = ({ width, marginRight, name, values, label }) => (
  <div className="select">
    <label htmlFor={`id-${name}`}>{label}</label>
    <select id={`id-${name}`} name={name}>
      {values.map((value, index) => (
        <option key={index} value={value.value}>
          {value.label}
        </option>
      ))}
    </select>
    <style jsx>{`
      .select {
        width: 100%;
        margin-right: 0;
        margin-bottom: 40px;

        @media (min-width: 768px) {
          width: ${width};
          margin-right: ${marginRight};
        }
      }

      select {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Select
