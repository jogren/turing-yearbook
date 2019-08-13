import React from 'react';
import './Person.css';

const Person = props => {
  return (
    <section className="section-person">
      <img className="section-img"src={props.photo} />
      <h3 className="section-h3">{props.name}</h3>
      <h4 className="section-h4">"{props.quote}"</h4>
      <h5 className="section-h5">{props.superlative}</h5>
      <button >Delete</button>
    </section>
  )
}

export default Person;


// onClick = {() => { deleteIdea(idea.id) }}