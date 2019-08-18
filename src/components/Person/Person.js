import React from 'react';
import propTypes from 'prop-types';
import './Person.css';

const Person = ({id, photo, name, quote, superlative, deleteMember}) => {
  return (
    <section className="section-person">
      <img className="section-img" src={photo} alt={name}/>
      <h3 className="section-h3" contentEditable="true" suppressContentEditableWarning={true}>{name}</h3>
      <h4 className="section-h4" contentEditable="true" suppressContentEditableWarning={true}>"{quote}"</h4>
      <h5 className="section-h5" contentEditable="true" suppressContentEditableWarning={true}>{superlative}</h5>
      <button className="Person-button" onClick={() => { deleteMember(id) }}>Delete</button>
    </section>
  )
}

Person.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  quote: propTypes.string.isRequired,
  superlative: propTypes.string.isRequired,
  photo: propTypes.string.isRequired,
  deleteMember: propTypes.func.isRequired
}

export default Person;