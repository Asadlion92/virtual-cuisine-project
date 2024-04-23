import React, {useEffect, useState} from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Details() {

    const {mealId} = useParams()

    const [bannerImage, setBannerImage] = useState('')
    const [bannerTitle, setBannerTitle] = useState('')

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res=>{
        console.table(res.data.meals[0])
        setBannerImage(res.data.meals[0].strMealThumb)
        setBannerTitle(res.data.meals[0].strMeal)
        })
        .catch(err => console.log(err))
      }, [])

  return (
    <div className='details-container'>
        <div className="details-banner-container">
            <div style={{
                width: '100%',
                height: '90vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${bannerImage})`,
                filter: 'brightness(40%)',
            }}></div>
            <div className='recipes-text-container'>
            <h1 className='recipes-text-header'>{bannerTitle}</h1>
            </div>
        </div>
        <div className="ingredients-container">
            
        </div>
    </div>
  )
}

export default Details