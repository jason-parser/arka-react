import React from 'react'

import Layout from '../components/common/Layout'
import Body from '../components/gallery/Body'

import rooms from '../data/rooms'

const GalleryPage = () => (
  <Layout>
    <Body rooms={rooms} />
  </Layout>
)

export default GalleryPage
