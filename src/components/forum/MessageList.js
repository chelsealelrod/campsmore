import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import "./Message.css"
import { useHistory } from "react-router-dom"


export const MessageList = (props) => {
  
  const { getMessages, messages, deleteMessage } = useContext(MessageContext)
  const  history = useHistory()


  useEffect(() => {
    console.log("MessageList: useEffect - getMessages")
    getMessages()
  }, [])

  const handleDelete = () => {
    deleteMessage(props.message)
      .then(() => {
        history.push("/messages")
      })
  }

  return (
  
    <section className="messages">
        <button onClick={() => history.push("/forum/create")}>
                Add Message
            </button>
      {
        messages.map(message => {
          return (
            <div className="message" id={`message--${message.id}`}>
              { message.text }
              <button className="delete__button" onClick={handleDelete}>Delete</button>
            </div>
          )
        })
      }
  
    </section>
  )
}