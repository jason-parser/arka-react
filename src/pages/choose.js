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

  addToCart = id => {
    let data = []
    let newData = []

    if (localStorage.getItem('cart')) {
      data = [...JSON.parse(localStorage.getItem('cart'))]
    }

    if (data.filter(room => room.id == id).length > 0) {
      newData = data.map(
        room =>
          room.id == id
            ? {
                ...room,
                amount: room.amount + 1
              }
            : room
      )
    } else {
      newData = [
        ...data,
        {
          id,
          amount: 1
        }
      ]
    }

    localStorage.setItem('cart', JSON.stringify(newData))
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
          <Body rooms={rooms} addToCart={this.addToCart} />
        </div>
      </Layout>
    )
  }
}

export default ChoosePage
