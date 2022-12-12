import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
      <div className="card" style={{ width: '21rem'}}>
            <h3 className="card-title"><i className="icon-lightning"></i> LAWYER JOKE</h3>
            <p>A lawyer dies and goes to Heaven. "There must be some mistake," the lawyer argues.</p>
            <div className="card-footer">
                <h4>
                <Link>
                    <span>SEE STATS</span> 
                    <i className="icon-arrow-right"></i> 
                </Link>
                </h4>
            </div>
        </div>
    </>
  )
}

export default Card
