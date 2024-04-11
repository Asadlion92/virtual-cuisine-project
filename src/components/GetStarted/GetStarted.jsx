import React from 'react'
import './GetStarted.css'
import getStarted from '../../images/call-to-action-icon.png'
import sound from '../../assets/button-click.wav'

function GetStarted() {

    const play = () => {
        new Audio(sound).play()
    }

  return (
    <div className='get-started-container'>
        <div style={{
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${getStarted})`,
        filter: 'brightness(40%)',
      }}></div>
        <div className='get-started-text-container'>
            <h1 className='get-started-text-header'>Get Cooking Today</h1>
            <p className='get-started-text'>Ready to embark on your culinary journey? Join Virtual Cuisine today and unlock a world of delicious possibilities right in your own kitchen. Whether you're looking to impress your loved ones with a gourmet feast or simply eager to expand your culinary repertoire, we're here to help you achieve your cooking goals with confidence and flair.</p>
            <button 
            className='get-started-btn'
            onClick={play}
            >Get Started</button>
        </div>
    </div>
  )
}

export default GetStarted