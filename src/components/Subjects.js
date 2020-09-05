import React, { Component } from 'react'
import './subjects.css'
import kgp from './img/KGP.jfif'
import bg1 from './img/bulb.png'
import {scrollFunction} from './vanillajs'
import Participants1 from './Participants1'
import Participants2 from './Participants2'
import Participants3 from './Participants3'
import Participants4 from './Participants4'
import Participants5 from './Participants5'
import Participants6 from './Participants6'
import Popup from 'react-popup';
import { useAlert } from 'react-alert'
//import './participants.css'
import SweetAlert from 'react-bootstrap-sweetalert';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';




 class Subjects extends Component {
         
    componentDidMount() {
        scrollFunction();  
    }
    
    state={
        visible:"0",
        
    }
    


    constructor(props) {
        super(props);
    
        this.state = {
          alert: null
        };
      } 
    
      deleteThisGoal() {
        const getAlert = () => (
          <SweetAlert 
            success 
            
    
            title="Confirmation!" 
            onConfirm={() => this.hideAlert()}
          >
           All Participants from the course {this.sub} are added Successfully
          </SweetAlert>
        );
    
        this.setState({
          alert: getAlert()
        });
      }
    
      hideAlert() {
        console.log('Hiding alert...');
        this.setState({
          alert: null
        });
      }


    render() {
        const Subjects = () => {
            const alert = useAlert()};
        let mySpecialPopup = Popup.register({
            title: 'I am special',
            content: 'Since I am special you might need me again later. Save me!',
            buttons: {
                left: ['cancel'],
                right: ['ok']
            }
        });
        let list="";
        let sub="PLEASE SELECT THE COURSE!";
        let c1=1;
        let list1=<React.Fragment>
        <Participants1 name="Sukriti Sharma" gen="female" rollno="16CS30021"/>
        <Participants1 name="Ganesh Dani" gen="female"rollno="16CS30043"/>
        <Participants1 name="Amrita Palla"gen="male" rollno="16CS30025"/>
        <Participants1 name="Hira Keer"gen="female" rollno="16CS30018"/>
        <Participants1 name="Richa Wable"gen="male" rollno="16CS30022"/>
         <Participants1 name="Nishi Naidu"gen="male" rollno="16CS30011"   />
        
     </React.Fragment>;
  
        let list2=<React.Fragment>
        <Participants2 name="Anees Chahal" gen="male" rollno="17CS10021"/>
        <Participants2 name="Amrita Hegde" gen="female"rollno="17CS10024"/>
        <Participants2 name="Chinmay Naidu" gen="male"rollno="17CS10018"/>
        <Participants2 name="Urmi Sandal" gen="male"rollno="17CS10032"/>
        <Participants2 name="Rajesh Dev Mody" gen="female"rollno="17CS10011"/>
         <Participants2 name="Giaan Raj Mohabir" gen="male"rollno="17CS10033"   />
        
     </React.Fragment>;

        let list3= <React.Fragment>
        <Participants3 name="Manjari Tarun Sharma" gen="female" rollno="18CS1001"/>
        <Participants3 name="Drishti Usman"gen="male" rollno="18CS10003"/>
        <Participants3 name="Binoyya Din" gen="male"rollno="18CS10029"/>
        <Participants3 name="Mini Ibrahim Tiwari" gen="female"rollno="18CS10037"/>
        <Participants3 name="Radhe Mand"gen="male" rollno="18CS10041"/>
         <Participants3 name="Jatin Verma"gen="male" rollno="18CS10038"   />
        
     </React.Fragment>;

        let list4=
        <React.Fragment>
        <Participants4 name="Hemendra Lal Samuel" gen="male" rollno="18CS10021"/>
        <Participants4 name="Bhola Yadu Nangat"gen="male" rollno="18CS10019"/>
        <Participants4 name="Harpreet Raj Sethi" gen="female"rollno="18CS10031"/>
        <Participants4 name="Sona Deep Brar"gen="female"rollno="18CS10034"/>
        <Participants4 name="Shanti Prabhu"gen="male" rollno="18CS10005"/>
         <Participants4 name="Mahmood Chandra Krishna" gen="male"rollno="18CS10003"   />
         
     </React.Fragment>;

        let list5= <React.Fragment>
        <Participants5 name="Chandradeep Kade" gen="female" rollno="19CS10021"/>
        <Participants5 name="Surabh Surana"gen="female" rollno="19CS10013"/>
        <Participants5 name="Upasana Mody"gen="male" rollno="19CS10041"/>
        <Participants5 name="Sid Dad"gen="male" rollno="19CS10019"/>
        <Participants5 name="Sahil Chandra Dugar" gen="female"rollno="19CS10044"/>
         <Participants5 name="Kamlesh Mohanlal Thomas"gen="male" rollno="19CS10013"   />
         
     </React.Fragment>;

        let list6=<React.Fragment>
        <Participants6 name="Nikita Aayushman Rau" gen="male" rollno="20AE10021"/>
        <Participants6 name="Koushtubh Gera" gen="male" rollno="20AG10013"/>
        <Participants6 name="Kiran Tabeed Magar"gen="female" rollno="20BT10041"/>
        <Participants6 name="Faraz Kumar Kannan"gen="male" rollno="20CS10028"/>
        <Participants6 name="Avantika Minhas" gen="female"rollno="20EE30048"/>
         <Participants6 name="Pravin Ran Ratti"gen="male" rollno="20NA10032"   />
     </React.Fragment>;

       
        if(this.state.visible==="1"){
            sub="CS60041";
            
            list= list1;
            c1+=1;
            }
            else if(this.state.visible==="2"){
                sub="CS41001"
                list= list2;c1+=1;
                
                }
                else if(this.state.visible==="3"){
                    sub="CS31005"
                    list= list3;c1+=1;
                   
                    }
                    else if(this.state.visible==="4"){
                        sub="CS31007"
                        list= list4;c1+=1;
                        
                        }
                        else if(this.state.visible==="5"){
                            sub="CS21001"
                            list= list5;c1+=1;
                           
                            }
                             else if(this.state.visible==="6"){
                                 sub="CS19001"
                                list= list6;c1+=1;
                                
                                }
                                    else{
                                        sub=<div>PLEASE SELECT THE COURSE!</div>;
                                    }
        

        return (
            <div class="sbj"  id="SUBJECTS" data-text="Subjects">
               <img src={bg1} id="bgg1" alt=""></img>
                 <div  style={{color:'white',zIndex:4,top:'9vh'}}> <br/> <br/> <br/> <h1><big><big style={{textShadow:'1px 1px 2px black, 0 0 1em lightgreen, 0 0 0.2em green'}}>SUBJECTS</big></big></h1>
                 <br/>
               <div class="wrapper" id="wrapper">
                   
        <div class="card">
            <input type="checkbox" id="card1" class="more" aria-hidden="true"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url( https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSivEwZbRYkPV69JHWy6ZnGYLMAyLV-a1Jhl1_VolD-LV3iSxeZ&usqp=CAU)'}}>
                    <div class="inner">
                        <h2>CS60041:<br/> CRYPTOGRAPHY & NETWORK SECURITY</h2>
                        
                        <label for="card1" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                        <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>3</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>9</span>
                           
                        </div>
                       
                        <div class="description">
                            <h4>Network Security & Cryptography </h4>
                            <p>Network Security & Cryptography is a concept to protect network and data transmission over wireless network. A network security system typically relies on layers of protection and consists of multiple components including networking monitoring and security software in addition to hardware and appliances.</p>
                        </div>
                        <div class="location">PROF. SOURAV MUKHOPADHYAY</div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card1" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        
                        <label for="card1" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~debdeep/courses_iitkgp/Crypto/index.htm" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card1" class="button b" aria-hidden="true">
                        <label for="card1" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"1"});document.getElementById("table").style.animation = "tble 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>  </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card2" class="more"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz-7aR755Q3MbjXfPf0593HGsvFM_ZDslUJPtxZ8jDsvBPVGRt&usqp=CAU)'}}>
                    <div class="inner">
                        <h2> CS41001: <br/> Theory of Computation</h2>
                       
                        <label for="card2" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>7</span>
                           
                        </div>
                        <div class="description">
                            <h4>Theory of Computation</h4>
                            <p>
                            In theoretical computer science and mathematics, the theory of computation is the branch that deals with how efficiently problems can be solved on a model of computation, using an algorithm. The field is divided into three major branches: automata theory and formal languages, computability theory, and computational complexity theory, which are linked by the question: "What are the fundamental capabilities and limitations of computers?".</p>
                            
                        </div>
                        <div class="location">Prof. Somindu Chaya Ramanna</div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card2" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        <label for="card2" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~somindu/toc-2019/toc.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card2" class="button b" aria-hidden="true">
                        <label for="card2" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"2"});document.getElementById("table").style.animation = "tble2 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>
                        </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card3" class="more"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://www.adweek.com/wp-content/uploads/2018/07/marketer-algorithm-content-2018.png)'}}>
                    <div class="inner">
                        <h2>CS31005<br/> Algorithms II</h2>                      
                        <label for="card3" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>5</span>
                           
                        </div>
                        <div class="description">
                            <h4>Algorithm</h4>
                            <p>An algorithm is a well-defined procedure that allows a computer to solve a problem. Another way to describe an algorithm is a sequence of unambiguous instructions.</p>
                        </div>
                        <div class="location">Prof. Piyush Kanti Bhunre</div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card3" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        <label for="card3" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~spp/algos2aut2015.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card3" class="button b" aria-hidden="true">
                        <label for="card3" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"3"});document.getElementById("table").style.animation = "tble3 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>
                        </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card4" class="more" aria-hidden="true"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0nwzSkoLQveI0l6iXVCaaY4n_dbtZ9BtReVe5ncscET6ocx3x&usqp=CAU)'}}>
                    <div class="inner">
                        <h2>CS31007:<br/> Computer Organization and Architecture</h2>
                        
                        <label for="card4" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>6</span>
                           
                        </div>
                        <div class="description">
                            <h4>Computer Organization and Architecture</h4>
                            <p>Computer Organization and Architecture is the study of internal working, structuring and implementation of a computer system. Architecture in computer system, same as anywhere else, refers to the externally visual attributes of the system.</p>
                        </div>
                        <div class="location">Prof. K.Sreenivasa Rao</div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card4" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        <label for="card4" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~debdeep/courses_iitkgp/COA2011/index.htm" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card4" class="button b" aria-hidden="true">
                        <label for="card4" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"4"});document.getElementById("table").style.animation = "tble4 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>
                        </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card5" class="more"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://d3i71xaburhd42.cloudfront.net/568b92d2b71f3e9314e54707c8318a525ffebbd9/3-Figure2-1.png)'}}>
                    <div class="inner">
                        <h2>CS21001: <br/>Discrete Structures</h2>
                       
                        <label for="card5" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="description">
                        <h4>Discrete Structures</h4>

                            <p>
                            Discrete structures is study of mathematical structures that are fundamentally discrete (that is not continuous). This is usually the first mathematics course for computer science students; it helps them to start thinking about problems in a way computers can solve. Computers always deals with discrete objects and perform in discrete steps. Knowledge of discrete structures helps in analyzing algorithms, and understanding different areas of computer science like programming languages and cryptography.</p>
                        </div>
                        <div class="location">Prof. Abhijit Das</div>
                        <div class="price"><img src={kgp} alt="" style={{width:"70px"}}></img></div>
                        <label for="card5" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        <label for="card5" class="button a" aria-hidden="true">
                        <small><a href="http://cse.iitkgp.ac.in/~abhij/course/theory/DS/Autumn19/" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card5" class="button b" aria-hidden="true">
                        <label for="card5" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"5"});document.getElementById("table").style.animation = "tble5 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button></label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card6" class="more"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxJeA8V4-ln3ytQjgFr_TkY3S6TezJiuy1MumhvH6AnmD9-dQ7&usqp=CAU)'}}>
                    <div class="inner">
                        <h2>CS19001: <br/>Programming & data structures Laboratory</h2>
                        
                        <label for="card6" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>3</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">                               
                                <span>Semester</span>
                        </div>
                            <span>2</span>
                           
                        </div>
                        <div class="description">
                            <h4> Programming & Data Structures Lab</h4>
                            <p>The Programming & Data Structures Lab is aimed to teach students the basic concepts of programming and data structures using the C programming language in Linux environment.</p>
                        </div>
                        <div class="location">Prof. Soumyajit Dey </div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card6" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                         <label for="card6" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~dsamanta/courses/pds_lab/index.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card6" class="button b" aria-hidden="true">
                        <label for="card6" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"6"});document.getElementById("table").style.animation = "tble6 4s ease-out 1 "}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>
                        </label></label>
                    </div>
                </div>
            </div>
            </div>
    </div>

       </div>
         
    <div id="PARTICIPANTS" class="participants">
        <br/> <br/> <br/>
        <h1 style={{color:'white'}}><big style={{textShadow:'1px 1px 2px black, 2px 0 1em lightgreen, 0 0 0.2em green'}}>PARTICIPANTS</big></h1>
     <div style={{color:'aquamarine', backgroundColor:'coral'}}>Present Course : <big style={{color:'white', backgroundColor:'coral'}}>{sub}</big></div> 
        <div style={{msOverflowX:'auto'}} class="tbl">
        <span class="flex-container">
                <button class="buttonz" onClick={()=>{this.setState({visible:"1"});document.getElementById("table").style.animation = "tble 1.5s 1"}}>CS60041</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"2"});document.getElementById("table").style.animation = "tble2 1.5s 1"}}>CS41001</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"3"});document.getElementById("table").style.animation = "tble3 1.5s 1"}}>CS31005</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"4"});document.getElementById("table").style.animation = "tble4 1.5s 1"}}>CS31007</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"5"});document.getElementById("table").style.animation = "tble5 1.5s 1"}}>CS21001</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"6"});document.getElementById("table").style.animation = "tble6 1.5s 1"}}>CS19001</button> &nbsp; &nbsp;
            </span>
        <table id="table">
           
          <tr>
            <th style={{color:'black'}}>Student Name</th>
            <th style={{color:'black'}}>Roll Number</th>
            <th></th>
          </tr>
         <span id="taab"></span>
         {list}
       
        </table>

        <div><br/>
                        <button onClick= {()=>{
                              this.deleteThisGoal();
                                       // alert('All Participants from the course '+sub+' are added Successfully')                                      
                                        }} class="button" style={{color:'black',zIndex:'5',cursor:'pointer',transform:'scale(1.01)'}}>ADD ALL PARTICPANTS
                        </button>
         </div>
         {this.state.alert}
        </div>
        
    </div>
    <Footer className="footer"
       columns={[
         {
            
           icon: (
            <big><big><big><big><img width="50vh" className="favicon1" src="data:image/jpeg;base64,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" />
           </big></big> </big> </big> 
           ),
           title: <big><big><big><big>&emsp;@Teaching_Assistant</big> </big> </big></big> ,
           
           url: '#',
           
           description: 'Have no fear ,Teaching Assistant is here',
           openExternal: true,
         },
       ]}
       bottom="Copyright &copy; @Teaching_Assistant 2019-2020"
     />
            </div>
        )
    }
}




export default Subjects
