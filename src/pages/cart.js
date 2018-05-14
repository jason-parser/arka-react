import React from 'react'

import Layout from '../components/common/Layout'
import Body from '../components/cart/Body'

import rooms from '../data/rooms'

class CartPage extends React.Component {
  state = {
    rooms: [],
    loading: true
  }

  componentDidMount() {
    const roomsInCart = JSON.parse(localStorage.getItem('cart'))

    if (roomsInCart) {
      const newRooms = rooms
        .filter(room => roomsInCart.find(item => item.id == room.id))
        .map(room => {
          const cartRoom = roomsInCart.find(item => item.id == room.id)
          if (cartRoom) {
            return {
              ...room,
              amount: cartRoom.amount
            }
          }
        })

      this.setState(prevState => ({ rooms: newRooms, loading: false }))
    } else {
      this.setState(prevState => ({ loading: false }))
    }
  }

  removeFromCart = id => {
    this.setState(prevState => ({
      rooms: prevState.rooms.filter(room => room.id != id)
    }))

    const data = [...JSON.parse(localStorage.getItem('cart'))]
    const newData = data.filter(room => room.id != id)
    localStorage.setItem('cart', JSON.stringify(newData))
  }

  render() {
    return (
      <Layout>
        <div style={{ background: '#fafafa' }}>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <Body
              rooms={this.state.rooms}
              removeFromCart={this.removeFromCart}
            />
          )}
        </div>
      </Layout>
    )
  }
}

export default CartPage
