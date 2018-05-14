import React from 'react'

import roomsRu from '../data/rooms/ru'
import roomsEn from '../data/rooms/en'

import ru from '../data/translations/ru'
import en from '../data/translations/en'

import RoomsList from '../components/list/RoomsList'

moment.locale('ru')

export default class ListPage extends React.Component {
  state = {
    rooms: roomsRu,
    filters: {
      services: []
    },
    sortByPrice: 'ASC',
    sortByCategory: 'ASC',
    guests: 1,
    roomsCount: 1,
    children: 0,
    checkIn: moment(),
    checkOut: moment().add(1, 'days'),
    translations: ru,
    currentRoom: {}
  }

  componentDidMount() {
    if (window.location.href.indexOf('/en/') > -1) {
      this.setState({ translations: en, rooms: roomsEn })
    }
  }

  render() {
    const { translations } = this.state

    return (
      <div>
        <header className="header">
          <div
            className="header__bg"
            style={{
              backgroundImage: `url('/wp-content/uploads/2018/01/IMG_2528.jpg')`
            }}
          />
          <div className="header__controls">
            <div
              className={`header__sort ${this.state.isPriceOpen &&
                'header__sort--open'}`}
              onClick={() => {
                this.setState(prevState => ({
                  isPriceOpen: !prevState.isPriceOpen,
                  isCatOpen: false
                }))
              }}
            >
              {translations.price}
              <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" />
              <div className="dropdown">
                <a onClick={() => this.setState({ sortByPrice: 'ASC' })}>
                  {translations.asc}
                </a>
                <a onClick={() => this.setState({ sortByPrice: 'DESC' })}>
                  {translations.desc}
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="main">
          <RoomsList
            state={this.state}
            translations={translations}
            selectRoom={this.selectRoom}
          />
        </div>
        <style jsx>{`
          .header {
            margin-bottom: 88px;
            &__bg {
              height: 300px;
              background-size: cover;
              background-position: center center;
            }
            &__controls {
              background: #1c1c1c;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 74px;
            }
            &__sort {
              padding: 0;
              margin: 0 20px;
              display: flex;
              align-items: center;
              text-transform: uppercase;
              letter-spacing: 2px;
              font-family: 'Muller', sans-serif;
              color: #878787;
              font-size: 12px;
              line-height: 1;
              position: relative;
              cursor: pointer;

              img {
                margin-left: 10px;
                width: 10px;
                height: 10px;
              }

              .dropdown {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 43px;
                left: -19px;
                background: #1c1c1c;
                z-index: 999;

                a {
                  color: #878787;
                  font-family: 'Muller', sans-serif;
                  text-transform: uppercase;
                  cursor: pointer;
                  letter-spacing: 2px;
                  font-size: 11px;
                  line-height: 1.4;
                  padding: 10px 20px;
                  background: #1c1c1c;
                }
              }

              &--open {
                color: #fff;
                font-weight: bold;

                .dropdown {
                  display: flex;
                  font-weight: normal;
                }
              }
            }
          }

          .main {
            width: 100%;
            margin: 0 auto;
            max-width: 798px;
          }
        `}</style>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
}
