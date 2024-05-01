import React, {useEffect, useState} from 'react'
import './AreaDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import areaBanner from '../../images/area-banner.png'

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
    <div className='category-details-container'>
      <div className="category-banner-container">
          <div style={{
              width: '100%',
              height: '90vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${areaBanner})`,
              filter: 'brightness(40%)',
          }}></div>
          <div className='category-text-container'>
              <h1 className='category-text-header'>{areaName}</h1>
          </div>
      </div>
      <div className='category-details-items-text'>
        <h2>{areaName} Meals</h2>
      </div>
      <div className="category-details-items-container">
          {area.map((item, index) =>
            <div key={index} className='category-details-icon'>
            <div style={{
                width: '300px',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${item.strMealThumb})`,
                borderRadius: '40px',
                filter: 'brightness(50%)'
              }}>
            </div>
            <h2><Link to={`/details/${item.idMeal}`}>{item.strMeal}</Link></h2>
          </div>
          )}
      </div>
    </div>
  )
}

export default AreaDetails