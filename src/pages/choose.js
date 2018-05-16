import React from 'react'
import moment from 'moment'

import Layout from '../components/common/Layout'
import Header from '../components/choose/Header'
import Body from '../components/choose/Body'

import rooms from '../data/rooms'

moment.locale('ru')

class ChoosePage extends React.Component {
  state = {
    guests: 1,
    checkIn: moment(),
    checkOut: moment().add(1, 'days'),
    rooms: 1
  }

  componentDidMount() {
    const json = localStorage.getItem('details')

    if (json) {
      const details = JSON.parse(json)

      this.setState({
        guests: parseInt(details.guests, 10),
        rooms: parseInt(details.rooms, 10),
        checkIn: moment(details.checkIn),
        checkOut: moment(details.checkOut)
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
                amount: room.amount + this.state.rooms
              }
            : room
      )
    } else {
      newData = [
        ...data,
        {
          id,
          amount: this.state.rooms
        }
      ]
    }

    localStorage.setItem('cart', JSON.stringify(newData))
  }

  handleCheckIn = date => {
    this.setState({ checkIn: date })
    const json = localStorage.getItem('details')

    if (json) {
      const details = JSON.parse(json)
      details.checkIn = moment(date).format('MM/DD/YYYY')

      localStorage.setItem('details', JSON.stringify(details))
    }
  }

  handleCheckOut = date => {
    this.setState({ checkOut: date })
    const json = localStorage.getItem('details')

    if (json) {
      const details = JSON.parse(json)
      details.checkOut = moment(date).format('MM/DD/YYYY')

      localStorage.setItem('details', JSON.stringify(details))
    }
  }

  handleGuests = inc => {
    const oldGuests = this.state.guests
    this.setState(prevState => ({ guests: prevState.guests + inc }))
    const json = localStorage.getItem('details')

    if (json) {
      const details = JSON.parse(json)
      details.guests = oldGuests + inc

      localStorage.setItem('details', JSON.stringify(details))
    }
  }

  handleRooms = inc => {
    const oldRooms = this.state.rooms
    this.setState(prevState => ({ rooms: prevState.rooms + inc }))
    const json = localStorage.getItem('details')

    if (json) {
      const details = JSON.parse(json)
      details.rooms = oldRooms + inc

      localStorage.setItem('details', JSON.stringify(details))
    }
  }

  render() {
    return (
      <Layout>
        <Header
          guests={this.state.guests}
          checkIn={this.state.checkIn}
          checkOut={this.state.checkOut}
        />
        <Body
          guests={this.state.guests}
          handleGuests={this.handleGuests}
          checkIn={this.state.checkIn}
          handleCheckIn={this.handleCheckIn}
          checkOut={this.state.checkOut}
          handleCheckOut={this.handleCheckOut}
          rooms={rooms}
          addToCart={this.addToCart}
          roomsCount={this.state.rooms}
          handleRooms={this.handleRooms}
        />
      </Layout>
    )
  }
}

export default ChoosePage
