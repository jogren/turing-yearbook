import React from 'react';
import './Person.css';

const Person = ({id, photo, name, quote, superlative, deleteMember}) => {
  return (
    <section className="section-person">
      <img className="section-img"src={photo} />
      <h3 className="section-h3">{name}</h3>
      <h4 className="section-h4">"{quote}"</h4>
      <h5 className="section-h5">{superlative}</h5>
      <button onClick={() => { deleteMember(id) }}>Delete</button>
    </section>
  )
}

export default Person;