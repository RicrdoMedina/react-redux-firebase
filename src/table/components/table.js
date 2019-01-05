import React from 'react'
import './table.css'
import SearchContainer from '../../widgets/containers/search-container'
import Rows from './rows'

const Table = (props) => {
  const { data, search, isSearching} = props

  //flags
  let  noRecordsFound, updating = false

  if (data.length == 0 && search) {
    noRecordsFound = true
  }


  if (data.length == 0 && !search && isSearching) {
    updating = true
  }

  if (data.length == 0 && !search && !isSearching) {
    noRecordsFound = true
  }
  
  return (
    <div className="data-table">
      <h2>Datos registrados</h2>
      <SearchContainer/>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            noRecordsFound && <tr><td colSpan="3">No se encontraron registros.</td></tr>
          }
          {
            updating && <tr><td colSpan="3">Actualizando...</td></tr>
          }
          {
            data.map((item,key) => {
              return <Rows key={key} item={item}/>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
