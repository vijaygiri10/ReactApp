import React from "react"
import FacbookLogo from "../image/Facebooklogo.png"
import Twitterlogo from "../image/twitterlogo.png"
import Instagramlogo from "../image/instagramlogo.png"

function Footer() {
   return(
    <div>
    <footer>
        <ul>
            <li><img src={FacbookLogo} alt="facbookLogo" /></li>
            <li><img src={Twitterlogo} alt="TwitterLogo" /></li>
            <li><img src={Instagramlogo} alt="InstaGramLogo" /></li>
        </ul>
    </footer>
    </div>
   ) 
}

export default Footer
