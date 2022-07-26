import React from 'react';
import { useEffect } from 'react';
import Event from './Event';
import { useState } from 'react';

const PopularEvents = () => {
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
        <div className='my-3 row w-100 justify-content-center'>
            <h2>Popular Events</h2>
            <hr/>
            {
                events.map((event) => {
                    return <Event key={event._id} event={event} />
                })
            }
        </div>
    )
}

export default PopularEvents