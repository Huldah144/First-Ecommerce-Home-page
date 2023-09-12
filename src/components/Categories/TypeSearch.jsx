import React from 'react'
import '../../Assets/css/typesearch.css'
import ButClose from './ButClose'


const TypeSearch = () => {
  return (
    <div className='container-search card'>
    {/* <div className="header"> */}
    <form className='form-group'>
      {/* <button className='btn-close'>X</button> */}
      <ButClose/>
        <label htmlFor="" className='form-control'>Search</label>
        <input type="text" placeholder='search' id='search' className='form-input'/>
        </form>
        <button className='btn-enter'>Enter</button>
    {/* </div> */}
    </div>
  )
}

export default TypeSearch

