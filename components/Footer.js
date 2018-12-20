import React from "react"
import FacbookLogo from "../image/Facebooklogo.png"
import Twitterlogo from "../image/twitterlogo.png"
import Instagramlogo from "../image/instagramlogo.png"


const style = {
    color: "FF0000",
    width:20,
}
function Footer() {
   return(
    <div>
    <footer>
    <h1>Footer</h1>
        <ul>
            <li><img src={FacbookLogo} alt="facbookLogo" style={style}/></li>
            <li><img src={Twitterlogo} alt="TwitterLogo" style={style} /></li>
            <li><img src={Instagramlogo} alt="InstaGramLogo" style={style} /></li>
        </ul>
    </footer>
    </div>
   ) 
}

export default Footer
