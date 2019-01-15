import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <style jsx>{`
      div {
        z-index: 108;
        left: 10px;

        &::after {
          display: none;
        }
      }
    `}</style>
  </div>
)

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <style jsx>{`
      div {
        right: 10px;

        &::after {
          display: none;
        }
      }
    `}</style>
  </div>
)

class RoomsListItem extends React.Component {
  state = {
    currentSlide: 0
  }

  handleChange = index => {
    this.setState({ currentSlide: index })
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      easing: 'ease',
      afterChange: this.handleChange,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }

    const { room } = this.props

    return (
      <li className="room">
        <div className="slider">
          <Slider {...settings}>
            {room.gallery.map((image, index) => (
              <div className="slide" key={index}>
                <div
                  className={`slide-bg ${index == this.state.currentSlide &&
                    'active'}`}
                  style={{
                    background: `linear-gradient(to bottom, rgba(28, 28, 28, 0) 60%,rgba(28, 28, 28, 0.5) 100%), url('${image}') no-repeat center / cover`
                  }}
                />
              </div>
            ))}
          </Slider>
          <p>Hotel ARKA</p>
        </div>
        <div className="room__details">
          <a href={room.link} className="room__name">
            {room.name}
          </a>
          <ul className="room__features">
            <li>
              <img src="/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg" />
              <p>{room.guests}</p>
            </li>
          </ul>
          <p className="room__description">{room.descr}</p>
          {room.extra && <p className="room__extra">{room.extra}</p>}

          <div className="room__additional">
            <ul className="room__icons">
              <li>
                <img
                  src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/07/icon-18.png"
                  title="WIFI"
                />
              </li>
              <li>
                <img
                  src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/07/icon-18.png"
                  title="Номер с видом"
                />
              </li>
              <li>
                <img
                  src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/07/icon-18.png"
                  title="TV"
                />
              </li>
            </ul>
            <a href={room.link} className="room__button">
              Подробнее
            </a>
          </div>
        </div>
        <style jsx>{`
          .room {
            border: 1px solid #f1f1f1;
            margin: 0;
            padding: 0;
            width: 100%;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            .slider {
              position: relative;
              cursor: pointer;

              .slide {
                width: 100%;
                padding-top: 50%;
                position: relative;
                overflow: hidden;
              }

              .slide-bg {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                transform: scale(1.2);

                &.active {
                  animation: up-scale 8s linear;
                }
              }

              p {
                margin: 0;
                padding: 0;
                position: absolute;
                bottom: 20px;
                left: 30px;
                font-family: 'Muller', sans-serif;
                color: white;
                text-transform: uppercase;
                font-size: 11px;
                line-height: 1;
              }
            }
            &__details {
              flex-grow: 2;
              padding: 30px;
              display: flex;
              flex-direction: column;
              a.room__name {
                margin: 0;
                padding: 0;
                color: #1c1c1c;
                font-family: 'Muller', sans-serif;
                font-size: 30px;
                line-height: 1;
                margin-bottom: 10px;
                font-weight: bold;
              }
              button {
                margin-top: auto;
                align-self: flex-start;
              }
            }
            &__features {
              margin: 0;
              padding: 0;
              list-style: none;
              display: flex;
              align-items: center;
              margin-bottom: 20px;
              li {
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                img {
                  width: 23px;
                  margin-right: 10px;
                }
                p {
                  color: #878787;
                  text-transform: uppercase;
                  font-family: 'Muller', sans-serif;
                  margin: 0;
                  padding: 0;
                  font-size: 12px;
                  line-height: 1;
                }
              }
            }
            &__description {
              margin: 0;
              padding: 0;
              font-size: 14px;
              line-height: 27px;
              font-family: 'Muller', sans-serif;
              color: #878787;
              margin-bottom: 20px;
            }
            &__extra {
              margin: 0;
              padding: 0;
              font-size: 14px;
              line-height: 27px;
              font-family: 'Muller', sans-serif;
              color: #e74c3c;
              margin-bottom: 20px;
              font-weight: bold;
            }
            &__button {
              text-decoration: none;
              border: 2px solid #1c1c1c;
              color: #1c1c1c;
              font-family: 'Muller', sans-serif;
              font-weight: bold;
              font-size: 11px;
              line-height: 1;
              padding: 15px 20px;
              outline: none;
              background: transparent;
              cursor: pointer;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            &__additional {
              margin-top: 20px;
              border-top: 1px solid #f1f1f1;
              padding-top: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            &__icons {
              margin: 0;
              padding: 0;
              list-style: none;
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 99px;
              li {
                margin: 0;
                padding: 0;
                width: 28%;
                position: relative;
                img {
                  width: 100%;
                }
              }
            }
          }
          @keyframes up-scale {
            0% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </li>
    )
  }
}

export default RoomsListItem
