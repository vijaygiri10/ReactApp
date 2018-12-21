import React from 'react'
import TodoItem from './TodoList'
import todosData from './todoListData'

function MyApp () {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

  return (
    <div >
      {todoItems}
    </div>
  )
}

export default MyApp
/*
  const ProductComponent = Products.map(function (product) {
    return (
      <div>
        <h2>Product : {product.name}</h2>
        <h3>description :{product.description}</h3>
        <p>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} - {product.description}</p>
      </div>
    )
  })
    <Joke
        question='what is joke'
        answer='this is answer'

      />
      <Joke />
      {jokeComponent}
      {ProductComponent}
      {ToDoListComponent}
      <Card
        name='vijay'
        imgUrl=''
        phone='768458589'
        email='vijaygiri10@gmail.com' />
*/
