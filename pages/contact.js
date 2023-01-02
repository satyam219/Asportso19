import React, {useState} from 'react'
import styles from '../styles/Contact.module.css'



const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name, email, phone, desc)

    const data = {name, email, phone, desc};

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', 
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data =>{
      console.log('Success:', data);
      alert("Thanks for your contacting us..!")
      setname('')
      setemail('')
      setphone('')
      setdesc('')
    })
    .catch((error)=>{
      console.error('Error:', error);
    })
  }  

  const handleChange = (e)=>{
    if(e.target.name == "name"){
      setname(e.target.value)
    }
   else if(e.target.name == "email"){
      setemail(e.target.value)
    }
   else if(e.target.name == "phone"){
      setphone(e.target.value)
    }
   else if(e.target.name == "desc"){
      setdesc(e.target.value)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
  <div className={styles.mb3}>
    <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
    <input className={styles.input} type="text" value={name} onChange={handleChange}  id="name" name="name" aria-describedby="emailHelp"/>
    </div>
  <div className={styles.mb3}>
    <label htmlFor="email" className={styles.formlabel}>Email address</label>
    <input className={styles.input} type="email" value={email} onChange={handleChange}  name="email" id="email" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className={styles.formtext}>We will never share your email with anyone else.</div>
  </div>
  <div className={styles.mb3}>
    <label htmlFor="phone" className={styles.formlabel}>Phone</label>
    <input className={styles.input} type="phone" value={phone} onChange={handleChange}  name="phone" id="phone" required/>
  </div>
  <div className={styles.mb3}>
     <label htmlFor="desc"className={styles.formlabel}>Let me Know your Comments</label>
  <textarea className={styles.formlabel} value={desc} onChange={handleChange}  placeholder="Leave a comment here"  name="desc" id="desc"/>
 
</div>
  <button type="submit" className={styles.btn}>Submit</button>
</form>
    </div>
  )
}

export default Contact