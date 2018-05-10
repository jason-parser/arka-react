import React from 'react';
import queryString from 'query-string';

import roomsRu from '../data/rooms/ru';
import roomsEn from '../data/rooms/en';

import ru from '../data/translations/ru';
import en from '../data/translations/en';

import FiltersList from '../components/list/FiltersList';
import RoomsList from '../components/list/RoomsList';
import Modal from '../components/list/Modal';

moment.locale('ru');

export default class ListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.handleService = this.handleService.bind(this);
    this.selectRoom = this.selectRoom.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);

    if (parsed.nd_booking_archive_form_guests) {
      this.setState({ guests: parseInt(parsed.nd_booking_archive_form_guests, 10) });
    }

    if (parsed.nd_booking_archive_form_date_range_from) {
      this.setState({ checkIn: moment(parsed.nd_booking_archive_form_date_range_from) });
    }

    if (parsed.nd_booking_archive_form_date_range_to) {
      this.setState({ checkOut: moment(parsed.nd_booking_archive_form_date_range_to) });
    }

    if(window.location.href.indexOf('/en/') > -1) {
      this.setState({ translations: en, rooms: roomsEn });
    }

    const that = this;

    jQuery(document).ready(function () {

      jQuery(function ($) {
        $("#from-input").datepicker({
          defaultDate: "+1w",
          minDate: 0,
          firstDay: 0,
          dateFormat: "mm/dd/yy",
          monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль'", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
          monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
          dayNamesMin: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
          nextText: "след",
          prevText: "пред",
          changeMonth: false,
          numberOfMonths: 1,
          onClose: function () {
            var checkIn = moment($(this).datepicker("getDate"));
            that.setState({ checkIn });
          }
        });

        $("#to-input").datepicker({
          defaultDate: "+1w",
          minDate: "+1d",
          firstDay: 0,
          dateFormat: "mm/dd/yy",
          monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль'", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
          monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
          dayNamesMin: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
          nextText: "след",
          prevText: "пред",
          changeMonth: false,
          numberOfMonths: 1,
          onClose: function () {
            var checkOut = moment($(this).datepicker("getDate"));
            that.setState({ checkOut });
          }
        });

        $("#from-input").datepicker("setDate", "+0");
        $("#to-input").datepicker("setDate", "+1");

        $("#from").click(function () {
          $("#from-input").datepicker("show");
        });

        $("#to").click(function () {
          $("#to-input").datepicker("show");
        });
      })
    });
  }

  handleService(event) {
    const name = event.target.name;

    if (!this.state.filters.services.includes(name)) {
      this.setState(prevState => ({
        ...prevState,
        filters: {
          ...prevState.filters,
          services: [...prevState.filters.services, name]
        }
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        filters: {
          ...prevState.filters,
          services: prevState.filters.services.filter(service => service !== name)
        }
      }));
    }
  }

  selectRoom(room) {
    this.setState(prevState => ({
      currentRoom: room
    }),
    () => document.getElementById("overlay").style.display = "flex"
  )
  }

  render() {
    const { translations } = this.state;

    return (
      <div>
        <div id="overlay" className="modal__overlay" onClick={() => document.getElementById("overlay").style.display = "none"}>
          <Modal translations={translations} room={this.state.currentRoom} state={this.state} />
        </div>
        <header className="header">
          <div className="header__bg" style={{ backgroundImage: `url('/wp-content/uploads/2018/01/IMG_2528.jpg')` }}></div>
          <div className="header__controls">
            <div className={`header__sort ${this.state.isPriceOpen && 'header__sort--open'}`} onClick={() => {
              this.setState(prevState => ({ isPriceOpen: !prevState.isPriceOpen, isCatOpen: false }));
            }}>
              {translations.price}
      <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" />
              <div className="dropdown">
                <a onClick={() => this.setState({ sortByPrice: 'ASC' })}>{translations.asc}</a>
                <a onClick={() => this.setState({ sortByPrice: 'DESC' })}>{translations.desc}</a>
              </div>
            </div>
          </div>
        </header>

        <main className="main">

          <div className="sidebar">
            <div className="booking">

              <div className="booking__block" id="from">
                <strong>{this.state.translations.checkIn}</strong>
                <div className="booking__inputs">
                  <p className="booking__value" id="check-in">{this.state.checkIn.format('D')}</p>
                  <div className="booking__controls">
                    <span>{this.state.checkIn.format('MMM').substring(0, 3)}</span>
                    <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" />
                  </div>
                </div>
                <input type="text" id="from-input" style={{ width: '0', height: "0", margin: '0', padding: '0', visibility: 'hidden' }} />
              </div>

              <div className="booking__block" id="to">
                <strong>{this.state.translations.checkOut}</strong>
                <div className="booking__inputs">
                  <p className="booking__value" id="check-out">{this.state.checkOut.format('D')}</p>
                  <div className="booking__controls">
                    <span>{this.state.checkOut.format('MMM').substring(0, 3)}</span>
                    <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" />
                  </div>
                </div>
                <input type="text" id="to-input" style={{ width: '0', height: "0", margin: '0', padding: '0', visibility: 'hidden' }} />
              </div>

              <div className="booking__block">
                <strong>{this.state.translations.guests}</strong>
                <div className="booking__inputs">
                  <p className="booking__value" id="guests">{this.state.guests}</p>
                  <div className="booking__controls">
                    <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" className="reversed" onClick={() => {
                      this.setState(prevState => ({ guests: prevState.guests + 1 }));
                    }} />
                    <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" onClick={() => {
                      if (this.state.guests > 1)
                        this.setState(prevState => ({ guests: prevState.guests - 1 }));
                    }} />
                  </div>
                </div>
              </div>

              <div className="booking__block">
                <strong>{this.state.translations.nights}</strong>
                <div className="booking__inputs">
                  <p className="booking__value" id="nights">{this.state.checkOut.diff(this.state.checkIn, 'days')}</p>
                </div>
              </div>

              <div className="booking__block">
                <strong>{this.state.translations.children}</strong>
                <div className="booking__inputs">
                  <p className="booking__value" id="children">{this.state.children}</p>
                  <div className="booking__controls">
                    <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" className="reversed" onClick={() => {
                      this.setState(prevState => ({ children: prevState.children + 1 }));
                    }} />
                    <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" onClick={() => {
                      if (this.state.children > 0)
                        this.setState(prevState => ({ children: prevState.children - 1 }));
                    }} />
                  </div>
                </div>
              </div>

              <div className="booking__block">
                <strong>{this.state.translations.rooms}</strong>
                <div className="booking__inputs">
                  <p className="booking__value" id="rooms">{this.state.roomsCount}</p>
                  <div className="booking__controls">
                    <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" className="reversed" onClick={() => {
                      this.setState(prevState => ({ roomsCount: prevState.roomsCount + 1 }));
                    }} />
                    <img src="/wp-content/themes/hotelbooking/img/rooms-page/arrow-down.svg" onClick={() => {
                  <p className="booking__value" id="rooms">{this.state.roomsCount}</p>
                      if (this.state.roomsCount > 1)
                        this.setState(prevState => ({ roomsCount: prevState.roomsCount - 1 }));
                    }} />
                  </div>
                </div>
              </div>

            </div>
            {/* <div className="filters">

              <div className="filters__block">
                <h3>{translations.services}:</h3>
                <FiltersList handleService={this.handleService} filters={this.state.filters} translations={translations} />
              </div>

            </div> */}
          </div>

          <RoomsList state={this.state} translations={translations} selectRoom={this.selectRoom} />
        </main>
      </div>
    );
  }
}
