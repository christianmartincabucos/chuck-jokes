import React from 'react'

const HeroBanner = () => {
  return (
    <>
      <section className="hero-image">
          <div className="hero-image-container">
              <div className="hero-text">
                  <h1 className="hero-title">The Joke Bible</h1>
                  <p className="hero-p">Daily Laughs for you and yours</p>
                  <input type="text" className="search" placeholder="How can we make laugh today?"/>
              </div>
                
          </div>
      </section>
    </>
  )
}

export default HeroBanner
