import React from 'react'

const formatDate = (date) => {
    return date.toLocaleDateString()
}

const FormatDate = (props) => {
  return (
    <div>
      <h1>{formatDate(props.date)}</h1>
    </div>
  )
}

export default FormatDate
