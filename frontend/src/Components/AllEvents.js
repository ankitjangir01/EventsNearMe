import React from 'react';
import { useEffect } from 'react';
import Event from './Event';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AllEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchAllEvents = async () => {
            const response = await fetch('/api/events/allevents');
            const json = await response.json();
            setEvents(json.allevents);
        }
        fetchAllEvents();
    }, [])


    return (
        <div>
            <Navbar />
            <div className="container my-4">
                    <h2>All Events Near You</h2>
                <div className='container my-3 row'>
                    {
                        events.map((event) => {
                            return <Event key={event._id} event={event} />
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllEvents