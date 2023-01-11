import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
  function createMarkup(c){
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  
    
  return (
    <div className={styles.blogs}>
      <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr/>
      <img src={blog && blog.icon} />
      <hr />
      {blog && <div className={styles.para} dangerouslySetInnerHTML={createMarkup(blog.content)} ></div>}
         
      
      </main>
    </div>
  )
}

export async function getStaticPaths(){
  let allb = await fs.promises.readdir('blogdata')
  allb = allb.map((item)=>{
    return  { params: { slug:item.split(".")[0]}}
  })
  console.log(allb)
  return{
    paths:allb,
    fallback: true
  };
}

export async function getStaticProps(context) {
  console.log(context)
     const {slug} = context.params;
     let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
     return{
      props: {myBlog: JSON.parse(myBlog)},
     }
}



// export async function getServerSideProps(context) {
//    const {slug} = context.query;
   
//    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//    let myBlog = await data.json()
//    return{
//      props: {myBlog},
//    }
//  }

export default Slug