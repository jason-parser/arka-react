import React from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'

const Calendars = () => {
  return (
    <div className="wrapper">
      <Calendar className="calendar" />
      <Calendar
        className="calendar"
        activeStartDate={new Date(moment().add(1, 'months'))}
      />
      <Calendar
        className="calendar hide-small"
        activeStartDate={new Date(moment().add(2, 'months'))}
      />
      <Calendar
        className="calendar hide-small"
        activeStartDate={new Date(moment().add(3, 'months'))}
      />
      <Calendar
        className="calendar hide-medium"
        activeStartDate={new Date(moment().add(4, 'months'))}
      />
      <Calendar
        className="calendar hide-medium"
        activeStartDate={new Date(moment().add(5, 'months'))}
      />
      <style jsx global>{`
        .calendar {
          margin-bottom: 30px;
          width: 100%;
          margin-right: 0;

          @media (min-width: 900px) and (max-width: 1199px) {
            width: 49%;
            margin-right: 2%;

            &:nth-child(2n) {
              margin-right: 0;
            }
          }

          @media (min-width: 1200px) {
            width: 32%;
            margin-right: 2%;

            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }

        .hide-small {
          display: none;

          @media (min-width: 900px) {
            display: block;
          }
        }

        .hide-medium {
          display: none;

          @media (min-width: 1200px) {
            display: block;
          }
        }
      `}</style>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-wrap: wrap;
          flex-grow: 2;
        }
      `}</style>
    </div>
  )
}

export default Calendars
