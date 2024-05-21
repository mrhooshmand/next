'use client';
import React from 'react'
import styles from './card.module.css'

const AddToCard = () => {
  return (
    <div className={styles.card}>
        <button className='btn btn-primary mt-5 font-bold hover:font-extrabold' onClick={()=>console.log(1)}>Click Me!</button>
    </div>
  )
}

export default AddToCard