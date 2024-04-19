import React, { useEffect, useState } from 'react'
import './Recipes.css'
import recipesBanner from '../../images/recipes-banner-idea3.png'
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

function Recipes() {

  //FOR THE CATEGORY SECTION, I CAN DISPLAY THE CATEGORY IMAGES AND STORE THE ASSOICATED API FOR EACH MEAL IN EACH IMAGE WHEN THE USER CLICKS ON THE NAME/IMAGE

  //MAYBE CREATE A COMPONENT FOR EACH RECIPE FILTER SO WHEN THE USER CLICKS THE BUTTON, IT WILL TAKE THEM TO THE COMPONENT

  const [categories, setCategories] = useState([])

  const newCategory = [
    {
      name: 'BEEF',
      image: beefImg
    },

    {
      name: 'CHICKEN',
      image: chickenImg
    },

    {
      name: 'DESSERT',
      image: dessertImg
    },

    {
      name: 'LAMB',
      image: lambImg
    },

    {
      name: 'MISCELLANEOUS',
      image: miscellaneousImg
    },

    {
      name: 'PASTA',
      image: pastaImg
    },

    {
      name: 'PORK',
      image: porkImg
    },

    {
      name: 'SEAFOOD',
      image: seafoodImg
    },

    {
      name: 'SIDES',
      image: sidesImg
    },

    {
      name: 'STARTER',
      image: starterImg
    },

    {
      name: 'VEGAN',
      image: veganImg
    },

    {
      name: 'VEGATARIAN',
      image: vegatarianImg
    },

    {
      name: 'BREAKFAST',
      image: breakfastImg
    },
    
    {
      name: 'GOAT',
      image: goatImg
    }

  ]


  //INSTEAD OF AN ARRAY, CREATE AN OBJECT WITH THE NAME AND THE IMAGE

  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(res=>{
      console.log(res.data.categories)
      setCategories(res.data.categories)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='recipes-container'>
      <div className="recipes-banner-container">
        <div style={{
            width: '100%',
            height: '50vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${recipesBanner})`,
            filter: 'brightness(40%)',
          }}></div>
        <div className='recipes-text-container'>
          <h1 className='recipes-text-header'>RECIPES</h1>
        </div>
      </div>
      <div className='recipes-title-banner'>Browse a recipe by:</div>
      <div className="filter-buttons-container">
        <button>Category</button>
        <button>Area</button>
        <button>Name</button>
      </div>
      <div className="category-filter-container">

        {/* {categories?.map((item, index)=>
          <div key={index} className='top-recipes-icons-container'>
            <div className='top-recipes-icon'>
                <div style={{
                    width: '300px',
                    height: '50vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${item.strCategoryThumb})`,
                    borderRadius: '40px',
                    filter: 'brightness(50%)'
                }}></div>
                <h1>{item.strCategory}</h1>
            </div>
          </div>
        )} */}

        {newCategory.map((item, index) =>
          <div key={index} className='recipes-category-icon'>
            <div style={{
                width: '300px',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${item.image})`,
                borderRadius: '40px',
                filter: 'brightness(50%)'
              }}>
            </div>
            <h1>{item.name}</h1>
          </div>
        )}


      </div>



    </div>
  )
}

export default Recipes