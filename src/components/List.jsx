import React from 'react'
import Card from './Card'
import requests from '../Request';

const List = () => {
  return (
    <>
      <section className="jokes">
          <div className="legend">
            <button type="button" className="">SOCIAL JOKES</button>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Card rowId="1" tit="ADULT JOKES" fetchUrl={requests.requestAdult} />
            <Card rowId="2" tit="DAD JOKES" fetchUrl={requests.requestDad} />
            <Card rowId="3" tit="CHRISTMAS JOKES" fetchUrl={requests.requestChristmas} />
            <Card rowId="4" tit="JOBS JOKES" fetchUrl={requests.requestJobs} />
            <Card rowId="5" tit="BIRTHDAY JOKES" fetchUrl={requests.requestBirthday} />
            <Card rowId="6" tit="SOCIAL JOKES" fetchUrl={requests.requestSocial} />
            <Card rowId="7" tit="PUNS JOKES" fetchUrl={requests.requestPuns} />
            <Card rowId="8" tit="ALL JOKES" fetchUrl={requests.requestAll} />
            <Card rowId="8" tit="ALL JOKES" fetchUrl={requests.requestAll} />
          </div>
          
      </section>
    </>
  )
}

export default List