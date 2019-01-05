import React from 'react';
import './data-container-layout.css';

const DataContainerLayout = (props) => {
  return (
    <section className="data-container">
      {props.children}
    </section>
  )
}

export default DataContainerLayout
