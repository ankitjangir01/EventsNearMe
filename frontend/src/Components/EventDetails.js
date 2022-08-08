import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';

const EventDetails = () => {
    let { eventid } = useParams();
    const [event, setEvent] = useState(null);

    const fetchEvent = async () => {
        const fetchedEvent = await fetch('http://localhost:5000/api/events/geteventbyid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "eventid": eventid
            })
        })
        const json = await fetchedEvent.json();
        setEvent(json.event[0]);
    }

    useEffect(() => {
        return () => {
            fetchEvent();
        }
    }, [])


    return (
        <>
            <Navbar />
            {event &&
                <div className="container my-4 p-2 shadow-lg">
                    <img src={event['poster']} className="w-100" />
                    <h1><strong>{event.title}</strong></h1>
                    <div className="row">
                        <div className="col-5">
                            <h5>{event.description}</h5>
                        </div>
                        <div className="col-5">
                            <h5><i className="fa-solid fa-location-dot" /> {event.address}, {event.city}, {event.state}, {event.country}</h5>
                            <h5><i className="fa-solid fa-calendar-days" /> {event.date}</h5>
                        </div>
                    </div>
                    <hr />
                    <h4>Event listed by-</h4>
                    <div className='public-profile d-flex justify-content-start'>
                            <img src="https://images.hindustantimes.com/img/2022/08/07/550x309/salman_srk_1659837443892_1659837453083_1659837453083.jpeg" className="public-profile-img m-1" alt="..." />
                        <div className='p-3'>
                            <h4>Salman Khan</h4>
                        </div>
                    </div>
                    <div className="container mt-4 mb-2">
                    <button className='btn btn-outline-dark mx-2'>Buy Passes</button>
                    <button className='btn btn-outline-dark mx-2'>Contact Organizer</button>
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}

export default EventDetails