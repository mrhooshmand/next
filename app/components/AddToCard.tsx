'use client';
import React from 'react'
import styles from './card.module.css'

const AddToCard = () => {
  return (
    <div className={styles.card}>
        <button className='btn btn-primary my-5 font-bold hover:font-extrabold' onClick={()=>console.log(1)}>Click Me to log!</button>
    </div>
  )
}

export default AddToCard