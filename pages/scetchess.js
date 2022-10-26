import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/scetchess.module.css'  // СТИЛИ


export default function Home() {
  // JS-часть

  return (
    // JSX-часть
    <>
      <div style={{margin: "50px"}}>
        <a href="https://editor.p5js.org/rembbole/sketches/uaCTwXWvZ">
          <img 
            className={styles.img} // СТИЛИ
             src="/a312b678P5jS.png" width={200} 
             />
        </a>
      </div>
    </>
  )
}
