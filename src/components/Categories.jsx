import React from 'react'

const Categories = () => {
  return (
    <>
        <section>
            <div className="joke-category">
                <button 
                    className="white-two button-red" 
                    style={{width: '16.4rem'}}
                    >
                    ADULT JOKES
                </button>
                <button 
                    className="white-two button-pastel-orange" 
                    style={{width: '16.4rem'}}
                    >
                    DAD JOKES
                </button>
                <button 
                    className="white-two button-pale-orange" 
                    style={{width: '16.4rem'}}
                    >
                    CHRISTMAS JOKES
                </button>
                <button 
                    className="white-two button-light-gold" 
                    style={{width: '16.4rem'}}
                    >
                    JOBS JOKES
                </button>
                <button 
                    className="white-two button-kiwi-green" 
                    style={{width: '16.4rem'}}
                    >
                    BIRTHDAY JOKES
                </button>
                <button 
                    className="white-two button-weird-green" 
                    style={{width: '16.4rem'}}
                    >
                    SOCIAL JOKES
                </button>
                <button 
                    className="white-two button-sky-blue" 
                    style={{width: '16.4rem'}}
                    >
                    PUNS JOKES
                </button>
                <button 
                    className="border-light-brown button-white light-brown " 
                    style={{width: '16.4rem'}}
                    >
                    VIEW ALL
                    <i className="icon-arrow-down"></i></button>
            </div>
        </section>
    </>
  )
}

export default Categories