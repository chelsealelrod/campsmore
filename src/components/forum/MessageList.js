import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import "./Message.css"
import { useHistory } from "react-router-dom"


export const MessageList = () => {

  const { getMessages, messages, deleteMessage } = useContext(MessageContext)
  const history = useHistory()
  const [message, setMessage] = useState([])



  useEffect(() => {
    // const thisMessage = messages.find(m => m.id === parseInt(messageId)) || {messages: {}}
    // setMessage(thisMessage)
    getMessages()
  }, [])

  const handleDelete = (messageId) => {
    deleteMessage(messageId)
      .then(() => {
        history.push("/forum")
      })
  }


  return (

    <section className="messages">
      <button className="add__message"onClick={() => history.push("/forum/create")}>
        Add Message
      </button>
      {
        messages.map(message => {
          return (
            <div className="message" id={`message--${message.id}`}>
              {message.text}
              <br></br>
              <br></br>
              <br></br>
              <button className="edit__button" onClick={() => {
                history.push(`/forum/edit/${message.id}`)
              }}>Edit</button>
              <button className="delete__button" onClick={() => handleDelete(message.id)}>Delete</button>
            </div>
          )
        })
      }

    </section>
  )
}