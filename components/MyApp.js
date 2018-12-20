import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Maincontent from "./maincontent"
import TodoList from "./TodoList"
import Card from "./Contactcard"
import ContactCards from "./ContactCards"


const contact= {
    "name":"vijay",
    "url":"",
    "phone":1587528,
    "email":"vijaygiri10390@gmail.com"
}
function MyApp () {
    return (
      <div>
        <h1>Vijay Kumar Giri</h1>
        <Header />
        <Maincontent />
        <TodoList />
        <Card 
              name="vijay"
              imgUrl=""
              phone="768458589"
              email="vijaygiri10@gmail.com"/>
        <ContactCards contact />
        <Footer />
        </div>
    )
  }

export default MyApp
