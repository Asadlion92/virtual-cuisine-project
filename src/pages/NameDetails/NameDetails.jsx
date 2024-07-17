import React, {useEffect, useState} from 'react'
import '../CategoryDetails/CategoryDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import firstLetterBanner from '../../images/first-letter-banner.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function NameDetails() {

    const {firstLetter} = useParams()

    const [beginningLetter, setBeginningLetter] = useState([])

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
        .then(res=>{
          setBeginningLetter(res.data.meals)
        })
        .catch(err => console.log(err))
      }, [])

  return (
      <div>
        <div className="category-banner-container">
          <LazyLoadImage
            className='category-details-slide-background'
            effect="blur"
            src={firstLetterBanner}
            width="100%"
            height="100%"
          />
          <div className='category-text-container'>
            <h1 className='category-text-header'>Meals beginning with the letter "{firstLetter}"</h1>
          </div>
        </div>
        <div className='category-details-items-text'>
          <h2>Meals beginning with "{firstLetter}"</h2>
        </div>
        <div className="category-details-items-container">
            {beginningLetter?.map((item, index) =>
              <div key={index} className='category-details-icon'>
              <LazyLoadImage
                className='category-details-icon-slide-background'
                effect="blur"
                src={item.strMealThumb}
                width="100%"
                height="100%"
              />
              <h2><Link to={`/details/${item.idMeal}`}>{item.strMeal}</Link></h2>
            </div>
            )}
        </div>
      </div>
  )
}

export default NameDetails