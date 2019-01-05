import React from 'react';
import './home-layout.css';

const HomeLayout = (props) => {
  return (
    <section className={ props.formVisible ? "home-layout show-form": "home-layout" }>
      {props.children}
    </section>
  )
}

export default HomeLayout
