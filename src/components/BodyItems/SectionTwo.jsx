import React from 'react'
import Vase from '../../Assets/images/vase.png'
import '../../Assets/css/sectiontwo.css'

const SectionTwo = () => {
  return (
    <div className='sectn-2'>
        <div className="row">
            <div className="col-4">
                <img src={Vase} alt="" />
            </div>
            <div className="col-6">
                <h2 className='improve'>
                Improve your well-being with Aromatherapy 
                </h2>
                <p className='diffuse'>
                    Diffusing can be exactly what you need to add focus and purpose to your daily tasks. We've got tons of fun diffuser blends, with scents to suits every mood, day and situeation.
                </p>
            </div>
        </div>
        <button className='btn btn-explore'>Explore the collection</button>
      
    </div>
  )
}

export default SectionTwo
