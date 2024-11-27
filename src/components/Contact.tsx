import React from "react";
import { TbMailAi } from "react-icons/tb";
import { MdOutlineSettingsPhone } from "react-icons/md";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
        <div className="contact-grid md:grid-cols-2">
            <div className="contact-space">
                <h2 className="contact-heading" data-aos="zoom-in-up">Get in touch</h2>
                
                <p className="contact-text" data-aos="zoom-in-up">
                  Feel free to reach me for any query.</p>

                <div className="contact-flex" data-aos="zoom-in-up">
                <TbMailAi  size={30}/> sharmeensamad@yahoo.com
                </div>
                <div className="contact-flex" data-aos="zoom-in-up">
                <MdOutlineSettingsPhone  size={30}/> (+92) 21 000-0600
                </div>
            </div>

            <div className="contact-space">
              <div className="form" data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" className="input-field"
                id = "name"/>
              </div>
               <div className="form" data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" className="input-field"
                id = "email"/>
              </div>
              <div className="form" data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea  className="textarea-field" id = "msg" rows={8}></textarea>
              </div>

              <button className="button" data-aos="zoom-in-up">
              Send
              </button>
              
              </div>
             </div>
           </div>
           );
          };
      
 
  

export default Contact;
