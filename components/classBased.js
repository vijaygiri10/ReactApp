import React from 'react'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      answer: 'vijgiriay'
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
      <h3>timeofday</h3>
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
            
          
    </div>
  )
}
export default ClassBasedApp
// ReactDOM.render(<ClassBasedApp />, document.getElementById('id'))
