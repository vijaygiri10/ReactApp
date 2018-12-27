import React from 'react'
import TodoItem from "./TodoList"
import todosData from "./todoListData"

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      answer: '12345678'
    }
  }

  render () {
    return (
      <div>
        <h1>Welcome to TommorowLand {this.state.answer} </h1>
      </div>
    )
  }
}

class Greeting extends React.Component {
  render () {
    const date = new Date()
    const hour = date.hour

    let timeofday

    timeofday = (hour < 12 ? 'moning' : 'evening')
    return (
      <h3>{timeofday}</h3>
    )
  }
}

class StateChange extends React.Component{
  constructor(){
    super()
    this.state = {
      count:0
    }
    this.HandleClick = this.HandleClick.bind(this)
    this.DoubleTheNumber =this.DoubleTheNumber.bind(this)
  }

  HandleClick() {
    this.setState(prevState => {
      return {
       count: prevState.count + 1
      }
    }
    )
  }

  DoubleTheNumber(){
    this.setState((prevState =>{

      return {
        count : prevState.count * 2
      }
    })
    )
  }

  HalftheChange(){
    this.setState((prevState =>{

      return {
        count : prevState.count / 2
      }
    })
    )
  }

  render(){
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.HandleClick}>Change!</button>
        <button onClick={this.DoubleTheNumber}>DoubleChange!</button>
        <button onClick={this.HalftheChange}>HalfChange!</button>
      </div>
    )
  }
}

class TodoItems extends React.Component {
  constructor(){
    super()
    this.state = {
      todo : todosData
    }
    this.HandleSelect = this.HandleSelect.bind(this)
  }
  
  HandleSelect(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todo.map(todo => {
          if (todo.id === id) {
              todo.completed = !todo.completed
          }
          return todo
      })
      return {
        todo: updatedTodos
      }
  })
  }

  render(){
    const todo = this.state.todo.map(item => <TodoItem key={item.id} 
      item={item} HandleSelect={this.HandleSelect} />)
    return(
      <div>
      {todo}
      </div>
    )
  }
}

function ClassBasedApp () {
  return (
    <div>
      <Header username='vijay' />
      <Greeting />

      <img onDoubleClick={
              function(){console.log("onDoubleClick")}} 
              onDrag={()=>{console.log("onDrag")}} 
              onDragEnter={()=>{console.log("onDragEnter")}}
              onDragExit={()=>{console.log("onDragExit")}}
              src="https://www.fillmurray.com/200/100"/>
             
              <br />
              <br />
            
      <StateChange />
      <TodoItems />
    </div>
  )
}
export default ClassBasedApp
// ReactDOM.render(<ClassBasedApp />, document.getElementById('id'))
