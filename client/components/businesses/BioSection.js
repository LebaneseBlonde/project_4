import React, { useState, useEffect } from 'react'
import arrowLeft from '../../images/arrowLeft.png'
import arrowRight from '../../images/arrowRight.png'

export default function BioSection({business, loading}) {

  if (loading) {
    return <div>
      Loading
    </div>
  }

  const [currentImage, updateCurrentImage] = useState({})

  if (business.gallery) {
    useEffect(() => {
      updateCurrentImage({
        image: `${business.gallery[0].image}`,
        index: 0
      })
    }, [])
  }
  
  function imageLeft() {

    const images = business.gallery
    if (currentImage.image === business.gallery[0].image) {
      updateCurrentImage({
        image: `${business.gallery[business.gallery.length -1].image}`,
        index: business.gallery.length -1
      })
    } else {
      updateCurrentImage({
        image: `${business.gallery[currentImage.index - 1].image}`,
        index: currentImage.index - 1
      })
    }
  }
  
  function imageRight() {
  
    const images = business.gallery
    if (currentImage.image === business.gallery[business.gallery.length -1].image) {
      updateCurrentImage({
        image: `${business.gallery[0].image}`,
        index: 0
      })
    } else {
      updateCurrentImage({
        image: `${business.gallery[currentImage.index + 1].image}`,
        index: currentImage.index + 1
      })
    }
  }
  

  return <div id='businessInfo'>
    <section id='businessText'>
      <div className="container section">
        <h2 className='businessSectionTitle'><strong>About {business.name}</strong></h2>

        <article id='businessDescription'>
          <div id='contactInfo'>
            <p>{business.name}</p>
            <p>{business.email}</p>
            <p>{business.address_1}</p>
            <p>{business.address_2}</p>
            <p>{business.address_city}</p>
            <p>{business.address_postcode}</p>
            <p>Est. {business.established}</p>
          </div>
          <div id='businessBio'>
            <p>{business.bio}</p>
          </div>
        </article>
      </div>
    </section> 
    {business.gallery &&
    <section id='gallery'>
      <h2 className='businessSectionTitle'><strong>Gallery</strong></h2>
      <div id='galleryImageArea'>

        <img src={arrowLeft} 
             id='galleryButtonLeft'
             onClick={imageLeft}/>

        <div id='galleryImage' 
             style={{backgroundImage: `url(${currentImage.image})`}}></div>

        <img src={arrowRight} 
             id='galleryButtonRight'
             onClick={imageRight}/>
      </div>
    </section>}
  </div>
}

