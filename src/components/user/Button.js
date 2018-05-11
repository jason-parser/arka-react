import React from 'react'

const Button = ({ children }) => (
  <button>
    {children}
    <style jsx>{`
      button {
        color: #fff;
        background-color: #a2865e;
        border: 1px solid #927954;
        outline: none;
        transition: all 0.3s ease;
        padding: 12px 48px;

        &:hover {
          background-color: #927954;
        }
      }
    `}</style>
  </button>
)

export default Button
