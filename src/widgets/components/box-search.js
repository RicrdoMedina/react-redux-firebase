import React from 'React'
import './search.css'

function BoxSearch (props) {
  return (
    <form
      className="search"
      onSubmit={props.handleSubmit}
    >
      <input
        ref={props.setRef}
        type="text"
        className="search-input"
        placeholder = "Buscar"
        name="search"
        onChange={props.handleChange}
        value={props.value}
        autoComplete="off"
      />
    </form>
  )
}

export default BoxSearch
