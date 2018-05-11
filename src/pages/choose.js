import React from 'react'
import queryString from 'query-string'
import moment from 'moment'

import Layout from '../components/common/Layout'
import Header from '../components/choose/Header'
import Body from '../components/choose/Body'

import rooms from '../data/rooms/ru'

moment.locale('ru')

class ChoosePage extends React.Component {
  state = {
    guests: 1,
    checkIn: moment(),
    checkOut: moment().add(1, 'days')
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search)

    if (parsed.nd_booking_archive_form_guests) {
      this.setState({
        guests: parseInt(parsed.nd_booking_archive_form_guests, 10)
      })
    }

    if (parsed.nd_booking_archive_form_date_range_from) {
      this.setState({
        checkIn: moment(parsed.nd_booking_archive_form_date_range_from)
      })
    }

    if (parsed.nd_booking_archive_form_date_range_to) {
      this.setState({
        checkOut: moment(parsed.nd_booking_archive_form_date_range_to)
      })
    }
  }

  render() {
    return (
      <Layout>
        <div style={{ background: '#fafafa' }}>
          <Header
            guests={this.state.guests}
            checkIn={this.state.checkIn}
            checkOut={this.state.checkOut}
          />
          <Body rooms={rooms} />
        </div>
      </Layout>
    )
  }
}

export default ChoosePage
