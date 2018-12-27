import React from 'react'

function TodoItem (prop) {
  return (
    <div className='todo-item'>
      <input type='checkbox'
      checked={prop.item.completed} 
      onChange={function(){prop.HandleSelect(prop.item.id)} }
      />
      <p>{prop.item.text}</p>
    </div>
  )
}

export default TodoItem
