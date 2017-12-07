import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css'


function PointRow({values, roundId}) {

  function getColor(columnId) {
    if (columnId == roundId) {
      return 'red'
    }
    else {
      return 'black' 
    }
  }

  return (
    <tr>
      { values.map((value, i) => <td style={{color: getColor(i)}}>{value}</td>)} 
    </tr>
  )
}

export default PointRow
