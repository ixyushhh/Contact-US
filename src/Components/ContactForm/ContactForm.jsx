import { useState } from "react"
import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import {BiSolidMessage} from "react-icons/bi"
import {IoCall} from "react-icons/io5"  
import {TbMailFilled} from "react-icons/tb"

const ContactForm = () => {
  // const viaCallFeature = () => {
  //   console.log("Ongoing call")
  // }

  // To show it on the UI we are using Usestate hook.
  const [name, setname] = useState("Your name")
  // let email = "enter@gmail.com";
  // let text = "Enter the text";
  const [email, setemail] = useState("Your Email")
  const [text, settext] = useState("text")

  const onSubmit = (event) => {
    event.preventDefault();    // To prevent the default behaviour (reloading) of page after submitting.
    // console.log("text",event.target[0].value);
    // console.log("email", event.target[1].value);
    // console.log("text", event.target[2].value);

    // name = event.target[0].value;  // With this the change will not show on UI as it do not render
    setname(event.target[0].value);   // Now we'll be able to see the change on the UI / page.
    setemail(event.target[1].value);
    settext(event.target[2].value);
   // email = event.target[1].value;
   // text = event.target[2].value;
  }


  return (
    <section className={styles.container}>
        <div className={`${styles.contact_form}`}>
          <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessage font-size="24px"/>}/>
          <Button // onClick={viaCallFeature} 
          text="VIA CALL" icon={<IoCall fontSize="24px"/>}/>
          </div>
                      
          <Button
           isSecondary={true}
           text="VIA EMAIL" icon={<TbMailFilled fontSize="24px"/>}/>

          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Enter your name"/>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Enter your email"/>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea id="text" type="text" name="text" rows="6" placeholder="Enter text"/>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "end"
            }}>
            <Button
            text="SUBMIT"/>
            </div>

            <div>
              {name} <br/>
              {email} <br/>
              {text} <br/>
            </div>
          </form>
        </div>

        <div className={`${styles.contact_image}`}>
          <img src="/Images/Contact.svg"  alt="Contact Image" />
        </div>
    </section>
  )
}

export default ContactForm