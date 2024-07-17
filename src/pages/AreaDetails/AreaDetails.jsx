import React, {useEffect, useState} from 'react'
import '../CategoryDetails/CategoryDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import areaBanner from '../../images/area-banner.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function AreaDetails() {

    const {areaName} = useParams()

    const [area, setArea] = useState([])

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
        .then(res=>{
          console.log(res.data.meals)
          setArea(res.data.meals)
        })
        .catch(err => console.log(err))
      }, [])

  return (
    <div>
      <div className="category-banner-container">
          <LazyLoadImage
            className='category-details-slide-background'
            effect="blur"
            src={areaBanner}
            width="100%"
            height="100%"
          />
          <div className='category-text-container'>
              <h1 className='category-text-header'>{areaName}</h1>
          </div>
      </div>
      <div className='category-details-items-text'>
        <h2>{areaName} Meals</h2>
      </div>
      <div className="category-details-items-container">
          {area?.map((item, index) =>
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

export default AreaDetails