import React from 'react';

const FormFieldSuggestions = (props) => {

  const onClickHandler = (eve) => {
    let data = eve.target.innerText;
    let dataArr = data.split(', ', 2);
    props.focus.value = dataArr[0];
    document.getElementsByName('state')[0].value = dataArr[1];
  }

  return (
    <div className={`form-field-suggestions w-100 bg-light ${props.focus === document.getElementsByName(props.name)[0] ? '' : 'd-none'}`}>
      {
        props.cityData && Object.keys(props.cityData).map((key) => {
          return (
            <li className='list-item p-1' onMouseDown={onClickHandler}>{props.cityData[key]}</li>
          )
        })
      }
    </div>
  )
}

export default FormFieldSuggestions