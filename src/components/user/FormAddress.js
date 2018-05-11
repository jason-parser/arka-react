import React from 'react'

import Input from './Input'
import Select from './Select'

const FormAddress = () => (
  <div className="form-address">
    <h2>Адрес</h2>
    <div className="form">
      <Input width="30%" marginRight="5%" name="street" label="Улица" />
      <Input
        width="30%"
        marginRight="35%"
        name="house"
        label="Дом, корп., кв."
      />
      <Input width="30%" marginRight="5%" name="city" label="Город" />
      <Input width="30%" marginRight="35%" name="zip" label="Индекс" />

      <Select
        width="30%"
        marginRight="70%"
        name="country"
        label="Страна"
        values={[
          { value: 'russia', label: 'Россия' },
          { value: 'usa', label: 'США' }
        ]}
      />
    </div>
    <style jsx>{`
      .form-address {
        margin-bottom: 50px;
      }

      h2 {
        margin-bottom: 40px;
      }

      .form {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
      }
    `}</style>
  </div>
)

export default FormAddress
