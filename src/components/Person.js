import React from 'react';
import './Person.css';

const Person = ({id, photo, name, quote, superlative, deleteMember}) => {
  return (
    <section className="section-person">
      <img className="section-img"src={photo} />
      <h3 className="section-h3" contentEditable="true" suppressContentEditableWarning={true}>{name}</h3>
      <h4 className="section-h4" contentEditable="true" suppressContentEditableWarning={true}>"{quote}"</h4>
      <h5 className="section-h5" contentEditable="true" suppressContentEditableWarning={true}>{superlative}</h5>
      <button className="Person-button" onClick={() => { deleteMember(id) }}>Delete</button>
    </section>
  )
}

export default Person;