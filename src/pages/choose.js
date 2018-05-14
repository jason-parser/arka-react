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
    checkOut: moment().add(1, 'days')
  }

  componentDidMount() {
    const json = localStorage.getItem('details')

    if (json) {
      const details = JSON.parse(json)

      this.setState({
        guests: parseInt(details.guests, 10),
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
        <Header
          guests={this.state.guests}
          checkIn={this.state.checkIn}
          checkOut={this.state.checkOut}
        />
        <Body rooms={rooms} addToCart={this.addToCart} />
      </Layout>
    )
  }
}

export default ChoosePage
