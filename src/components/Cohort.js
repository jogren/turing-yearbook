import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({people}) => {
  let staffList = people.map(person => {
    return <Person id={person.id} key={person.id} name={person.name} quote={person.quote} superlative={person.superlative} photo={person.photo} />
  })
  
  return (
    <main className="Cohort-main">
      {staffList}
    </main>
  )
}

export default Cohort;
