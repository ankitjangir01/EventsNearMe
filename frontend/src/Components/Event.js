import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Event = (props) => {
  const { _id, poster, title, address, city, state, country, date } = props.event;

  const onClickShareBtn = () => {
    let url = 'http://events-near-me-india.herokuapp.com/eventdetails';
    navigator.clipboard.writeText(url + '/' + _id);
    toast.success("Event link copied to clipboard !")
  }

  return (
    <div className="col-md-4 event-card mx-4 my-4 shadow-lg">
      <img src={poster} className="img-fluid rounded my-2" alt="no event poster available" />
      <div className="p-4">
        <div className="card-body">
          <h5 className="card-title"><strong>{title}</strong></h5>
          <hr />
          <p className="card-text"><i className="fa-solid fa-location-dot" /> {address}, {city}, {state}, {country}</p>
          <p className="card-text"><i className="fa-solid fa-calendar-days" /> {date}</p>
          <p className="card-text"><i className="fa-solid fa-clock" /> 5 days, 5 hrs to go</p>
        </div>
        <hr/>
      </div>
      <div className="px-4 d-flex justify-content-between">
        <button type="button" className="btn btn-sm btn-outline-dark"><i className="fa-solid fa-circle-info"/>
           <Link to={`/eventdetails/${_id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> More Details </Link>
        </button>
        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-dark" onClick={onClickShareBtn}><i className="fa-solid fa-share-nodes"/> Share</button>
          <button type="button" className="btn btn-outline-dark"><i className="fa-solid fa-bookmark"/> Save</button>
        </div>
      </div>
    </div>
  )
}

export default Event