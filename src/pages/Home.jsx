import React from 'react'
import Categories from '../components/Categories'
import HeroBanner from '../components/HeroBanner'
import List from '../components/List'

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <div className="container">
          <Categories/>
          <List/>
      </div>
    </>
  )
}

export default Home
