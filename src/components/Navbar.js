import React, { Component } from 'react'
import './navbar.css'
import {navbar} from './vanillajs'
import favicon from './img/favicon.jpg'

 class Navbar extends Component {

       componentDidMount(){
           navbar();
       }

    render() {
        return (
            <div>
                <div className="nav0">
                    <img className="favicon"  src={favicon} alt=""/>
                     <nav class="nav">
                      <a href="#" class="nav-item is-active" active-color="orange" onClick={()=>document.getElementById("bbg").style.animation = "tble3 2s 1"} style={{}}>Home</a>
                      <a href="#SUBJECTS" class="nav-item" active-color="green" onClick={()=>document.getElementById("wrapper").style.animation = "tble2 3s 1"}>Subjects</a>
                      <a href="#PARTICIPANTS" class="nav-item" active-color="blue">Participants</a>
                     
                      <span class="nav-indicator"></span>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
