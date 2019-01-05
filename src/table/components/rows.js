import React from 'react'
import convertTimestamp from '../../utils/libs'

const Rows = (props) => {
  const { email, name, timestamp } = props.item

  return (
    <tr>
      <td>{ convertTimestamp(timestamp)}</td>
      <td>{email}</td>
      <td>{name}</td>
    </tr>
  )
}

export default Rows
