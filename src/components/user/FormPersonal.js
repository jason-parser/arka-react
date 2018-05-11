import React from 'react'

import Input from './Input'
import Select from './Select'

const FormPersonal = () => (
  <div className="form-personal">
    <h2>Персональные данные</h2>
    <div className="form">
      <Select
        width="30%"
        marginRight="5%"
        name="language"
        label="Язык"
        values={[
          { value: 'russian', label: 'Русский' },
          { value: 'english', label: 'Английский' }
        ]}
      />
      <Select
        width="30%"
        marginRight="5%"
        name="citizenship"
        label="Гражданство"
        values={[
          { value: 'ru', label: 'Россия' },
          { value: 'us', label: 'США' }
        ]}
      />
      <Select
        width="30%"
        marginRight="0"
        name="sex"
        label="Пол"
        values={[
          { value: 'male', label: 'Мужской' },
          { value: 'female', label: 'Женский' }
        ]}
      />
      <Select
        width="30%"
        marginRight="5%"
        name="greeting"
        label="Приветствие"
        values={[
          { value: 'ru', label: 'На русском' },
          { value: 'en', label: 'На английском' }
        ]}
      />
      <Input width="30%" marginRight="5%" name="first-name" label="Имя" />
      <Input width="30%" marginRight="0" name="second-name" label="Фамилия" />
    </div>
    <style jsx>{`
      .form-personal {
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

export default FormPersonal
