import React from 'react';
import Person from '../Person/Person';
import propTypes from 'prop-types';
import './Cohort.css';

const Cohort = ({people, deleteMember}) => {
  let staffList = people.map(person => {
    return <Person id={person.id} key={person.id} name={person.name} quote={person.quote} superlative={person.superlative} photo={person.photo} deleteMember={deleteMember} />
  })
  
  return (
    <main className="Cohort-main">
      {staffList}
    </main>
  )
}

Cohort.propTypes = {
  people: propTypes.array.isRequired,
  deleteMember: propTypes.func.isRequired
}

export default Cohort;
