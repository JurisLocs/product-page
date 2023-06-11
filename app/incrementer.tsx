'use client';
import styles from './page.module.scss'
import Image from 'next/image';
import React, { useState } from 'react';

 
  const Incrementer = () => {
    const [quantity, setQuantity] = useState(0);
  
    const handleIncrement = () => {
      setQuantity((prevQuantity) => prevQuantity + 1); 
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
    const changeQuantity = (e:any) =>{
      setQuantity(parseInt(e.target.value, 10));
    }

  return (
    <div className={styles.incrementer}>      
        <button className={quantity===0 ? styles.disabledButton : styles.activeButton} onClick={handleDecrement}><Image src='/icons8-minus.png' width={14} height={2} style={{marginBottom:"3px"}} alt='placeholder'/></button>
        <input type="number" onChange={changeQuantity} value={quantity} className={quantity===0 ? styles.input : styles.inputActive}/>
        <button className={styles.right} onClick={handleIncrement}><Image src='/icons8-plus_math.png' width={14} height={14} style={{marginTop:"3px"}} alt='placeholder'/></button>
    </div>
  );
};

export default Incrementer;