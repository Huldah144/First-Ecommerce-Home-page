import React from 'react'
import Blogoil from '../../Assets/images/blogoil.png'
import Blogcream from '../../Assets/images/blogcream.png'
import Blogperf from '../../Assets/images/blogperf.png'
import '../../Assets/css/sectionsix.css'
import { Link } from 'react-router-dom'

const SectionSix = () => {
  return (
    <div className='sectn-6 bagd'>
        <h2 className='blog'>Blog</h2>
        <div className="row center">
            <Link to={`/blog/1`} className="blog-image overlap">
                <img src={Blogoil} alt="" className='blog-pic' />
                <h4 className='bloge title'>How To Create Your REssential Oil Diffuser Blends</h4> <hr />
                <p className='subtitle'>As you begin creating your own diffuser blends, its important to keep a few</p>
            </Link>
            <div className="blog-image overlap">
                <img src={Blogcream} alt="" className='blog-pic'/>
                <h4 className='bloge title'>7 Easy oil-Infused Mothers's Day Gift Ideas</h4> <hr />
                <p className='subtitle'>Celebrate the mom in your life with these simple handcrafted, heartful gifts</p>
            </div>
            <div className="blog-image overlap">
                <img src={Blogperf} alt="" className='blog-pic'/>
                <h4 className='bloge title'>Geranium Bourbon: Fresh, Floral, Sweet</h4> <hr />
                <p className='subtitle'>Fill your space with a fresh, uplifting aroma reminiscent of a greenhouse in full...</p>
            </div>
        </div>
        <button className='btn btn-see'>See all all</button>
      
    </div>
  )
}

export default SectionSix
