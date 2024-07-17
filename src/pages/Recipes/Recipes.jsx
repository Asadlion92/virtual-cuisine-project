import React, { useState, useEffect } from 'react'
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
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import sound from '../../assets/button-click.wav'

function Recipes() {

  const play = () => {
    new Audio(sound).play()
  }

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
      name: 'Side',
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

  const firstLetterList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'V', 'W', 'Y'
  ]

  const [categoryFilter, setCategoryFilter] = useState([])
  const [areaFilter, setAreaFilter] = useState([])
  const [nameFilter, setNameFilter] = useState([])

  const [toggleCategoryFilter, setToggleCategoryFilter] = useState(true)
  const [toggleAreaFilter, setToggleAreaFilter] = useState(false)
  const [toggleNameFilter, setToggleNameFilter] = useState(false)

  const [selectedCategoryBtn, setSelectedCategoryBtn] = useState(true)
  const [selectedAreaBtn, setSelectedAreaBtn] = useState(false)
  const [selectedNameBtn, setSelectedNameBtn] = useState(false)


  //When the page loads, this is displayed in the beginning

  useEffect(() => {
    setCategoryFilter(newCategory)
  }, [])


  const areaFilterButton = () => {
    setToggleCategoryFilter(false)
    setToggleAreaFilter(true)
    setToggleNameFilter(false)

    setSelectedCategoryBtn(false)
    setSelectedAreaBtn(true)
    setSelectedNameBtn(false)
    play()


    axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    .then(res=>{
      setAreaFilter(res.data.meals)
    })
    .catch(err => console.log(err))
  }

  const categoryFilterButton = () => {
    setToggleCategoryFilter(true)
    setToggleAreaFilter(false)
    setToggleNameFilter(false)
    
    setSelectedCategoryBtn(true)
    setSelectedAreaBtn(false)
    setSelectedNameBtn(false)
    play()
  }

  const nameFilterButton = () => {
    setNameFilter(firstLetterList)
    setToggleNameFilter(true)
    setToggleCategoryFilter(false)
    setToggleAreaFilter(false)

    setSelectedCategoryBtn(false)
    setSelectedAreaBtn(false)
    setSelectedNameBtn(true)
    play()
  }

  let toggleCategorySection = toggleCategoryFilter ? '' : ' deactive';
  let toggleAreaSection = toggleAreaFilter ? ' active' : '';
  let toggleNameSection = toggleNameFilter ? ' active' : '';

  let toggleCategoryBtn = selectedCategoryBtn ? '' : ' deactive'
  let toggleAreaBtn = selectedAreaBtn ? ' active' : ''
  let toggleNameBtn = selectedNameBtn ? ' active' : ''



  return (
    <div>
      <div className="recipes-banner-container">
        <LazyLoadImage
          className='recipes-slide-background'
          effect="blur"
          src={recipesBanner}
          width="100%"
          height="100%"
        />
        <div className='recipes-text-container'>
          <h1 className='recipes-text-header'>RECIPES</h1>
        </div>
      </div>
      <div className='recipes-title-banner'>Browse a recipe by:</div>
      <div className="filter-buttons-container">
        <button onClick={categoryFilterButton} className={`filter-btn-category${toggleCategoryBtn}`}>Category</button>
        <button onClick={areaFilterButton} className={`filter-btn${toggleAreaBtn}`}>Area</button>
        <button onClick={nameFilterButton} className={`filter-btn${toggleNameBtn}`}>Name</button>
      </div>
      <div className='filter-container'>

        <div className={`category-filter-container${toggleCategorySection}`}>
          {categoryFilter?.map((item, index) =>
            <div key={index} className="recipes-category-icon">
              <LazyLoadImage
                    className='recipes-category-icon-bkgd-pic'
                    effect="blur"
                    src={item.image}
                />
              <h1><Link to={`/category-details/${item.name}/${index}`} onClick={play}>{item.name}</Link></h1>
            </div>
          )}
        </div>

        <div className={`area-btn-container${toggleAreaSection}`}>
          {areaFilter?.map((item, index) => 
              <Link to={`/area-details/${item.strArea}`} onClick={play}><button className='area-btn' key={index}>{item.strArea}</button></Link>
            )}
        </div>

        <div className={`letter-filter-container${toggleNameSection}`}>
          {nameFilter?.map((item, index) =>
              <Link to={`/name-details/${item}`} onClick={play}><button className='name-btn' key={index}>{item}</button></Link>)}
        </div>
      </div>
    </div>
  )
}

export default Recipes