import React from 'react';
import Event from './Event';
import { useNavigate } from 'react-router-dom';


const SearchResults = (props) => {
    const navigate = useNavigate();

    const onClickBackBtn = () => {
        navigate(-2);
    }

    let func = () => {
        if (props.events[0] != -1){
            if(props.events.length === 0) return <h2><i className="fa-solid fa-angle-left btn" onClick={onClickBackBtn}/> No event found in {props.city}</h2>
            return (props.events.length && <div className='my-3 row w-100 justify-content-center'>
                <h2><i className="fa-solid fa-angle-left btn" onClick={onClickBackBtn} /> Events in {props.city}</h2>
                <hr/>
                {
                    props.events.map((event) => {
                        return <Event key={event._id} event={event} />
                    })
                }
            </div>)
        }
    }


    return (
        func()
    )
}

export default SearchResults