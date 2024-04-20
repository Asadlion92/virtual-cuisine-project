import React from 'react'
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
import { Link } from 'react-router-dom'

function Recipes() {


  //MAYBE CREATE A COMPONENT FOR EACH RECIPE FILTER SO WHEN THE USER CLICKS THE BUTTON, IT WILL TAKE THEM TO THE COMPONENT

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
            <h1><Link to={`/category-details/${item.name}`}>{item.name}</Link></h1>
          </div>
        )}


      </div>



    </div>
  )
}

export default Recipes