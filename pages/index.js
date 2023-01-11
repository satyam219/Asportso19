import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Asportsomania</title>
        <meta name="description" content="Asportsomania is a place where we give content on Cricket, gadjet review, movie review and so on " />
        <meta name='keywords' content='blog, cricket, india, ipl, football, wwe, world cricket, asportsomania,asportso, movie, movie-review' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <div className={styles.imageWrap}>
          {/*<Image className={styles.myImg} src="/home.jpg" width={220} height={120}/> */}
          <img className={styles.myImg} src="/home.jpg" width={220} height={120} alt="light city" />
        </div>
        <p className={styles.description}>
          A blog by writer to know around us.
        </p>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How was the movie Circus?</h3>
            <p>The movie Circus was directed by Rohit shetty and Actors of this flim are Ranveer Singh</p>
            <button className={styles.btn}>Read more</button>
          </div>
          <div className={styles.blogItem}>
            <h3>How was the movie Circus?</h3>
            <p>The movie Circus was directed by Rohit shetty and Actors of this flim are Ranveer Singh</p>
            <button className={styles.btn}>Read more</button>
          </div>
          <div className={styles.blogItem}>
            <h3>How was the movie Circus?</h3>
            <p>The movie Circus was directed by Rohit shetty and Actors of this flim are Ranveer Singh</p>
            <button className={styles.btn}>Read more</button>
          </div>
        </div>
      </main>
    </>
  )
}
