import React, {useEffect, useState} from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Details() {

    const {mealId} = useParams()

    const [image, setImage] = useState('')
    const [bannerTitle, setBannerTitle] = useState('')

    const [ingredient, setIngredient] = useState('')
    const [instructions, setInstructions] = useState('')

    const filterArray = (text) => {
        return text != "";
    }

    const ingredientItems = [
        ingredient.strIngredient1,
        ingredient.strIngredient2,
        ingredient.strIngredient3,
        ingredient.strIngredient4,
        ingredient.strIngredient5,
        ingredient.strIngredient6,
        ingredient.strIngredient7,
        ingredient.strIngredient8,
        ingredient.strIngredient9,
        ingredient.strIngredient10,
        ingredient.strIngredient11,
        ingredient.strIngredient12,
        ingredient.strIngredient13,
        ingredient.strIngredient14,
        ingredient.strIngredient15,
        ingredient.strIngredient16,
        ingredient.strIngredient17,
        ingredient.strIngredient18,
        ingredient.strIngredient19,
        ingredient.strIngredient20
    ]

    const newArray = ingredientItems.filter(filterArray)



    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res=>{
        console.log(res.data.meals[0])
        setIngredient(res.data.meals[0])
        setImage(res.data.meals[0].strMealThumb)
        setBannerTitle(res.data.meals[0].strMeal)
        setInstructions(res.data.meals[0].strInstructions)
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
                backgroundImage: `url(${image})`,
                filter: 'brightness(40%)',
            }}></div>
            <div className='details-text-container'>
            <h1 className='details-text-header'>{bannerTitle}</h1>
            </div>
        </div>
        <div className="ingredients-container">
            <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {newArray.map((item, index) =><li key={index}>{item}</li>)}
                </ul>
            </div>
            <img src={image} className='details-image' />
        </div>
        <div className='details-title-banner'>INSTRUCTIONS</div>
        <div className="instructions-container">
            {instructions}
        </div>
    </div>
  )
}

export default Details