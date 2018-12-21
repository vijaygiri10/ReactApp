import React from 'react'

function ContactCards (props) {
  console.log(props)
  return (
    <div>
      <ul>
        <li>{props.contact.url}</li>
        <li>{props.contact.name}</li>
        <li>{props.contact.phone}</li>
        <li>{props.contact.email}</li>
      </ul>
    </div>
  )
}

export default ContactCards
