import React, { useState, createContext } from "react"

export const MessageContext = createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState ([])


    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
        .then(rest => rest.json())
        .then((data) => {
            setMessages(data)
            return data
        })
    }

    const addMessage = messageObj => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(getMessages)
    }

    const deleteMessage = messageId => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "DELETE"
        })
            .then(getMessages)
    }

    const editMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(message)
        })
          .then(getMessages)
      }
      

    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, deleteMessage, editMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}