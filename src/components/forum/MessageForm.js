import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Message.css"


export const MessageForm = () => {


  const { addMessage, newMessage, getMessages, editMessage, getUsersById} = useContext(MessageContext)
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});



  const [message, setMessage] = useState({
    userId: 1,
    text: "",
    timestamp: null,

  });

  const {messageId} = useParams();
  const history = useHistory();

  useEffect(() => {
    getMessages()
  }, [])

  const handleMessageInputChange = (event) => {

    const newMessage = { ...message }

    newMessage[event.target.id] = event.target.value

    setMessage(newMessage)
  }

  const handleSaveForm = (event) => {
    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
    setIsLoading(false)
    if (!message === 0 || !message === 0) {
      window.alert("")
    } else {
      const newMessage = {
        userId: message.userId,
        text: message.text,
        timestamp: Date.now()
        
      }

      addMessage(newMessage)
        .then(() => {
          history.push("/forum")
          setIsLoading(false)
        })
    }
  }


  return (
    <form className="message">
        <h1 className="message__title">Discussion Board</h1>
        
        <fieldset className="message__form">
      <h3 className="messageForm__title">Start a thread about anything related to camping</h3>
      <label htmlFor="text">
          <input type="text" id="text" required autoFocus className="form-control" Textarea
          placeholder="type message here" style= {{ minHeight:50}} value={message.text} 
          onChange={handleMessageInputChange} />
          </label>
      </fieldset>
      <button className="btn btn-primary" 
         disabled={isLoading}
         onClick={event => handleSaveForm(event)}>
       {messageId ?  <>Save Message</> : <>Add Message</>}
       </button>
      </form>

    
  
  )}