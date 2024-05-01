import React, {useEffect, useState} from 'react'
import './NameDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import firstLetterBanner from '../../images/first-letter-banner.png'

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
        <div className='category-details-container'>
            <div className="category-banner-container">
                <div style={{
                    width: '100%',
                    height: '90vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${firstLetterBanner})`,
                    filter: 'brightness(40%)',
                }}></div>
            <div className='category-text-container'>
              <h1 className='category-text-header'>Meals beginning with the letter "{firstLetter}"</h1>
          </div>
      </div>
      <div className='category-details-items-text'>
        <h2>Meals beginning with "{firstLetter}"</h2>
      </div>
      <div className="category-details-items-container">
          {beginningLetter.map((item, index) =>
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
    </div>
  )
}

export default NameDetails