import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,job,text,image} = people[index];

//check
const checkNumber = (number) => {
if (number > people.length - 1) {
  return 0
}
if (number < 0) {
  return people.length - 1
}
return number
}
//next
const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1
    return  ;
  })
}
//prev
const prevPerson = () => {
  setIndex((index) => {
  let newIndex = index - 1
return checkNumber(newIndex)
})
}
//random 
const random = () => {
  let random = Math.floor(Math.random()*people.length);
  if (random === index) {
    random = index + 1;
  }
  setIndex(checkNumber(random))
}

  return <article className='review'>
<div className="img-container">
  <img src={image} alt={name} className='person-img'/>
  <span className="quote-icon">
    <FaQuoteRight/>
  </span>
</div>
<h4 className='author'>
  {name}
</h4>
<p className='job'>{name}</p>
<p className="info">{text}</p>
<div className="button-container">
  <button className='prev-btn' onClick={nextPerson}>
    <FaChevronLeft/>
  </button>
  <button className='next-btn' onClick={prevPerson}>
    <FaChevronRight/>
  </button>
 
</div>
<button className='random-btn' onClick={random}>
    Suprise me
  </button>
  </article>;
};

export default Review;
