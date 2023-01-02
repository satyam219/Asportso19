import React from 'react'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'
import styles from '../styles/Nav.module.css'

const Navbar = () => {
  return ( 
    <>
        <nav className={styles.mainNav1}>
          
    <ul className={styles.lin}>
       <Link href='/'><li>Home</li></Link>
       <Link href='/blog'><li>Blog</li></Link>
       <Link href='/about'><li>About</li></Link>
       <Link href='/contact'><li>contact</li></Link>
    </ul>
  </nav>
  <h1 className={styles.title}>
          <span className='mySpan'>Asportsomania</span>
        </h1>
        <img className ={styles.image} src="soccer.png" alt="" />
        <img className={styles.image1} src="humburg.png" alt="" />
  </>
  )
}

export default Navbar