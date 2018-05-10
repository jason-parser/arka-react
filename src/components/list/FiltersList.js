import React from 'react';

const FiltersList = ({ handleService, filters, translations }) => (
  <form>

    <div className="filters__input-group">
      <input type="checkbox" name="free-wifi" id="free-wifi" onChange={handleService} value={filters.services.includes('free-wifi')} />
      <label htmlFor="free-wifi">{translations.servicesList.wifi}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="digital-tv" id="digital-tv" onChange={handleService} value={filters.services.includes('digital-tv')} />
      <label htmlFor="digital-tv">{translations.servicesList.tv}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="climate" id="climate" onChange={handleService} value={filters.services.includes('climate')} />
      <label htmlFor="climate">{translations.servicesList.climate}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="work" id="work" onChange={handleService} value={filters.services.includes('work')} />
      <label htmlFor="work">{translations.servicesList.work}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="bath" id="bath" onChange={handleService} value={filters.services.includes('bath')} />
      <label htmlFor="bath">{translations.servicesList.bath}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="shower" id="shower" onChange={handleService} value={filters.services.includes('shower')} />
      <label htmlFor="shower">{translations.servicesList.shower}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="safe" id="safe" onChange={handleService} value={filters.services.includes('safe')} />
      <label htmlFor="safe">{translations.servicesList.safe}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="pillows" id="pillows" onChange={handleService} value={filters.services.includes('pillows')} />
      <label htmlFor="pillows">{translations.servicesList.pillows}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="coffee" id="coffee" onChange={handleService} value={filters.services.includes('coffee')} />
      <label htmlFor="coffee">{translations.servicesList.coffee}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="tea" id="tea" onChange={handleService} value={filters.services.includes('tea')} />
      <label htmlFor="tea">{translations.servicesList.tea}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="bar" id="bar" onChange={handleService} value={filters.services.includes('bar')} />
      <label htmlFor="bar">{translations.servicesList.bar}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="bast" id="bast" onChange={handleService} value={filters.services.includes('bast')} />
      <label htmlFor="bast">{translations.servicesList.bast}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="dryer" id="dryer" onChange={handleService} value={filters.services.includes('dryer')} />
      <label htmlFor="dryer">{translations.servicesList.dryer}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="robe" id="robe" onChange={handleService} value={filters.services.includes('robe')} />
      <label htmlFor="robe">{translations.servicesList.robe}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="view" id="view" onChange={handleService} value={filters.services.includes('view')} />
      <label htmlFor="view">{translations.servicesList.view}</label>
    </div>

    <div className="filters__input-group">
      <input type="checkbox" name="parking" id="parking" onChange={handleService} value={filters.services.includes('parking')} />
      <label htmlFor="parking">{translations.servicesList.parking}</label>
    </div>

  </form>
)

export default FiltersList;
