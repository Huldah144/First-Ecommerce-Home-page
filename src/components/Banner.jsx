import React from 'react'
import '../Assets/css/banner.css'
import banner from '../Assets/images/banner.png'

const Banner = () => {
    return (
        <div className='container pt-10'>
            <div className="d-flex">
                {/* left item */}
                <div className="content max-w-5 text-center md-text-center">
                    <span className="subtitle bg-primary">
                        NEW
                    </span>
                    <h1 className='title fs-40 py-2'>Pear <br/> Kiwi &amp; Mint</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore expedita deserunt laborum fugiat excepturi possimus adipisci soluta, maxime ad architecto minima quidem molestias! Sunt ratione fugit at illo provident?
                    </p>
                    <button className="btn btn-primary-theme">Show Now</button>
                </div>
                {/* right item */}
                <div className="max-w-7">
                    <div className="h-5">
                        <img src={banner} alt="" className="h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
