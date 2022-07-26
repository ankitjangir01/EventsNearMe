import React from 'react';

const Event = (props) => {
  const { poster, title, description, address, city, state, country, date } = props.event;
  return (
    <div className="row col-md-5 event-card mx-4 my-4 shadow-lg">
      <img src={poster} className="img-fluid rounded my-2" alt="no event poster available" />
      <div className="p-4">
        <div className="card-body">
          <h5 className="card-title"><strong>{title}</strong></h5>
          <hr />
          <p className="card-text">{description}</p>
          <p className="card-text"><i className="fa-solid fa-location-dot" /> {address}, {city}, {state}, {country}</p>
          <p className="card-text"><i className="fa-solid fa-calendar-days" /> {date}</p>
          <p className="card-text"><i className="fa-solid fa-clock" /> 5 days, 5 hrs to go</p>
        </div>
      </div>
    </div>
  )
}

export default Event