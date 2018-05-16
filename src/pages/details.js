import React from 'react'
import moment from 'moment'

import Layout from '../components/common/Layout'
import Body from '../components/details/Body'

moment.locale('ru')

class DetailsPage extends React.Component {
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

  handleCheckInChange = date => {
    this.setState({
      checkIn: moment(date)
    })
  }

  handleCheckOutChange = date => {
    this.setState({
      checkOut: moment(date)
    })
  }

  handleGuests = inc => {
    this.setState(prevState => ({
      guests: prevState.guests + inc
    }))
  }

  handleRooms = inc => {
    this.setState(prevState => ({
      rooms: prevState.rooms + inc
    }))
  }

  handleSubmit = () => {
    localStorage.setItem('details', JSON.stringify(this.state))
  }

  render() {
    return (
      <Layout>
        <div style={{ background: '#fafafa' }}>
          <Body
            details={this.state}
            handleCheckInChange={this.handleCheckInChange}
            handleCheckOutChange={this.handleCheckOutChange}
            handleGuests={this.handleGuests}
            handleRooms={this.handleRooms}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </Layout>
    )
  }
}

export default DetailsPage
