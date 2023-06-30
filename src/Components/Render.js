import React from 'react'
import FormatDate from './FormatDate'
import Images from './Images'
import WebSite from './WebSite'

const Render = (props) => {

  return (
    <div>
      <h1>{props.userName}</h1>
      <h1>{props.userAge}</h1>
      {/* <a href={props.nav} >{props.site}</a> */}
      <WebSite site={props.site} ssylka={props.nav} />
      <Images img={props.userImage} />
      <FormatDate date={props.dateToday} />




    </div>
  )
}

export default Render



