import React, {useEffect, useState} from 'react'
import './CategoryDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import beefImg from '../../images/beef.png'
import chickenImg from '../../images/chicken.png'
import dessertImg from '../../images/dessert.png'
import lambImg from '../../images/lamb.png'
import miscellaneousImg from '../../images/miscellaneous.png'
import pastaImg from '../../images/pasta.png'
import porkImg from '../../images/pork.png'
import seafoodImg from '../../images/seafood.png'
import sidesImg from '../../images/sides.png'
import starterImg from '../../images/starter.png'
import veganImg from '../../images/vegan.png'
import vegatarianImg from '../../images/vegatarian.png'
import breakfastImg from '../../images/breakfast.png'
import goatImg from '../../images/goat.png'

function CategoryDetails() {

    const {categoryName} = useParams()

    const [recipe, getRecipe] = useState('')

    const newCategory = [
        {
          name: 'Beef',
          image: beefImg
        },
    
        {
          name: 'Chicken',
          image: chickenImg
        },
    
        {
          name: 'Dessert',
          image: dessertImg
        },
    
        {
          name: 'Lamb',
          image: lambImg
        },
    
        {
          name: 'Miscellaneous',
          image: miscellaneousImg
        },
    
        {
          name: 'Pasta',
          image: pastaImg
        },
    
        {
          name: 'Pork',
          image: porkImg
        },
    
        {
          name: 'Seafood',
          image: seafoodImg
        },
    
        {
          name: 'Sides',
          image: sidesImg
        },
    
        {
          name: 'Starter',
          image: starterImg
        },
    
        {
          name: 'Vegan',
          image: veganImg
        },
    
        {
          name: 'Vegatarian',
          image: vegatarianImg
        },
    
        {
          name: 'Breakfast',
          image: breakfastImg
        },
        
        {
          name: 'Goat',
          image: goatImg
        }
    
      ]
    
    const testing = () => {

        let bannerImage = {}
        for (i = 0; i < newCategory.length; i++) {
            if (newCategory[i].name === categoryName) {
                bannerImage = newCategory[i].image
            }
            return bannerImage
          }
    }

    //   for (i = 0; i < newCategory.length; i++) {
    //     if (newCategory[i].name === categoryName) {
    //         return newCategory[i].image
    //     }
    //   }

    //HOW DO I GET THE IMAGES FROM MY NEW CATEGORY LIST TO DISPLAY TO EACH BANNER

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then(res=>{
          console.log(res.data.meals)
          getRecipe(res.data.meals)
        })
        .catch(err => console.log(err))
      }, [])

  return (
    <div className='category-details-container'>
        <div className="category-banner-container">
            <div style={{
                width: '100%',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url()`,
                filter: 'brightness(40%)',
            }}></div>
            <div className='category-text-container'>
                <h1 className='category-text-header'>{categoryName}</h1>
            </div>
        </div>
    </div>
  )
}

export default CategoryDetails