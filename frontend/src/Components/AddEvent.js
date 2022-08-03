import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import FormFieldSuggestions from './FormFieldSuggestions';
import { toast } from 'react-toastify';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
  //loggedIn state to decide to render add note form
  // const [loggedIn, setLoggedIn] = useState(false);

  //focus state to find which element is currently in focus
  const [focus, setFocus] = useState(null);

  //cityData state to find the city names based on user input
  const [cityData, setCityData] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if(localStorage.getItem('authToken') !== null){
  //     setLoggedIn({
  //       loggedIn: true
  //     });
  //   }
  //   console.log(loggedIn)

  //   return () => {
  //     if(loggedIn === false){
  //       navigate('/signup');
  //     }
  //   }
  // }, [])


  const onChange = async (eve) => {
    // setEvent({ ...event, [eve.target.name]: eve.target.value })
    let url = 'https://autocomplete-india.p.rapidapi.com/marketplace/autocomplete/india/cities/'
    const res = await fetch(url + eve.target.value, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_X_RapidAPI_Key}`,
        'X-RapidAPI-Host': 'autocomplete-india.p.rapidapi.com'
      }
    });
  }

  const onSubmit = () => {
    toast.success("Event Listed !", { autoClose: 1500 })
  }

  const onFocus = (eve) => {
    setFocus(eve.target);
  }

  const onBlur = () => {
    setFocus(null);
    setCityData([]);
  }

  return (
    <div>
      <Navbar />
      {localStorage.getItem('authToken') && <div className="add-event-page d-flex justify-content-end">
        <div className="w-40 add-event-form mx-4 my-4 bg-light">
          <form className="form-control p-4" method='POST' action="/api/events/addevent" onSubmit={onSubmit} encType='multipart/form-data' >
            <div className='form-control mr-2 mt-2 mb-4'>
              <label htmlFor="eventPoster" className='text-muted'>Upload event image/poster<br /> </label>
              <br />
              <br />
              <input type="file" name='eventPoster' />
            </div>
            <input type="text" className="form-control mr-2 my-2" placeholder="event title" name='title' />
            <textarea className='form-control mr-2 my-4' placeholder='event description' name='description' />
            <input type="text" className="form-control mr-2 my-2" placeholder="address (landmark/area/colony)" name='address' />
            <div className="row">
              <div className="col position-relative">
                <input type="text" className="form-control mr-2 my-2" placeholder="city" name='city' onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                <FormFieldSuggestions focus={focus} name={'city'} cityData={cityData} />
              </div>
              <div className="col position-relative">
                <input type="text" className="form-control mr-2 my-2" placeholder="state" name='state' onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                <FormFieldSuggestions focus={focus} name={'state'} cityData={cityData} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="PIN Code" name='PIN' />
              </div>
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="country" name='country' />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="number of days/ duration" name='days' />
              </div>
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="date of event" name='date' />
              </div>
              <button type="submit" className="btn btn-secondary custom-btn btn-block mt-4">Add</button>
            </div>
          </form>
        </div>
      </div>
      }
      {
        !localStorage.getItem('authToken') && <Signup/>
      }
      <Footer />
    </div>
  )
}

export default AddEvent