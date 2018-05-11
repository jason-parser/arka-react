import React from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'

const Calendars = () => {
  const options = {
    className: 'calendar'
  }
  return (
    <div className="wrapper">
      <Calendar {...options} />
      <Calendar
        {...options}
        activeStartDate={new Date(moment().add(1, 'months'))}
      />
      <Calendar
        {...options}
        activeStartDate={new Date(moment().add(2, 'months'))}
      />
      <Calendar
        {...options}
        activeStartDate={new Date(moment().add(3, 'months'))}
      />
      <Calendar
        {...options}
        activeStartDate={new Date(moment().add(4, 'months'))}
      />
      <Calendar
        {...options}
        activeStartDate={new Date(moment().add(5, 'months'))}
      />
      <style jsx global>{`
        .calendar {
          width: 32%;
          margin-right: 2%;
          margin-bottom: 30px;

          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      `}</style>
      <style jsx>{`
        .wrapper {
          width: 66%;
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  )
}

export default Calendars
