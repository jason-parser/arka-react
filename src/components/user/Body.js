import React from 'react'

import FormPersonal from './FormPersonal'
import FormAddress from './FormAddress'
import Button from './Button'

const Body = ({ rooms }) => (
  <div className="container">
    <h1>Информация о пользователе</h1>
    <FormPersonal />
    <FormAddress />
    <Button>Сохранить</Button>
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
    `}</style>
  </div>
)

export default Body
