import React from 'react'

import Layout from '../components/common/Layout'
import Body from '../components/cart/Body'

import rooms from '../data/rooms/ru'

const CartPage = () => (
  <Layout>
    <div style={{ background: '#fafafa' }}>
      <Body rooms={rooms} />
    </div>
  </Layout>
)

export default CartPage
