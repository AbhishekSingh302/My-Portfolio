import "./FormStyles.css";
import React, { useState } from 'react'

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) =>{
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <label>Subject</label>
        <input type="text" value={subject} onChange={(e)=> setSubject(e.target.value)}></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" value={message} onChange={(e)=> setMessage(e.target.value)} />
        <button className="btn" type="submit" onClick={submit}>Submit</button>
      </form>
    </div>
  )
}

export default Form
