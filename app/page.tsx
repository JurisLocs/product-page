import styles from './page.module.scss'
import Image from 'next/image';
import drone from "public/EC698A67-6AC5-49B3-94C1-C83F90F0968D.jpg";
import data from "./data.json";
import Timer from './timer';
import Incrementer from './incrementer';
import type { RootState } from './GlobalRedux/store';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, changeQuantity  } from './GlobalRedux/Features/counter/counterSlice';
import Counter from './GlobalRedux/Features/counter/counter';



async function getData(){
  const res = await fetch("https://fe-assignment.vaimo.net/", {
    cache: 'force-cache'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');    
  }
  return res.json();
}

export default function Home(){
// API is not working  
// const api = await getData();

return (
  <main>
  <div className={styles.main}>
  <div className={styles.container}>
    <Image src={drone} alt='placeholder' height={416} width={416} className={styles.image} />
  </div>
  <div className={styles.productContainer}>
    <div className={styles.badges}>
      <div className={styles.readyToShip}>Ready to ship</div>
      <div className={styles.inStock}><Image src='/icons8-ok.png' width={12} height={12} alt='placeholder'/> <div>&nbsp;In Stock</div></div>
      <div className={styles.fastDispatch}><Image src='/icons8-ok.png' width={12} height={12} alt='placeholder'/><div>&nbsp;Fast Dispatch</div> </div>
    </div>

    <div className={styles.box}>2021 hot selling GPS 5G quadcopter drone with camera remote control aircraft drone WiFi mini drone camera <div className={styles.hotSaleProducts}>Hot sale products</div></div>
    <div className={styles.ratingsBox}>
      <Image src='/icons8-star_filled.png' width={14} height={14} alt='placeholder'/>
      <Image src='/icons8-star_filled.png' width={14} height={14} alt='placeholder'/>
      <Image src='/icons8-star_filled.png' width={14} height={14} alt='placeholder'/>
      <Image src='/icons8-star_filled.png' width={14} height={14} alt='placeholder'/>
      <Image src='/icons8-star_filled.png' width={14} height={14} alt='placeholder'/>
      <div style={{ marginLeft: '4px', marginRight: '4px' }}>5.0</div>
      <div style={{ marginLeft: '4px', marginRight: '24px', color: '#999999' }}>7 Rewievs</div>
      <div style={{color:'black'}}>19 Buyers</div>
    </div>
    <hr></hr>
    <div className={styles.priceBox}>
      <div style={{display:'flex'}}>
        <div className={styles.price}>
            {data.product.options[0].price.currency.symbol}&nbsp;
            {Number(data.product.options[0].price.value).toFixed(2)}&nbsp;-&nbsp;
            {data.product.options[1].price.currency.symbol}&nbsp;
            {Number(data.product.options[1].price.value).toFixed(2)}
          </div>
          <div className={styles.options}>
            <div className={styles.gray}>/ Option</div>
            <div className={styles.line}> &nbsp;| </div>
            <div>&nbsp;{"2 Options"}&nbsp;</div>
            <div className={styles.gray}>(Min.Order)</div>
          </div>
      </div>
      <div className={styles.oldPrice}>
        {data.product.options[0].old_price.currency.symbol}&nbsp;
        {Number(data.product.options[0].old_price.value).toFixed(2)}&nbsp;-&nbsp;
        {data.product.options[1].old_price.currency.symbol}&nbsp;
        {Number(data.product.options[1].old_price.value).toFixed(2)}
    </div>
    </div>

    <hr></hr>
    <div className={styles.marchExpo}>
      <Image src='/logo.png' width={76} height={40} alt='placeholder'/>
      <div style={{marginLeft:'1.5rem'}}>• Free shipping (up to $40)</div>
      <div className={styles.onTime}>• On-time delivery guaranteed</div>
      <Image src='/icons8-forward.png' width={8} height={14} alt='placeholder' className={styles.arrow}/>
    </div> 

    <div className={styles.countdownTimer}>
      <div>20% OFF&nbsp;</div>
      <div className={styles.gray}>Discount ends in</div>
      <Image src='/icons8-clock.png' width={16} height={16} alt='placeholder' />
      <div className={styles.timer}><Timer/></div>
    </div>

    <div className={styles.products}>
      <div className={styles.gray}>Oprions:</div>
      <div style={{width:'100%'}}>
        <div className={styles.product}>
            <div className={styles.title}>1080P</div>
            <div style={{marginRight:'1.5rem'}}>
              {data.product.options[0].price.currency.symbol}&nbsp;
              {Number(data.product.options[0].price.value).toFixed(2)}
            </div>
            <Incrementer/>
        </div>
        <div className={styles.product}>
            <div className={styles.title}>4K</div>
            <div style={{marginRight:'1.5rem'}}>
              {data.product.options[0].price.currency.symbol}&nbsp;
              {Number(data.product.options[0].price.value).toFixed(2)}
            </div>
            <div><Incrementer/></div>
        </div>
        <div className={styles.product}>
            <div className={styles.title}>Battery (accessories)</div>
            <div style={{marginRight:'1.5rem'}}>
              {data.product.options[0].price.currency.symbol}&nbsp;
              {Number(data.product.options[0].price.value).toFixed(2)}
            </div>
            <div><Incrementer/></div>
            
        </div>
      </div>           
    </div>
    <div className={styles.tradeAssurance}>
      <Image src='/icon.svg' width={12} height={14} alt='placeholder' style={{marginRight:"5px"}}/>
      <div className={styles.bigText}>Trade Assurance</div>
      <div>&nbsp;protects your Alibaba.com orders</div>
    </div>
    <div className={styles.tradeAssurance}>
      <div>Payments:&nbsp;</div>
      <Image src='/icons8-visa.svg' width={17} height={12} alt='placeholder' style={{marginRight:"4px"}}/>
      <Image src='/icons8-mastercard.svg' width={17} height={12} alt='placeholder' style={{marginRight:"4px"}}/>
      <Image src='/icons8-apple_pay.svg' width={28} height={12} alt='placeholder' style={{marginRight:"4px"}}/>
    </div>
    <div className={styles.tradeAssurance}>
      <div style={{marginRight:"1.5rem"}}>Alibaba.com Logistics</div>
      <div>Inspection Solutions</div>
    </div>
  </div>

  <div className={styles.container}>
    <div className={styles.addToBox}>
      <div className={styles.gray}>
        <div>Ship to <u>{data.product.shipping.method.country}<br /> by {data.product.shipping.method.title}</u></div>
        <div className={styles.price}>
          {data.product.shipping.method.cost.currency.symbol}&nbsp;
          {Number(data.product.shipping.method.cost.value).toFixed(2)}          
        </div>
      </div>      
      <div className={styles.gray}>
        <div>Lead Time {data.product.shipping.lead_time.value}</div>
        <Image src='/icons8-info.png' width={14} height={14} alt='placeholder' style={{marginLeft:"12px"}}/>
      </div>
      <div className={styles.gray}>
        <div>Shipping time {data.product.shipping.method.shipping_time.value}</div>
        <Image src='/icons8-info.png' width={14} height={14} alt='placeholder' style={{marginLeft:"12px"}}/>
      </div>
      <div className={styles.buttons}>
      <button className={styles.loginToPurchase}>Login to Purchase</button>
      <button className={styles.contact}><Image src='/icons8-envelope.png' width={14} height={12} alt='placeholder' style={{marginRight:"12px"}}/>Contact the Supplier</button>
      </div>
    </div>
    
  </div>
  </div>
  </main>


  )
}