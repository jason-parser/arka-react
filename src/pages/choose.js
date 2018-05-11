import React from 'react'

import Layout from '../components/common/Layout'
import Header from '../components/choose/Header'
import Body from '../components/choose/Body'

import rooms from '../data/rooms/ru'

const ChoosePage = () => (
  <Layout>
    <div style={{ background: '#fafafa' }}>
      <Header />
      <Body rooms={rooms} />
    </div>
  </Layout>
)

export default ChoosePage
