'use client';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, changeQuantity } from './counterSlice';
import styles from 'app/page.module.scss'
import { useState } from 'react';
import Image from 'next/image';

const Counter = () => {
    const count = useSelector((state:any) => state.counter.value);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0);
       

    return (
        <div className={styles.incrementer}>      
            <button className={quantity===0 ? styles.disabledButton : styles.activeButton} onClick={()=> dispatch(decrement())}> <Image src='/icons8-minus.png' width={14} height={2} style={{marginBottom:"3px"}} alt='placeholder'/></button>
            <input 
            type="number" 
            value={count} 
            onChange={(e) => dispatch(changeQuantity(e))} 
            className={quantity===0 ? styles.input : styles.inputActive}/>
            <button className={styles.right} onClick={()=> dispatch(increment())}><Image src='/icons8-plus_math.png' width={14} height={14} style={{marginTop:"3px"}} alt='placeholder'/></button>
        </div>        
    )
}

export default Counter